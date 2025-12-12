import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const newPetals: Petal[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 6,
      size: 8 + Math.random() * 12,
      rotation: Math.random() * 360,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute opacity-40"
          style={{
            left: `${petal.left}%`,
            top: "-20px",
            width: `${petal.size}px`,
            height: `${petal.size * 0.7}px`,
            animation: `fallPetal ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          <svg
            viewBox="0 0 20 14"
            className="w-full h-full"
            style={{ transform: `rotate(${petal.rotation}deg)` }}
          >
            <ellipse
              cx="10"
              cy="7"
              rx="9"
              ry="6"
              fill={`hsl(350, ${55 + Math.random() * 20}%, ${20 + Math.random() * 15}%)`}
            />
            <path
              d="M10 1 Q12 7 10 13"
              stroke="hsl(350, 70%, 15%)"
              strokeWidth="0.5"
              fill="none"
              opacity="0.5"
            />
          </svg>
        </div>
      ))}
      
      <style>{`
        @keyframes fallPetal {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingPetals;
