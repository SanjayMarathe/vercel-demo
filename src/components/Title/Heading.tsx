"use client";

import { useState } from "react";

interface Title/HeadingProps {
  className?: string;
}

export function Title/Heading({ className = "" }: Title/HeadingProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`p-4  ${className}`}>
      {/* Change a title text to 'unlock your full professional potential' */}
      <button
        onClick={() => setIsActive(!isActive)}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        {isActive ? "Active" : "Click Me"}
      </button>
    </div>
  );
}

export default Title/Heading;
