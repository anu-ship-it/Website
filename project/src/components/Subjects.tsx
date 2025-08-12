import React from 'react';
import { Calculator, Atom, Globe, Palette, Music, Code, Languages, TrendingUp } from 'lucide-react';

const subjects = [
  {
    icon: Calculator,
    name: 'Mathematics',
    description: 'From basic arithmetic to advanced calculus',
    students: '12,500+',
    color: 'blue'
  },
  {
    icon: Atom,
    name: 'Science',
    description: 'Physics, Chemistry, and Biology',
    students: '8,200+',
    color: 'emerald'
  },
  {
    icon: Languages,
    name: 'Languages',
    description: 'English, Spanish, French, and more',
    students: '15,300+',
    color: 'purple'
  },
  {
    icon: Code,
    name: 'Programming',
    description: 'Web development, Python, Java',
    students: '9,700+',
    color: 'orange'
  },
  {
    icon: Globe,
    name: 'Geography',
    description: 'World geography and cultures',
    students: '6,100+',
    color: 'green'
  },
  {
    icon: Palette,
    name: 'Art & Design',
    description: 'Drawing, painting, digital art',
    students: '4,800+',
    color: 'pink'
  },
  {
    icon: Music,
    name: 'Music',
    description: 'Piano, guitar, music theory',
    students: '7,200+',
    color: 'indigo'
  },
  {
    icon: TrendingUp,
    name: 'Business',
    description: 'Economics, finance, marketing',
    students: '5,900+',
    color: 'red'
  }
];

const colorMap = {
  blue: 'from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700',
  emerald: 'from-emerald-500 to-emerald-600 group-hover:from-emerald-600 group-hover:to-emerald-700',
  purple: 'from-purple-500 to-purple-600 group-hover:from-purple-600 group-hover:to-purple-700',
  orange: 'from-orange-500 to-orange-600 group-hover:from-orange-600 group-hover:to-orange-700',
  green: 'from-green-500 to-green-600 group-hover:from-green-600 group-hover:to-green-700',
  pink: 'from-pink-500 to-pink-600 group-hover:from-pink-600 group-hover:to-pink-700',
  indigo: 'from-indigo-500 to-indigo-600 group-hover:from-indigo-600 group-hover:to-indigo-700',
  red: 'from-red-500 to-red-600 group-hover:from-red-600 group-hover:to-red-700'
};

const Subjects: React.FC = () => {
  return (
    <section id="subjects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Popular Subjects
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore Our <span className="text-blue-700">Subject Areas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from over 100 subjects taught by certified experts. Find the perfect teacher 
            for your learning goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => {
            const Icon = subject.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${colorMap[subject.color as keyof typeof colorMap]} flex items-center justify-center mb-4 transition-all duration-200`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{subject.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{subject.description}</p>
                <p className="text-blue-700 font-medium text-sm">{subject.students} students</p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
            View All Subjects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subjects;