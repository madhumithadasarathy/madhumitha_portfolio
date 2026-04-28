import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const VisualEngine = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Pulsing animation for nodes
    anime({
      targets: '.network-node',
      r: [1.2, 2.5],
      opacity: [0.3, 0.8],
      easing: 'easeInOutQuad',
      duration: (el, i) => 2500 + (i * 150),
      direction: 'alternate',
      loop: true
    });

    // Slow drift for node groups
    anime({
      targets: '.node-group',
      translateX: () => anime.random(-15, 15),
      translateY: () => anime.random(-15, 15),
      easing: 'easeInOutSine',
      duration: 6000,
      direction: 'alternate',
      loop: true
    });

    // Connecting lines drifting/flowing
    anime({
      targets: '.network-line',
      strokeDashoffset: [anime.setDashoffset, 0],
      opacity: [0.05, 0.2],
      easing: 'easeInOutSine',
      duration: 4000,
      delay: anime.stagger(150),
      direction: 'alternate',
      loop: true
    });
  }, []);

  // Generate random nodes - fixed seed for consistency in render
  const nodes = [
    { id: 0, x: 30, y: 30 }, { id: 1, x: 50, y: 20 }, { id: 2, x: 70, y: 35 },
    { id: 3, x: 25, y: 60 }, { id: 4, x: 45, y: 55 }, { id: 5, x: 75, y: 65 },
    { id: 6, x: 55, y: 80 }, { id: 7, x: 20, y: 45 }, { id: 8, x: 80, y: 40 },
    { id: 9, x: 40, y: 70 }, { id: 10, x: 65, y: 25 }, { id: 11, x: 85, y: 55 },
    { id: 12, x: 35, y: 15 }, { id: 13, x: 60, y: 45 }, { id: 14, x: 15, y: 75 }
  ];

  const lines = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dist = Math.sqrt(
        Math.pow(nodes[i].x - nodes[j].x, 2) + Math.pow(nodes[i].y - nodes[j].y, 2)
      );
      if (dist < 35) {
        lines.push({ n1: nodes[i], n2: nodes[j] });
      }
    }
  }

  return (
    <div ref={containerRef} className="w-full h-full relative flex items-center justify-center">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#A3FF12]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <svg viewBox="0 0 100 100" className="w-[80%] h-[80%] drop-shadow-[0_0_20px_rgba(163,255,18,0.2)]">
        <defs>
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Dynamic Lines */}
        {lines.map((l, i) => (
          <line
            key={i}
            x1={l.n1.x}
            y1={l.n1.y}
            x2={l.n2.x}
            y2={l.n2.y}
            className="network-line"
            stroke="#A3FF12"
            strokeWidth="0.2"
            strokeDasharray="4 2"
          />
        ))}

        {/* Pulsing Nodes */}
        {nodes.map((n) => (
          <g key={n.id} className="node-group">
            <circle
              cx={n.x}
              cy={n.y}
              r="2"
              fill="#A3FF12"
              className="network-node"
              filter="url(#nodeGlow)"
            />
            <circle
              cx={n.x}
              cy={n.y}
              r="4"
              fill="transparent"
              stroke="#A3FF12"
              strokeWidth="0.05"
              className="opacity-10"
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default VisualEngine;
