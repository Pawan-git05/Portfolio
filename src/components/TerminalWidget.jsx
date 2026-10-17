import React, { useState, useEffect, useRef } from 'react';
import { personalInfo, skillsData, projectsData, telemetryStats } from '../data/portfolioData';
import { Icon } from './Icons';

export const TerminalWidget = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { text: 'SYSTEM DISPATCH TERMINAL v2.4 // ONLINE', type: 'system' },
    { text: "Type 'help' to inspect available system commands or 'exit' to close.", type: 'info' }
  ]);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  // Global Ctrl + K / Cmd + K listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open
          const evt = new CustomEvent('open-terminal');
          window.dispatchEvent(evt);
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { text: `pawan@engine:~$ ${input}`, type: 'prompt' }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          text: `AVAILABLE SYSTEM COMMANDS:
  help       - Display this command index
  bio        - View biography, core focus & background
  skills     - List technical capabilities & mastery
  projects   - Display flagship and engineered systems
  telemetry  - Show live performance statistics
  contact    - Retrieve communication channels & handles
  matrix     - Toggle visual matrix rain simulation
  clear      - Purge current terminal buffer
  exit       - Terminate terminal session`,
          type: 'output'
        });
        break;

      case 'bio':
      case 'about':
        newHistory.push({
          text: `NAME: ${personalInfo.name}
TITLE: ${personalInfo.title}
LOCATION: ${personalInfo.location} (${personalInfo.timezone})
PITCH: ${personalInfo.bio}`,
          type: 'output'
        });
        break;

      case 'skills':
        const skillsFormatted = Object.entries(skillsData)
          .map(([category, list]) => `[${category}]: ${list.map((s) => `${s.name} (${s.level}%)`).join(', ')}`)
          .join('\n');
        newHistory.push({ text: skillsFormatted, type: 'output' });
        break;

      case 'projects':
        const projectsFormatted = projectsData
          .map((p) => `* ${p.title} (${p.category}) -> ${p.subtitle}\n  GitHub: ${p.github}`)
          .join('\n\n');
        newHistory.push({ text: projectsFormatted, type: 'output' });
        break;

      case 'telemetry':
      case 'stats':
        const statsFormatted = telemetryStats
          .map((s) => `* ${s.label}: ${s.value}${s.suffix}`)
          .join('\n');
        newHistory.push({ text: statsFormatted, type: 'output' });
        break;

      case 'contact':
        newHistory.push({
          text: `DIRECT CHANNELS:
  Email:    ${personalInfo.email}
  GitHub:   ${personalInfo.socials.github}
  LinkedIn: ${personalInfo.socials.linkedin}`,
          type: 'output'
        });
        break;

      case 'whoami':
        newHistory.push({
          text: 'guest@antigravity-client [Access Level: Explorer]',
          type: 'output'
        });
        break;

      case 'sudo':
        newHistory.push({
          text: 'Permission denied: User "guest" is not in the sudoers file. This incident will be reported.',
          type: 'error'
        });
        break;

      case 'matrix':
        newHistory.push({
          text: '01001110 01100101 01110101 01110010 01101111 01101110 01110011 00100000 01000001 01100011 01110100 01101001 01110110 01100101',
          type: 'matrix'
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        setInput('');
        return;

      default:
        newHistory.push({
          text: `Command not recognized: '${cmd}'. Type 'help' for available system commands.`,
          type: 'error'
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0C0C0C] border border-purple-500/40 rounded-2xl shadow-[0_0_50px_rgba(124,58,237,0.3)] overflow-hidden flex flex-col h-[480px]">
        
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#141414] border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80 transition-opacity"
              title="Close Terminal (Esc)"
            />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-3 font-mono text-xs text-neutral-400 font-bold">
              pawan@engine:~ (zsh)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
              Ctrl+K
            </span>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-white p-1 rounded transition-colors"
            >
              <Icon name="X" size={14} />
            </button>
          </div>
        </div>

        {/* Terminal Screen Area */}
        <div
          ref={scrollRef}
          className="flex-1 p-4 font-mono text-xs sm:text-sm overflow-y-auto space-y-2 select-text"
        >
          {history.map((item, idx) => (
            <div key={idx} className="leading-relaxed whitespace-pre-wrap">
              {item.type === 'system' && (
                <div className="text-purple-400 font-bold">{item.text}</div>
              )}
              {item.type === 'info' && (
                <div className="text-neutral-500">{item.text}</div>
              )}
              {item.type === 'prompt' && (
                <div className="text-orange-400 font-bold">{item.text}</div>
              )}
              {item.type === 'output' && (
                <div className="text-neutral-200">{item.text}</div>
              )}
              {item.type === 'matrix' && (
                <div className="text-green-400 font-mono tracking-widest">{item.text}</div>
              )}
              {item.type === 'error' && (
                <div className="text-red-400">{item.text}</div>
              )}
            </div>
          ))}
        </div>

        {/* Terminal Input Bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#111111] border-t border-white/10">
          <span className="font-mono text-xs text-orange-400 font-bold select-none">
            pawan@engine:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            placeholder="type command (e.g. 'help', 'skills', 'projects')..."
            className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none placeholder:text-neutral-600"
          />
        </div>

      </div>
    </div>
  );
};
