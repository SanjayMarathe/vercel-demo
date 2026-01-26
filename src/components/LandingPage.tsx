"use client";

import { useState } from "react";

interface LandingPageProps {
  className?: string;
}

export function LandingPage({ className = "" }: LandingPageProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`p-4  ${className}`}>
      {/* Change the background color of the landing page */}
      <button
        onClick={() => setIsActive(!isActive)}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        {isActive ? "Active" : "Click Me"}
      </button>
    </div>
  );
}

export default LandingPage;
