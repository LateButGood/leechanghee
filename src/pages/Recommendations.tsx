import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const recommendations = [
  {
    name: "김철수",
    position: "테크 솔루션즈 CTO",
    company: "테크 솔루션즈",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    text: "홍길동은 탁월한 문제 해결 능력과 팀워크를 갖춘 개발자입니다. 그의 기술적 전문성과 열정적인 태도는 팀에 큰 영감을 주었습니다."
  },
  {
    name: "이영희",
    position: "개발팀 리더",
    company: "스타트업 인큐베이터",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    text: "새로운 기술을 빠르게 습득하고 적용하는 능력이 인상적입니다. 프로젝트의 성공적인 완수를 위해 항상 최선을 다하는 모습이 인상깊었습니다."
  },
  {
    name: "박민수",
    position: "시니어 개발자",
    company: "디지털 이노베이션",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    text: "주니어 개발자였을 때부터 뛰어난 잠재력을 보여주었습니다. 현재는 훌륭한 시니어 개발자로 성장하여 많은 후배 개발자들의 롤모델이 되고 있습니다."
  }
];

export default function Recommendations() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold mb-8">추천서</h1>

      <div className="space-y-6">
        {recommendations.map((rec, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <Quote className="text-blue-500 mb-4" size={32} />
            
            <p className="text-gray-600 italic mb-6">{rec.text}</p>
            
            <div className="flex items-center">
              <img
                src={rec.image}
                alt={rec.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">{rec.name}</h3>
                <p className="text-gray-600 text-sm">{rec.position}</p>
                <p className="text-gray-500 text-sm">{rec.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}