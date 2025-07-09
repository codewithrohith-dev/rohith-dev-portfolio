
'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [fadeOut, setFadeOut] = useState(false);
  const [codeLines, setCodeLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  
  const codeSequence = [
    "import { Developer } from './universe';",
    "const rohith = new Developer();",
    "rohith.loadSkills(['React', 'Node.js', 'Web3']);",
    "rohith.initializePortfolio();",
    "console.log('Welcome to my world!');",
    "// Launching portfolio in 3...",
    "// 2...",
    "// 1...",
    "// Ready! 🚀"
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const timer = setInterval(() => {
      if (currentLineIndex < codeSequence.length) {
        setCodeLines(prev => [...prev, codeSequence[currentLineIndex]]);
        setCurrentLineIndex(prev => prev + 1);
      } else {
        clearInterval(timer);
        setTimeout(() => setFadeOut(true), 1000);
      }
    }, 400);

    return () => clearInterval(timer);
  }, [currentLineIndex, mounted, codeSequence]);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center transition-all duration-1000 ${fadeOut ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}>
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      <div className="text-center relative z-10 max-w-2xl mx-auto px-6">
        {/* Developer terminal window */}
        <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg shadow-2xl border border-purple-500/30 mb-8">
          {/* Terminal header */}
          <div className="flex items-center justify-between bg-gray-800/50 px-4 py-3 rounded-t-lg border-b border-gray-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400 text-sm font-mono">portfolio.js</span>
            <div className="w-12"></div>
          </div>
          
          {/* Terminal content */}
          <div className="p-6 font-mono text-left min-h-[200px]">
            {codeLines.map((line, index) => (
              <div key={index} className="flex items-center mb-2 animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                <span className="text-purple-400 mr-3">{index + 1}</span>
                <span className={`
                  ${line.startsWith('import') || line.startsWith('const') ? 'text-blue-400' : ''}
                  ${line.includes('new Developer') ? 'text-green-400' : ''}
                  ${line.includes('console.log') ? 'text-yellow-400' : ''}
                  ${line.startsWith('//') ? 'text-gray-500' : ''}
                  ${!line.startsWith('import') && !line.includes('new Developer') && !line.includes('console.log') && !line.startsWith('//') ? 'text-gray-300' : ''}
                `}>
                  {line}
                </span>
                {index === codeLines.length - 1 && (
                  <span className="ml-1 text-purple-400 animate-pulse">|</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Loading indicators */}
        <div className="flex justify-center space-x-2 mb-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"
              style={{animationDelay: `${i * 0.2}s`}}
            ></div>
          ))}
        </div>

        {/* Status text */}
        <p className="text-purple-300 font-mono text-lg animate-pulse">
          Initializing R ROHITH's Portfolio...
        </p>
      </div>
    </div>
  );
}
