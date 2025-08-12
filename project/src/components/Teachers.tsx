import React from 'react';
import { Star, MapPin, Clock, Users } from 'lucide-react';

const teachers = [
  {
    name: 'Dr. Sarah Johnson',
    subject: 'Mathematics',
    experience: '8 years',
    students: '2,500+',
    rating: 4.9,
    location: 'Stanford University',
    image: 'https://images.pexels.com/photos/3807755/pexels-photo-3807755.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    specialties: ['Calculus', 'Statistics', 'Linear Algebra']
  },
  {
    name: 'Prof. Michael Chen',
    subject: 'Computer Science',
    experience: '12 years',
    students: '3,200+',
    rating: 4.8,
    location: 'MIT',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    specialties: ['Python', 'Machine Learning', 'Algorithms']
  },
  {
    name: 'Dr. Emily Rodriguez',
    subject: 'Chemistry',
    experience: '10 years',
    students: '1,800+',
    rating: 4.9,
    location: 'Harvard University',
    image: 'https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    specialties: ['Organic Chemistry', 'Biochemistry', 'Physical Chemistry']
  },
  {
    name: 'Prof. David Wilson',
    subject: 'Physics',
    experience: '15 years',
    students: '2,100+',
    rating: 4.7,
    location: 'Caltech',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    specialties: ['Quantum Physics', 'Thermodynamics', 'Electromagnetism']
  }
];

const Teachers: React.FC = () => {
  return (
    <section id="teachers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Expert Teachers
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-emerald-700">Top-Rated Teachers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from certified educators with years of teaching experience and proven track records 
            of student success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200 group"
            >
              <div className="relative">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-medium">{teacher.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{teacher.name}</h3>
                <p className="text-emerald-700 font-medium mb-2">{teacher.subject}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {teacher.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    {teacher.experience} experience
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    {teacher.students} students taught
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {teacher.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-emerald-700 text-white py-2 rounded-lg font-medium hover:bg-emerald-800 transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors">
            Browse All Teachers
          </button>
        </div>
      </div>
    </section>
  );
};

export default Teachers;