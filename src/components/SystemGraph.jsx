import React, { useEffect, useState } from 'react';
import anime from 'animejs';

const Node = ({ label, x, y, isActive, isHovered, onHover, onClick, count = 6 }) => {
  return (
    <g 
      className="cursor-pointer group"
      onMouseEnter={() => onHover(label)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(label)}
    >
      {/* Node Glow Shadow */}
      <circle
        cx={x} cy={y} r="4.5"
        className={`transition-all duration-700 ${isActive || isHovered ? 'fill-[#A3FF12] opacity-100' : 'fill-white/10 opacity-30'}`}
        style={{ filter: isActive || isHovered ? 'drop-shadow(0 0 12px #A3FF12)' : 'none' }}
      />
      
      {/* Outer Rim */}
      <circle
        cx={x} cy={y} r="7"
        fill="transparent"
        stroke="#A3FF12"
        strokeWidth="0.4"
        className={`transition-all duration-700 ${isActive || isHovered ? 'opacity-40 scale-125' : 'opacity-10 scale-100'}`}
      />
      
      {/* Label Text */}
      <text
        x={x} y={y + 16}
        textAnchor="middle"
        className={`text-[4.5px] font-black tracking-[0.2em] uppercase transition-all duration-500 ${isActive || isHovered ? 'fill-[#A3FF12]' : 'fill-white/20'}`}
      >
        {label}
      </text>

      {/* Project Count (Visible on hover or active) */}
      <text
        x={x} y={y - 12}
        textAnchor="middle"
        className={`text-[3.5px] font-mono tracking-tighter uppercase transition-all duration-300 ${isHovered || isActive ? 'fill-white opacity-100' : 'opacity-0'}`}
      >
        {count} PROJECTS
      </text>
    </g>
  );
};

const SystemGraph = ({ activeCategory, onFilterChange }) => {
  const [hoveredNode, setHoveredNode] = useState(null);

  const nodes = [
    { label: "AI / ML", x: 50, y: 15 },
    { label: "Computer Vision", x: 88, y: 35 },
    { label: "Gen AI", x: 80, y: 80 },
    { label: "Full Stack", x: 20, y: 80 },
    { label: "Frontend", x: 12, y: 35 },
  ];

  useEffect(() => {
    // Flowing line animation
    anime({
      targets: '.flow-line',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      duration: 3500,
      loop: true
    });
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center p-12">
      <svg viewBox="0 0 100 100" className="w-full max-w-[650px] drop-shadow-[0_0_40px_rgba(163,255,18,0.15)] overflow-visible">
        
        {/* Core-to-Domain Connection Lines */}
        {nodes.map((node, i) => {
          const isNodeActive = activeCategory === node.label || activeCategory === "All";
          const isTargeted = hoveredNode === node.label || activeCategory === node.label;
          
          return (
            <g key={i}>
              {/* Static Base Line */}
              <line
                x1="50" y1="50" x2={node.x} y2={node.y}
                stroke={isTargeted ? "#A3FF12" : "white"}
                strokeWidth="0.25"
                className={`transition-all duration-700 ${isTargeted ? 'opacity-30' : 'opacity-[0.03]'}`}
              />
              
              {/* Animated Flow Line */}
              {isTargeted && (
                <line
                  x1="50" y1="50" x2={node.x} y2={node.y}
                  stroke="#A3FF12"
                  strokeWidth="0.5"
                  strokeDasharray="3 6"
                  className="flow-line opacity-50"
                />
              )}
            </g>
          );
        })}

        {/* SYSTEM CORE (Center Node) */}
        <g onClick={() => onFilterChange("All")} className="cursor-pointer group">
          <circle
            cx="50" cy="50" r="6"
            fill="#A3FF12"
            className="animate-pulse shadow-[0_0_25px_#A3FF12]"
          />
          <circle
            cx="50" cy="50" r="11"
            fill="transparent"
            stroke="#A3FF12"
            strokeWidth="0.6"
            className="opacity-30 animate-[spin_12s_linear_infinite]"
            strokeDasharray="5 3"
          />
          <text
            x="50" y="68"
            textAnchor="middle"
            className="text-[5px] font-black fill-white/40 tracking-[0.5em] uppercase transition-colors group-hover:fill-[#A3FF12]"
          >
            System_Core
          </text>
        </g>

        {/* Inter-Domain Connections (Subtle architecture) */}
        <path
          d={`M ${nodes[0].x} ${nodes[0].y} Q 70 25 ${nodes[1].x} ${nodes[1].y}`}
          fill="none" stroke="white" strokeWidth="0.1" className="opacity-5"
        />
        <path
          d={`M ${nodes[4].x} ${nodes[4].y} Q 30 25 ${nodes[0].x} ${nodes[0].y}`}
          fill="none" stroke="white" strokeWidth="0.1" className="opacity-5"
        />

        {/* DOMAIN NODES */}
        {nodes.map((node) => (
          <Node
            key={node.label}
            {...node}
            isActive={activeCategory === node.label}
            isHovered={hoveredNode === node.label}
            onHover={setHoveredNode}
            onClick={onFilterChange}
          />
        ))}
      </svg>
    </div>
  );
};

export default SystemGraph;
