import { Trophy, RotateCcw, Home } from 'lucide-react';

interface ResultsProps {
  score: number;
  total: number;
  level: 'basic' | 'intermediate' | 'advanced';
  onRestart: () => void;
  onBackToMenu: () => void;
}

export function Results({ score, total, level, onRestart, onBackToMenu }: ResultsProps) {
  const percentage = (score / total) * 100;
  
  const getLevelColor = () => {
    switch (level) {
      case 'basic':
        return '#00ff41';
      case 'intermediate':
        return '#ffaa00';
      case 'advanced':
        return '#ff0040';
    }
  };

  const getLevelName = () => {
    switch (level) {
      case 'basic':
        return 'BÁSICO';
      case 'intermediate':
        return 'INTERMEDIÁRIO';
      case 'advanced':
        return 'AVANÇADO';
    }
  };

  const getMessage = () => {
    if (percentage === 100) return 'ACESSO CONCEDIDO! HACKER MASTER!';
    if (percentage >= 80) return 'EXCELENTE! ACESSO AUTORIZADO!';
    if (percentage >= 60) return 'BOM TRABALHO! PERMISSÃO CONCEDIDA';
    if (percentage >= 40) return 'ACESSO PARCIAL. TENTE NOVAMENTE';
    return 'ACESSO NEGADO. SISTEMA BLOQUEADO';
  };

  const color = getLevelColor();

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="border-2 bg-black/80 p-12 relative overflow-hidden backdrop-blur-sm" style={{ borderColor: color }}>
        {/* Scan lines effect */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,currentColor_2px,currentColor_4px)]" style={{ color }} />
        
        <div className="relative z-10 text-center">
          <Trophy className="w-24 h-24 mx-auto mb-6 animate-pulse" style={{ color }} strokeWidth={1.5} />
          
          <h2 className="text-4xl mb-4 font-mono glitch-active" data-text={getMessage()} style={{ color }}>
            {getMessage()}
          </h2>
          
          <div className="my-8">
            <div className="text-6xl font-mono mb-4" style={{ color }}>
              {score}/{total}
            </div>
            <div className="text-2xl font-mono mb-2" style={{ color: `${color}cc` }}>
              {percentage.toFixed(0)}% DE PRECISÃO
            </div>
            <div className="text-lg font-mono" style={{ color: `${color}99` }}>
              NÍVEL: {getLevelName()}
            </div>
          </div>

          {/* Progress Circle */}
          <div className="relative w-48 h-48 mx-auto my-8">
            <svg className="transform -rotate-90 w-48 h-48">
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke={`${color}33`}
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke={color}
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 88}`}
                strokeDashoffset={`${2 * Math.PI * 88 * (1 - percentage / 100)}`}
                className="transition-all duration-1000"
                style={{ filter: `drop-shadow(0 0 10px ${color})` }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-mono" style={{ color }}>
                {percentage.toFixed(0)}%
              </span>
            </div>
          </div>

          <div className="flex gap-4 justify-center mt-8">
            <button
              onClick={onRestart}
              className="flex items-center gap-2 px-8 py-4 border-2 font-mono transition-all duration-300 hover:shadow-[0_0_20px_currentColor]"
              style={{ 
                borderColor: color,
                color: color,
                backgroundColor: 'rgba(0,0,0,0.5)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = `${color}22`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)';
              }}
            >
              <RotateCcw className="w-5 h-5" />
              REINICIAR
            </button>
            
            <button
              onClick={onBackToMenu}
              className="flex items-center gap-2 px-8 py-4 border-2 border-[#00ff41] text-[#00ff41] bg-black/50 hover:bg-[#00ff41]/10 font-mono transition-all duration-300 hover:shadow-[0_0_20px_#00ff41]"
            >
              <Home className="w-5 h-5" />
              MENU
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
