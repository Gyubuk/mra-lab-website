import { Calendar, Award, Users } from "lucide-react";

export function NewsSection() {
  const newsItems = [
    {
      date: '2022',
      icon: Award,
      title: '2022년 대한산업공학회 경진대회 장려상',
      description: '2022년 대한산업공학회 경진대회 장려상을 수상했습니다.',
    },
    {
      date: '2021',
      icon: Award,
      title: '2021년 숭실과학상 은상',
      description: '2021년 숭실과학상 은상을 수상했습니다.',
    },
    {
      date: '2020',
      icon: Users,
      title: '2020년 형남공학상 은상',
      description: '2020년 형남공학상 은상을 수상했습니다.',
    },
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            News
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* News Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {newsItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 group hover:bg-gray-50 p-4 rounded-lg transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.date}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
