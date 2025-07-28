"use client";

import React from "react";

const newsItems = [
  "Breaking: SAEEE 2026 results declared - Check your scores now",
  "Admissions open for B.Tech 2026 - Apply before deadline",
  "Scholarship applications extended till March 15th",
  "Campus placements achieve 95% success rate this year",
  "New AI and Machine Learning course launched for 2026 batch",
  "Industry partnerships expanded with leading tech companies",
  "Research grants worth ₹50 crores approved for innovation projects",
  "International exchange programs now available for all departments",
];

const AlertSlider: React.FC = () => {
  const duplicatedNews = [...newsItems, ...newsItems];

  return (
    <div className="w-full bg-[#831238]/90 text-white overflow-hidden relative">
      <div className="flex items-center">
        {/* Breaking News Label */}
        <div className="bg-[#831238] px-4 py-4 font-bold text-sm uppercase tracking-wide flex-shrink-0 z-10">
          NEWS UPDATE
        </div>

        {/* Scrolling News Container */}
        <div className="flex-1 overflow-hidden relative">
          <div className="flex whitespace-nowrap animate-[scroll_60s_linear_infinite] hover:[animation-play-state:paused]">
            {duplicatedNews.map((news, index) => (
              <span
                key={index}
                className="inline-block px-8 py-2 text-sm font-medium"
              >
                {news}
                <span className="mx-4 text-red-300">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertSlider;
