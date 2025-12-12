import { useEffect, useState } from "react";

const GothicBook = () => {
  const [petals, setPetals] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: 20 + Math.random() * 60,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 3,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="relative w-72 md:w-96 h-80 md:h-96">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-wine/30 to-wine-dark/50 blur-3xl opacity-60" />
      
      {/* Main book container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Book SVG */}
        <svg
          viewBox="0 0 200 160"
          className="w-full h-auto drop-shadow-2xl"
          style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))" }}
        >
          {/* Book spine shadow */}
          <ellipse cx="100" cy="145" rx="70" ry="8" fill="hsl(0, 0%, 5%)" opacity="0.5" />
          
          {/* Left page */}
          <path
            d="M100 20 L100 130 Q60 135 20 130 L20 25 Q60 20 100 20"
            fill="hsl(38, 25%, 88%)"
            stroke="hsl(200, 10%, 70%)"
            strokeWidth="0.5"
          />
          {/* Left page texture lines */}
          <g opacity="0.3">
            {[35, 45, 55, 65, 75, 85, 95, 105, 115].map((y) => (
              <path
                key={y}
                d={`M30 ${y} Q65 ${y + 2} 95 ${y}`}
                stroke="hsl(200, 10%, 60%)"
                strokeWidth="0.3"
                fill="none"
              />
            ))}
          </g>
          
          {/* Right page */}
          <path
            d="M100 20 L100 130 Q140 135 180 130 L180 25 Q140 20 100 20"
            fill="hsl(38, 30%, 92%)"
            stroke="hsl(200, 10%, 70%)"
            strokeWidth="0.5"
          />
          {/* Right page texture lines */}
          <g opacity="0.3">
            {[35, 45, 55, 65, 75, 85, 95, 105, 115].map((y) => (
              <path
                key={y}
                d={`M105 ${y} Q140 ${y + 2} 175 ${y}`}
                stroke="hsl(200, 10%, 60%)"
                strokeWidth="0.3"
                fill="none"
              />
            ))}
          </g>
          
          {/* Book spine */}
          <path
            d="M98 20 L98 130 Q100 132 102 130 L102 20 Q100 18 98 20"
            fill="hsl(0, 0%, 20%)"
          />
          
          {/* Book cover edges */}
          <path
            d="M18 25 L18 132 Q60 138 100 132"
            fill="none"
            stroke="hsl(200, 15%, 75%)"
            strokeWidth="2"
          />
          <path
            d="M182 25 L182 132 Q140 138 100 132"
            fill="none"
            stroke="hsl(200, 15%, 75%)"
            strokeWidth="2"
          />
          
          {/* Silver corner ornaments - Top left */}
          <path
            d="M22 28 L22 38 M22 28 L32 28"
            stroke="hsl(200, 15%, 75%)"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Top right */}
          <path
            d="M178 28 L178 38 M178 28 L168 28"
            stroke="hsl(200, 15%, 75%)"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Bottom left */}
          <path
            d="M22 125 L22 115 M22 125 L32 125"
            stroke="hsl(200, 15%, 75%)"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Bottom right */}
          <path
            d="M178 125 L178 115 M178 125 L168 125"
            stroke="hsl(200, 15%, 75%)"
            strokeWidth="1.5"
            fill="none"
          />
          
          {/* Rose stem */}
          <path
            d="M100 130 Q95 100 100 70"
            stroke="hsl(140, 30%, 25%)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M100 110 Q90 105 85 95"
            stroke="hsl(140, 30%, 25%)"
            strokeWidth="1.5"
            fill="none"
          />
          
          {/* Rose leaves */}
          <ellipse
            cx="82"
            cy="92"
            rx="8"
            ry="4"
            fill="hsl(140, 35%, 22%)"
            transform="rotate(-30, 82, 92)"
          />
          <ellipse
            cx="115"
            cy="100"
            rx="7"
            ry="3.5"
            fill="hsl(140, 35%, 22%)"
            transform="rotate(25, 115, 100)"
          />
          
          {/* Main rose */}
          <g transform="translate(100, 55)">
            {/* Outer petals */}
            <ellipse cx="-12" cy="5" rx="10" ry="8" fill="hsl(350, 65%, 22%)" transform="rotate(-30, -12, 5)" />
            <ellipse cx="12" cy="5" rx="10" ry="8" fill="hsl(350, 65%, 25%)" transform="rotate(30, 12, 5)" />
            <ellipse cx="-8" cy="12" rx="9" ry="7" fill="hsl(350, 60%, 20%)" transform="rotate(-15, -8, 12)" />
            <ellipse cx="8" cy="12" rx="9" ry="7" fill="hsl(350, 60%, 23%)" transform="rotate(15, 8, 12)" />
            
            {/* Middle petals */}
            <ellipse cx="-6" cy="0" rx="8" ry="6" fill="hsl(350, 70%, 28%)" transform="rotate(-20, -6, 0)" />
            <ellipse cx="6" cy="0" rx="8" ry="6" fill="hsl(350, 70%, 30%)" transform="rotate(20, 6, 0)" />
            <ellipse cx="0" cy="8" rx="7" ry="5" fill="hsl(350, 65%, 26%)" />
            
            {/* Inner petals */}
            <ellipse cx="-3" cy="-2" rx="5" ry="4" fill="hsl(350, 75%, 32%)" transform="rotate(-10, -3, -2)" />
            <ellipse cx="3" cy="-2" rx="5" ry="4" fill="hsl(350, 75%, 35%)" transform="rotate(10, 3, -2)" />
            
            {/* Center */}
            <circle cx="0" cy="2" r="3" fill="hsl(350, 80%, 18%)" />
          </g>
          
          {/* Small decorative rose bud */}
          <g transform="translate(83, 90)">
            <ellipse cx="0" cy="0" rx="4" ry="3" fill="hsl(350, 65%, 25%)" transform="rotate(-20)" />
            <ellipse cx="2" cy="1" rx="3" ry="2" fill="hsl(350, 70%, 30%)" transform="rotate(15)" />
          </g>
        </svg>
        
        {/* Floating petals animation */}
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="absolute w-3 h-2 rounded-full opacity-60"
            style={{
              left: `${petal.left}%`,
              bottom: "30%",
              background: `hsl(350, ${60 + Math.random() * 20}%, ${25 + Math.random() * 10}%)`,
              animation: `floatPetal ${petal.duration}s ease-in-out infinite`,
              animationDelay: `${petal.delay}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>
      
      {/* Silver frame corners */}
      <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-silver" />
      <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-silver" />
      <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-silver" />
      <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-silver" />
      
      <style>{`
        @keyframes floatPetal {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-40px) rotate(180deg) translateX(10px);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default GothicBook;
