// import { ImageWithFallback } from './figma/ImageWithFallback';
// import { Mail, Linkedin, GraduationCap } from 'lucide-react';

// export function MembersSection() {
//   const professor = {
//     name: '손재동',
//     title: '교수',
//     department: '사회시스템공학',
//     email: 'son88@ssu.ac.kr',
//     image: 'https://iise.ssu.ac.kr/wp-content/uploads/sites/34/2020/07/1555058594949-130x155.jpg',
//   };

//   const students = [
//     {
//       name: '정규민',
//       position: '학부연구실장',
//       email: 'g1370200@gmail.com',
//     },
//     {
//       name: '안채빈',
//       position: '학부연구생',
//       email: '/',
//     },
//     {
//       name: '주상민',
//       position: '학부연구생',
//       email: 'master1@ssu.ac.kr',
//     },
//   ];

//   return (
//     <section id="members" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//             Members
//           </h2>
//           <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
//         </div>

//         {/* Professor Section */}
//         <div className="max-w-4xl mx-auto mb-16">
//           <h3 className="text-2xl font-semibold text-gray-900 mb-8">지도교수</h3>
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <div className="flex flex-col md:flex-row">
//               <div className="md:w-1/3 flex justify-center items-center">
//                 <ImageWithFallback
//                   src={professor.image}
//                   alt={professor.name}
//                   className="w-130 h-155 md:h-48 object-cover"
//                 />
//               </div>
//               <div className="md:w-2/3 p-8">
//                 <h4 className="text-2xl font-bold text-gray-900 mb-2">
//                   {professor.name}
//                 </h4>
//                 <p className="text-lg text-gray-600 mb-4">
//                   {professor.title} | {professor.department}
//                 </p>
//                 <div className="flex items-center space-x-2 text-gray-700">
//                   <Mail className="w-5 h-5 text-blue-600" />
//                   <a
//                     href={`mailto:${professor.email}`}
//                     className="hover:text-blue-600 transition-colors"
//                   >
//                     {professor.email}
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Students Section */}
//         <div className="max-w-6xl mx-auto">
//           <h3 className="text-2xl font-semibold text-gray-900 mb-8">연구원</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {students.map((student, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
//               >
//                 <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <GraduationCap className="w-10 h-10 text-white" />
//                 </div>
//                 <h4 className="text-lg font-semibold text-gray-900 text-center mb-1">
//                   {student.name}
//                 </h4>
//                 <p className="text-sm text-blue-600 text-center mb-3">
//                   {student.position}
//                 </p>
//                 <p className="text-sm text-gray-600 text-center mb-4">
//                   {student.research}
//                 </p>
//                 <div className="flex justify-center">
//                   <a
//                     href={`mailto:${student.email}`}
//                     className="text-gray-500 hover:text-blue-600 transition-colors"
//                   >
//                     <Mail className="w-5 h-5" />
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mail, Linkedin, GraduationCap } from 'lucide-react';

export function MembersSection() {
  const professor = {
    name: '손재동',
    title: '교수',
    department: '사회시스템공학',
    email: 'son88@ssu.ac.kr',
    image: 'https://iise.ssu.ac.kr/wp-content/uploads/sites/34/2020/07/1555058594949-130x155.jpg',
  };

  const students = [
    {
      name: '정규민',
      position: '학부연구실장',
      email: 'g1370200@gmail.com',
    },
    {
      name: '안채빈',
      position: '학부연구생',
      email: '/',
    },
    {
      name: '주상민',
      position: '학부연구생',
      email: 'master1@ssu.ac.kr',
    },
  ];

  return (
    <section id="members" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Members
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Professor Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">지도교수</h3>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 flex justify-center items-center">
                <ImageWithFallback
                  src={professor.image}
                  alt={professor.name}
                  className="w-130 h-155 md:h-48 object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {professor.name}
                </h4>
                <p className="text-lg text-gray-600 mb-4">
                  {professor.title} | {professor.department}
                </p>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a
                    href={`mailto:${professor.email}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {professor.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Students Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">연구원</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {students.map((student, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow w-full sm:w-64"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 text-center mb-1">
                  {student.name}
                </h4>
                <p className="text-sm text-blue-600 text-center mb-4">
                  {student.position}
                </p>
                <div className="flex justify-center">
                  <a
                    href={`mailto:${student.email}`}
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}