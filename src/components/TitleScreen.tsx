"use client";

import { useState } from "react";

interface TitleScreenProps {
  className?: string;
}

export function TitleScreen({ className = "" }: TitleScreenProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`p-4  ${className}`}>
      {/* Change title screen text from 'unlock your full academic potential' to 'unlock your full professional potential' */}
      <button
        onClick={() => setIsActive(!isActive)}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        {isActive ? "Active" : "Click Me"}
      </button>
    </div>
  );
}

export default TitleScreen;
