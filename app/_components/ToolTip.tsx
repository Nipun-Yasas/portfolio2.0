import React, { useState } from "react";

interface ToolTipProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
}

export default function ToolTip({ trigger, content }: ToolTipProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block group">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
        className="relative px-6 py-3 text-sm font-semibold text-white bg-indigo-600/90 rounded-xl hover:bg-indigo-700/90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 overflow-hidden cursor-pointer"
      >
        <div className="absolute inset-0  blur-xl group-hover:opacity-75 transition-opacity"></div>

        <span className="relative flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            className="w-4 h-4"
          >
            <path
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
          {trigger}
        </span>
      </button>

      <div
        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 transition-all duration-300 ease-out z-[60] ${
          isOpen
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0"
        }`}
      >
        <div className="relative p-4 bg-backgroundSecondary backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(79,70,229,0.15)]">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/20">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 text-indigo-400"
              >
                <path
                  clipRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-textPrimary">Details</h3>
          </div>

          <div className="space-y-2 text-sm text-textPrimary">{content}</div>

          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl opacity-50 pointer-events-none"></div>

          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-gray-900/95 to-gray-800/95 rotate-45 border-r border-b border-white/10"></div>
        </div>
      </div>
    </div>
  );
}
