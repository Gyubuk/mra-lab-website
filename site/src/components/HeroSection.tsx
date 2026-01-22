interface HeroSectionProps {
  backgroundImage: string;
}

export function HeroSection({ backgroundImage }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Management Risk Analysis Lab @ Soongsil University
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
          숭실대학교 산업·정보시스템공학과 경영위험분석연구실 홈페이지에 오신 것을 환영합니다.
        </p>
        <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mt-4">
          본 연구실에서는 경영관리의 불확실성을 정량화하고, 수리적 모델링을 통해 최적의 의사결정 전략을 도출합니다.
        </p>
      </div>
    </section>
  );
}

