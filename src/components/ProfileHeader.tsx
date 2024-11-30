import React from 'react';

export default function ProfileHeader() {
  return (
    <div>
      <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500" />
      <div className="flex flex-col items-center">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-white -mt-16 shadow-lg"
        />
        <h1 className="mt-4 text-3xl font-bold">이창희</h1>
        <p className="text-gray-600 mt-2">Ph.D Candidate in Premodern Korean Literature, Korea University</p>
      </div>
    </div>
  );
}