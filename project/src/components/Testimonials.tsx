import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex Thompson',
    role: 'High School Student',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    content: 'The math tutoring I received here transformed my understanding completely. I went from failing grades to straight A\'s in just one semester!',
    rating: 5,
    subject: 'Mathematics'
  },
  {
    name: 'Maria Garcia',
    role: 'College Student',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    content: 'Learning programming online seemed impossible until I found this platform. My teacher made complex concepts so easy to understand.',
    rating: 5,
    subject: 'Computer Science'
  },
  {
    name: 'James Wilson',
    role: 'Working Professional',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    content: 'As a busy professional, the flexible scheduling was perfect. I finally learned Spanish and got that promotion I wanted!',
    rating: 5,
    subject: 'Spanish Language'
  },
  {
    name: 'Sophie Chen',
    role: 'Graduate Student',
    image: 'https://images.pexels.com/photos/3767411/pexels-photo-3767411.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    content: 'The chemistry tutoring helped me ace my entrance exam. The personalized approach made all the difference in my learning.',
    rating: 5,
    subject: 'Chemistry'
  },
  {
    name: 'David Brown',
    role: 'Parent',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    content: 'My daughter\'s confidence in physics improved dramatically. The teacher was patient and really cared about her progress.',
    rating: 5,
    subject: 'Physics'
  },
  {
    name: 'Emma Davis',
    role: 'Art Student',
    image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    content: 'The art classes opened up a whole new world for me. I never thought I could create such beautiful pieces!',
    rating: 5,
    subject: 'Art & Design'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Student Success Stories
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-orange-700">Students Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from thousands of students who have 
            transformed their learning experience with our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-sm font-medium text-orange-700">{testimonial.subject}</span>
              </div>
              
              <div className="relative">
                <Quote className="h-6 w-6 text-gray-300 mb-2" />
                <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">50K+</p>
              <p className="text-sm text-gray-600">Happy Students</p>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">4.9/5</p>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">98%</p>
              <p className="text-sm text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;