import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';

interface AwardCardProps {
  title: string;
  organization: string;
  year: string;
  description?: string;
  index: number;
}

export default function AwardCard({ title, organization, year, description, index }: AwardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-50 p-3 rounded-full">
            <Award className="text-blue-500" size={24} />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-600">{organization}</p>
            {description && (
              <p className="text-gray-500 mt-2 text-sm">{description}</p>
            )}
          </div>
        </div>
        <div className="flex items-center text-gray-500">
          <Calendar size={18} className="mr-2" />
          <span className="whitespace-nowrap">{year}</span>
        </div>
      </div>
    </motion.div>
  );
}