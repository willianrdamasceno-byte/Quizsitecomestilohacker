import { motion } from "motion/react";
import { Terminal, Cpu, Zap } from "lucide-react";

export type Level = "basic" | "intermediate" | "advanced";

interface LevelSelectorProps {
  onSelectLevel: (level: Level) => void;
}

const levels = [
  {
    id: "basic" as Level,
    name: "BÁSICO",
    icon: Terminal,
    color: "#00ff00",
    description: "Conceitos fundamentais"
  },
  {
    id: "intermediate" as Level,
    name: "INTERMEDIÁRIO",
    icon: Cpu,
    color: "#ffff00",
    description: "Conhecimento técnico"
  },
  {
    id: "advanced" as Level,
    name: "AVANÇADO",
    icon: Zap,
    color: "#ff0000",
    description: "Expertise profissional"
  }
];

export function LevelSelector({ onSelectLevel }: LevelSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
      {levels.map((level, index) => {
        const Icon = level.icon;
        return (
          <motion.button
            key={level.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectLevel(level.id)}
            className="relative border-2 bg-black/80 p-8 overflow-hidden group"
            style={{ borderColor: level.color }}
          >
            {/* Background animation */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-10"
              style={{ backgroundColor: level.color }}
              animate={{
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            {/* Scanline effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(transparent 50%, ${level.color}15 50%)`,
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

            <div className="relative z-10 flex flex-col items-center gap-4">
              <Icon size={48} style={{ color: level.color }} />
              <h2 className="font-mono text-2xl" style={{ color: level.color }}>
                [{level.name}]
              </h2>
              <p className="text-green-400 font-mono text-sm">
                {level.description}
              </p>
              <div className="mt-2 text-green-500 font-mono text-xs animate-pulse">
                &gt; INICIAR_
              </div>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
