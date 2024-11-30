import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, GraduationCap, School } from 'lucide-react';

const experiences = [
  {
    period: "2024.06-현재",
    institution: "고려대학교 한자한문연구소",
    position: "연구원",
    icon: School
  },
  {
    period: "2024.06-현재",
    institution: "고려대학교 글로벌인문학센터",
    position: "부센터장",
    icon: Building2
  },
  {
    period: "2023.03-현재",
    institution: "고려대학교 교재연구센터",
    position: "부센터장",
    icon: Building2
  },
  {
    period: "2022.09-2022.12",
    institution: "고려대학교",
    position: "핵심교양 <한문소설과 야담> (Teaching Fellow)",
    icon: GraduationCap
  },
  {
    period: "2021.04-2023.03",
    institution: "한국실학학회",
    position: "편집간사",
    icon: Building2
  },
  {
    period: "2020.09-2021.02",
    institution: "고려대학교 불어불문학과",
    position: "이영훈 교수 연구실 (연구조교/RA)",
    icon: School
  },
  {
    period: "2020.07-2020.11",
    institution: "고려대학교 민족문화연구원",
    position: "해외한국학자료센터 (연구보조원)",
    icon: Building2
  },
  {
    period: "2020.03-2022.08",
    institution: "고려대학교 한자한문연구소",
    position: "연구원",
    icon: School
  },
  {
    period: "2020.03-2020.06",
    institution: "고려대학교",
    position: "핵심교양 <한시, 영화와 영어원기> (Teaching Fellow)",
    icon: GraduationCap
  },
  {
    period: "2019.09-2019.12",
    institution: "고려대학교 한문학과",
    position: "전공선택 <한문독해의 첫걸음> (Teaching Fellow)",
    icon: GraduationCap
  },
  {
    period: "2019.07-2019.12",
    institution: "고려대학교 민족문화연구원",
    position: "해외한국학자료센터 (연구보조원)",
    icon: Building2
  },
  {
    period: "2019.06-2019.08",
    institution: "고려대학교 민족문화연구원",
    position: "해외한국학자료센터 (연구보조원)",
    icon: Building2
  },
  {
    period: "2019.03-2019.06",
    institution: "고려대학교",
    position: "핵심교양 <한국유사의 세계> (Teaching Fellow)",
    icon: GraduationCap
  },
  {
    period: "2018.05-2018.08",
    institution: "고려대학교 민족문화연구원",
    position: "해외한국학자료센터 (연구보조원)",
    icon: Building2
  },
  {
    period: "2018.03-2018.06",
    institution: "고려대학교",
    position: "핵심교양 <한국유사의 세계> (Teaching Fellow)",
    icon: GraduationCap
  },
  {
    period: "2017.03-2018.02",
    institution: "고려대학교 한문학과",
    position: "윤경희교수 연구실 (연구조교/RA)",
    icon: School
  },
  {
    period: "2016.09-2017.02",
    institution: "고려대학교 한문학과",
    position: "임준철교수 연구실 (연구조교/RA)",
    icon: School
  },
  {
    period: "2016.03-2018.06",
    institution: "고려대학교 민족문화연구원",
    position: "해외한국학자료센터 (연구보조원)",
    icon: Building2
  }
];

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold mb-8">경력 사항</h1>
      
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <exp.icon className="text-blue-500" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{exp.institution}</h2>
                  <p className="text-gray-600">{exp.position}</p>
                </div>
              </div>
              <div className="flex items-center text-gray-500">
                <Calendar size={18} className="mr-2" />
                <span className="whitespace-nowrap">{exp.period}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}