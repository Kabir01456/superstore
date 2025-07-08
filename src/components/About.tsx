import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Each piece is crafted with the finest materials and attention to detail"
    },
    {
      icon: Users,
      title: "Expert Craftsmen",
      description: "Our skilled artisans bring decades of experience to every creation"
    },
    {
      icon: Clock,
      title: "Timeless Design",
      description: "Classic designs that remain beautiful and functional for generations"
    },
    {
      icon: Shield,
      title: "Lifetime Warranty",
      description: "We stand behind our quality with comprehensive warranty coverage"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Crafting Excellence Since 1985
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Kabir's Store, we believe that furniture is more than just functional pieces—
              it's an expression of your personality and a foundation for life's most precious moments. 
              For over three decades, we've been dedicated to creating exceptional furniture that 
              combines traditional craftsmanship with contemporary design.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Every piece in our collection tells a story of meticulous attention to detail, 
              sustainable practices, and unwavering commitment to quality. From the selection 
              of premium materials to the final finishing touches, we ensure that each item 
              meets our exacting standards.
            </p>
            <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
              Learn More About Us
            </button>
          </div>
          
          <div>
            <img
              src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Craftsman at work"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
                <feature.icon className="w-10 h-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;