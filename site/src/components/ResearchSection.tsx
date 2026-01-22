import { ArrowRight } from 'lucide-react';

export function ResearchSection() {
  const researchAreas = [
    '최적 정지',
    '가격 책정',
    '수락 제어 및 수율관리',
    '경제성 공학 및 수익 경영',
  ];

  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Research Area Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Research Area
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Research List */}
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4">
            {researchAreas.map((area, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 text-gray-700 text-lg"
              >
                <span className="text-blue-600 mt-1.5">•</span>
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* More Research Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors group">
            <span className="text-lg">More on our research</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
