import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface GlitchTextProps {
  children: string;
  className?: string;
}

export function GlitchText({ children, className = "" }: GlitchTextProps) {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <motion.span
        className="relative z-10"
        animate={glitch ? {
          x: [0, -2, 2, -1, 1, 0],
          textShadow: [
            "0 0 0 transparent",
            "2px 0 0 #ff00ff, -2px 0 0 #00ffff",
            "-2px 0 0 #ff00ff, 2px 0 0 #00ffff",
            "0 0 0 transparent"
          ]
        } : {}}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
      {glitch && (
        <>
          <span 
            className="absolute top-0 left-0 text-[#ff00ff] opacity-70 z-0"
            style={{ transform: "translate(-2px, 0)" }}
          >
            {children}
          </span>
          <span 
            className="absolute top-0 left-0 text-[#00ffff] opacity-70 z-0"
            style={{ transform: "translate(2px, 0)" }}
          >
            {children}
          </span>
        </>
      )}
    </div>
  );
}
