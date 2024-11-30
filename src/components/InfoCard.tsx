import React from 'react';

interface InfoCardProps {
  title: string;
  content: string;
}

export default function InfoCard({ title, content }: InfoCardProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="font-semibold text-gray-700">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}