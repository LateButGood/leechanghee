import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, LucideIcon } from 'lucide-react';

interface ExperienceCardProps {
  institution: string;
  position: string;
  period: string;
  Icon: LucideIcon;
  index: number;
}

export default function ExperienceCard({ institution, position, period, Icon, index }: ExperienceCardProps) {
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
            <Icon className="text-blue-500" size={24} />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{institution}</h2>
            <p className="text-gray-600">{position}</p>
          </div>
        </div>
        <div className="flex items-center text-gray-500">
          <Calendar size={18} className="mr-2" />
          <span className="whitespace-nowrap">{period}</span>
        </div>
      </div>
    </motion.div>
  );
}