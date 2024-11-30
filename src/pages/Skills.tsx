import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';

const awards = [
  {
    year: "2024",
    title: "고려대학교 Junior Fellow Research Grant",
    organization: "고려대학교"
  },
  {
    year: "2024",
    title: "부산문학협회 제1차 독후감상문 공보전 상티상",
    organization: "부산문학협회"
  },
  {
    year: "2024",
    title: "부산교통공사 2023년 고객안내기 사연 공모전 우등상",
    organization: "부산교통공사"
  },
  {
    year: "2024-2026",
    title: "한국연구재단 인문사회학술연구교수 (B유형)",
    description: "과제명: 조선조 자국어화(Vernacularization)의 일면 -『小學』 諺解本을 중심으로",
    organization: "한국연구재단"
  },
  {
    year: "2023",
    title: "日本國際交流基金 專門日本語硏修(文化・學術專門家)特別訪日專門活動",
    organization: "日本國際交流基金"
  },
  {
    year: "2023",
    title: "2022학년도 대학원 일반공통/비교과프로그램 수강 후기 공모전 우수상",
    organization: "고려대학교"
  },
  {
    year: "2023",
    title: "2022학년도 KU Achievement Award",
    organization: "고려대학교"
  },
  {
    year: "2022",
    title: "우수논문상",
    organization: "고려대학교 대학원"
  },
  {
    year: "2022-2024",
    title: "한국연구재단 인문사회학술연구교수 (B유형)",
    description: "과제명: 춘명집 영역본 연구: 춘향의 형상화 방식과 번역 전략을 중심으로",
    organization: "한국연구재단"
  },
  {
    year: "2021-2023",
    title: "한국연구재단 인문사회학술연구교수 (B유형)",
    description: "과제명: 제임스 게일(James Scarth Gale)의 잡문집 한문고전 번역원리 一考察-The Korea Magazine을 중심으로",
    organization: "한국연구재단"
  },
  {
    year: "2021",
    title: "고려대학교 Junior Fellow Research Grant",
    organization: "고려대학교"
  },
  {
    year: "2020-2021",
    title: "고려대학교 인성장학금",
    organization: "고려대학교"
  },
  {
    year: "2020",
    title: "제 30기 법우출판문화재단 장학생",
    organization: "법우출판문화재단"
  },
  {
    year: "2020-2021",
    title: "고려대학교 BK21플러스 한국어문학사업단 장학금",
    organization: "고려대학교"
  },
  {
    year: "2020",
    title: "우수상",
    organization: "고려대학교 BK21플러스 한국어문학사업단"
  }
];

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold mb-8">수상 및 장학금 수령 이력</h1>
      
      <div className="space-y-4">
        {awards.map((award, index) => (
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
                  <Award className="text-blue-500" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{award.title}</h2>
                  <p className="text-gray-600">{award.organization}</p>
                  {award.description && (
                    <p className="text-gray-500 mt-2 text-sm">{award.description}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center text-gray-500">
                <Calendar size={18} className="mr-2" />
                <span className="whitespace-nowrap">{award.year}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}