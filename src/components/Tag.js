import React from 'react';

export default function Tag({ text }) {
    {/* Tech Stack Tags */}
    return (
      <span className="bg-gray-200 text-gray-700 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-lg inline-block">
        {text}
      </span>
    );
  }