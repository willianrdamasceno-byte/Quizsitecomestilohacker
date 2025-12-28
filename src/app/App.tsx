import { useState } from "react";
import { motion } from "motion/react";
import { LevelSelector, Level } from "./components/LevelSelector";
import { QuizCard } from "./components/QuizCard";
import { ResultScreen } from "./components/ResultScreen";
import { GlitchText } from "./components/GlitchText";
import { basicQuestions, intermediateQuestions, advancedQuestions } from "./data/questions";

type Screen = "menu" | "quiz" | "results";

export default function App() {
  const [screen, setScreen] = useState<Screen>("menu");
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [score, setScore] = useState(0);

  const getLevelData = () => {
    switch (selectedLevel) {
      case "basic":
        return { 
          questions: basicQuestions, 
          name: "BÁSICO", 
          color: "#00ff00" 
        };
      case "intermediate":
        return { 
          questions: intermediateQuestions, 
          name: "INTERMEDIÁRIO", 
          color: "#ffff00" 
        };
      case "advanced":
        return { 
          questions: advancedQuestions, 
          name: "AVANÇADO", 
          color: "#ff0000" 
        };
      default:
        return { 
          questions: basicQuestions, 
          name: "BÁSICO", 
          color: "#00ff00" 
        };
    }
  };

  const handleSelectLevel = (level: Level) => {
    setSelectedLevel(level);
    setScreen("quiz");
    setScore(0);
  };

  const handleQuizComplete = (finalScore: number) => {
    setScore(finalScore);
    setScreen("results");
  };

  const handleRestart = () => {
    setScore(0);
    setScreen("quiz");
  };

  const handleBackToMenu = () => {
    setSelectedLevel(null);
    setScore(0);
    setScreen("menu");
  };

  const levelData = getLevelData();

  return (
    <div className="min-h-screen bg-black text-green-400 relative overflow-hidden">
      {/* Matrix-style background effect */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(0, 255, 0, .05) 25%, rgba(0, 255, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, .05) 75%, rgba(0, 255, 0, .05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(0, 255, 0, .05) 25%, rgba(0, 255, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, .05) 75%, rgba(0, 255, 0, .05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: "50px 50px"
          }}
        />
      </div>

      {/* Scanline effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-50 opacity-10"
        style={{
          background: "linear-gradient(transparent 50%, rgba(0, 255, 0, 0.1) 50%)",
          backgroundSize: "100% 4px",
        }}
        animate={{
          backgroundPosition: ["0 0", "0 4px"],
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        {screen === "menu" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-12 w-full"
          >
            {/* Title */}
            <div className="text-center space-y-4">
              <GlitchText className="text-5xl md:text-7xl font-mono">
                CYBER QUIZ
              </GlitchText>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl font-mono text-green-300"
              >
                &gt; TESTE SEUS CONHECIMENTOS EM INFORMÁTICA_
              </motion.p>
            </div>

            {/* ASCII Art decoration */}
            <motion.pre
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs text-green-600 hidden md:block"
            >
{`    ╔══════════════════════════════════════╗
    ║  █████╗ ██╗   ██╗██╗███████╗       ║
    ║ ██╔══██╗██║   ██║██║╚══███╔╝       ║
    ║ ██║  ██║██║   ██║██║  ███╔╝        ║
    ║ ██║  ██║██║   ██║██║ ███╔╝         ║
    ║ ╚█████╔╝╚██████╔╝██║███████╗       ║
    ║  ╚════╝  ╚═════╝ ╚═╝╚══════╝       ║
    ╚══════════════════════════════════════╝`}
            </motion.pre>

            {/* Level selector */}
            <LevelSelector onSelectLevel={handleSelectLevel} />

            {/* Footer text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-sm font-mono text-green-600 mt-8"
            >
              [SYSTEM READY] Selecione um nível para começar...
            </motion.p>
          </motion.div>
        )}

        {screen === "quiz" && selectedLevel && (
          <QuizCard
            questions={levelData.questions}
            levelName={levelData.name}
            levelColor={levelData.color}
            onComplete={handleQuizComplete}
          />
        )}

        {screen === "results" && selectedLevel && (
          <ResultScreen
            score={score}
            total={levelData.questions.length}
            levelName={levelData.name}
            levelColor={levelData.color}
            onRestart={handleRestart}
            onBackToMenu={handleBackToMenu}
          />
        )}
      </div>

      {/* Corner decorations */}
      <div className="fixed top-4 left-4 text-green-600 font-mono text-xs opacity-50">
        [SYSTEM_ONLINE]
      </div>
      <div className="fixed top-4 right-4 text-green-600 font-mono text-xs opacity-50">
        v2.0.1
      </div>
      <div className="fixed bottom-4 left-4 text-green-600 font-mono text-xs opacity-50">
        {new Date().toLocaleTimeString('pt-BR')}
      </div>
      <div className="fixed bottom-4 right-4 text-green-600 font-mono text-xs opacity-50 animate-pulse">
        ◉ CONNECTED
      </div>
    </div>
  );
}
