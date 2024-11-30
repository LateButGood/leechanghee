import React from 'react';
import { motion } from 'framer-motion';

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500" />
        <div className="relative px-6 pb-6">
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src="./public/lee.jpg"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white -mt-16 shadow-lg object-cover"
              />
            </div>
            <h1 className="mt-4 text-3xl font-bold">이창희</h1>
            <p className="text-gray-600 mt-2">
              Ph.D Candidate in Premodern Korean Literature, Korea University
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">자기소개</h2>
            <p className="text-gray-600 leading-relaxed">
              안녕하세요! 저는 고려대학교에서 한국 고전문학을 연구하는
              박사과정생입니다. 한국의 전통 문학과 문화에 대한 깊은 관심을
              가지고 있으며, 현대적 맥락에서 고전 문학의 가치를 재조명하는
              연구를 진행하고 있습니다. 학제간 연구와 디지털 인문학적 접근을
              통해 새로운 연구 방법론을 모색하고 있습니다.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">주요 정보</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700">소속</h3>
                <p className="text-gray-600">고려대학교 국어국문학과</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700">학위과정</h3>
                <p className="text-gray-600">박사과정</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700">연구 분야</h3>
                <p className="text-gray-600">한문학, 고전번역학, 고전영역</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700">언어</h3>
                <p className="text-gray-600">한국어, 영어, 일본어, 한문</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
