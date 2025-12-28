import { motion } from "motion/react";
import { useState } from "react";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizCardProps {
  questions: Question[];
  onComplete: (score: number) => void;
  levelName: string;
  levelColor: string;
}

export function QuizCard({ questions, onComplete, levelName, levelColor }: QuizCardProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  const handleAnswer = (answerIndex: number) => {
    if (showFeedback) return;

    setSelectedAnswer(answerIndex);
    setShowFeedback(true);

    if (answerIndex === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      onComplete(score + (selectedAnswer === question.correctAnswer ? 1 : 0));
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-3xl border-2 bg-black/90 p-8 relative overflow-hidden"
      style={{ borderColor: levelColor }}
    >
      {/* Glitch effect background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            ${levelColor} 0px,
            transparent 1px,
            transparent 2px,
            ${levelColor} 3px
          )`,
        }}
      />

      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="font-mono text-green-400 text-sm">
            QUESTÃO {currentQuestion + 1}/{questions.length}
          </span>
          <span className="font-mono text-green-400 text-sm">
            PONTOS: {score}
          </span>
        </div>
        <div className="h-2 bg-black border border-green-500">
          <motion.div
            className="h-full"
            style={{ backgroundColor: levelColor }}
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Level badge */}
      <div className="mb-6">
        <span 
          className="font-mono px-3 py-1 text-xs border"
          style={{ color: levelColor, borderColor: levelColor }}
        >
          [{levelName}]
        </span>
      </div>

      {/* Question */}
      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl mb-8 text-green-300 font-mono">
          &gt; {question.question}
        </h2>

        {/* Options */}
        <div className="space-y-4 mb-8">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectAnswer = index === question.correctAnswer;
            const showCorrect = showFeedback && isCorrectAnswer;
            const showIncorrect = showFeedback && isSelected && !isCorrect;

            return (
              <motion.button
                key={index}
                whileHover={!showFeedback ? { x: 10 } : {}}
                whileTap={!showFeedback ? { scale: 0.98 } : {}}
                onClick={() => handleAnswer(index)}
                disabled={showFeedback}
                className={`
                  w-full text-left p-4 border-2 font-mono transition-colors
                  ${!showFeedback && "hover:bg-green-500/10"}
                  ${showCorrect && "bg-green-500/20 border-green-500"}
                  ${showIncorrect && "bg-red-500/20 border-red-500"}
                  ${!showFeedback && "border-green-500"}
                  ${showFeedback && !showCorrect && !showIncorrect && "border-gray-600 opacity-50"}
                `}
              >
                <div className="flex items-center justify-between">
                  <span className={`
                    ${showCorrect && "text-green-400"}
                    ${showIncorrect && "text-red-400"}
                    ${!showFeedback && "text-green-400"}
                  `}>
                    [{String.fromCharCode(65 + index)}] {option}
                  </span>
                  {showCorrect && <CheckCircle2 className="text-green-400" size={24} />}
                  {showIncorrect && <XCircle className="text-red-400" size={24} />}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Feedback and Next button */}
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className={`p-4 border-2 font-mono ${
              isCorrect 
                ? "border-green-500 bg-green-500/10 text-green-400" 
                : "border-red-500 bg-red-500/10 text-red-400"
            }`}>
              {isCorrect ? "✓ CORRETO!" : "✗ INCORRETO!"}
            </div>

            <button
              onClick={handleNext}
              className="w-full p-4 border-2 border-green-500 bg-green-500/10 text-green-400 font-mono hover:bg-green-500/20 transition-colors flex items-center justify-center gap-2"
            >
              {isLastQuestion ? "VER RESULTADO" : "PRÓXIMA QUESTÃO"}
              <ArrowRight size={20} />
            </button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
