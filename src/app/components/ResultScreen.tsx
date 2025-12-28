import { motion } from "motion/react";
import { Trophy, RotateCcw, Home } from "lucide-react";
import { GlitchText } from "./GlitchText";

interface ResultScreenProps {
  score: number;
  total: number;
  levelName: string;
  levelColor: string;
  onRestart: () => void;
  onBackToMenu: () => void;
}

export function ResultScreen({ 
  score, 
  total, 
  levelName, 
  levelColor, 
  onRestart, 
  onBackToMenu 
}: ResultScreenProps) {
  const percentage = (score / total) * 100;
  
  const getMessage = () => {
    if (percentage === 100) return "PERFEITO! VOCÊ É UM HACKER MASTER!";
    if (percentage >= 70) return "EXCELENTE! SUAS HABILIDADES SÃO IMPRESSIONANTES!";
    if (percentage >= 50) return "BOM TRABALHO! CONTINUE PRATICANDO!";
    return "NÃO DESISTA! A PRÁTICA LEVA À PERFEIÇÃO!";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-3xl border-2 bg-black/90 p-12 relative overflow-hidden"
      style={{ borderColor: levelColor }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ 
          background: `radial-gradient(circle at center, ${levelColor}15 0%, transparent 70%)` 
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Trophy icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <Trophy size={80} style={{ color: levelColor }} />
        </motion.div>

        {/* Level */}
        <div className="font-mono text-lg" style={{ color: levelColor }}>
          NÍVEL: [{levelName}]
        </div>

        {/* Score */}
        <div className="text-center">
          <GlitchText className="text-6xl font-mono text-green-400">
            {score}/{total}
          </GlitchText>
          <p className="text-2xl font-mono mt-2 text-green-300">
            {percentage.toFixed(0)}% DE ACERTOS
          </p>
        </div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="font-mono text-xl" style={{ color: levelColor }}>
            {getMessage()}
          </p>
        </motion.div>

        {/* Statistics */}
        <div className="w-full grid grid-cols-2 gap-4 mt-4">
          <div className="border border-green-500 bg-black/50 p-4 text-center">
            <p className="text-green-400 font-mono text-sm">CORRETAS</p>
            <p className="text-3xl font-mono mt-2 text-green-400">{score}</p>
          </div>
          <div className="border border-red-500 bg-black/50 p-4 text-center">
            <p className="text-red-400 font-mono text-sm">INCORRETAS</p>
            <p className="text-3xl font-mono mt-2 text-red-400">{total - score}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRestart}
            className="flex-1 p-4 border-2 bg-black/80 text-green-400 font-mono hover:bg-green-500/10 transition-colors flex items-center justify-center gap-2"
            style={{ borderColor: levelColor }}
          >
            <RotateCcw size={20} />
            TENTAR NOVAMENTE
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBackToMenu}
            className="flex-1 p-4 border-2 border-green-500 bg-black/80 text-green-400 font-mono hover:bg-green-500/10 transition-colors flex items-center justify-center gap-2"
          >
            <Home size={20} />
            MENU PRINCIPAL
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
