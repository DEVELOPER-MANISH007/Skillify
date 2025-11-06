import React from "react";
import { assets, dummyTestimonial } from "../../assets/assets";

const TesimononialSection = () => {
  return (
    <div className="py-20 px-8 md:px-0 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Learners</span> Say
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Hear from our learners as they share their journeys of transformation, success, and how our platform has made a difference in their lives.
          </p>
        </div>
        <div className="grid grid-cols-auto gap-6 md:gap-8">
          {dummyTestimonial.map((testimonial, index) => (
            <div
              className="group text-left border border-gray-200/60 pb-6 rounded-2xl shadow-md hover:shadow-xl overflow-hidden bg-white transition-all duration-300 hover-lift"
              key={index}
            >
              <div className="flex items-center gap-4 px-6 py-5 bg-gradient-to-r from-gray-50 to-white">
                <img
                  className="h-14 w-14 rounded-full ring-2 ring-gray-200 group-hover:ring-blue-500 transition-all"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="p-6 pb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <img
                      className="h-5 w-5"
                      key={i}
                      src={
                        i < Math.floor(testimonial.rating)
                          ? assets.star
                          : assets.star_blank
                      }
                      alt=""
                    />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed line-clamp-4">{testimonial.feedback}</p>
              </div>
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-700 font-medium px-6 pb-4 inline-block transition-colors"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TesimononialSection;
