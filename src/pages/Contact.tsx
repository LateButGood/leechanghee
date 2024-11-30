import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold mb-8">연락처</h1>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h2 className="text-xl font-semibold mb-6">연락처 정보</h2>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="text-blue-500" size={20} />
            <div>
              <p className="text-gray-600">이메일</p>
              <p className="text-gray-800">po77777@korea.ac.kr</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Instagram className="text-blue-500" size={20} />
            <div>
              <p className="text-gray-600">인스타그램</p>
              <a 
                href="https://www.instagram.com/changhee_daily/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline cursor-pointer"
              >
                @changhee_daily
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <MapPin className="text-blue-500" size={20} />
            <div>
              <p className="text-gray-600">위치</p>
              <p>서울특별시</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}