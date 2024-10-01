// src/components/TestimonialSection.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import background from '../assets/shivkadam.avif';
// import helmet from 'helmet';
import { Helmet } from 'react-helmet';

const testimonials = [
  {
    name: 'susmita',
    location: 'noida',
    text: '“Staying at Hotel Shivkadam was a truly unforgettable experience! The ambiance was perfect, and the staff was incredibly accommodating.”',
    imgSrc: background,
  },
  {
    name: 'Anit Seith',
    location: 'himanchal',
    text: '“I loved every moment of my stay at Hotel Shivkadam. The luxurious rooms and stunning views made it feel like a dream.”',
    imgSrc: background,
  },
  {
    name: 'Kanak sharma',
    location: 'dehradun',
    text: '“From the beautiful decor to the top-notch service, everything about Hotel Shivkadam exceeded my expectations. Highly recommended!”',
    imgSrc: background,
  },
  {
    name: 'mohit bhatt',
    location: 'Delhi',
    text: '“The hospitality at Hotel Shivkadam was unmatched. I can’t wait to return for another relaxing getaway.”',
    imgSrc: background,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1, // Show only one slide
          slidesToScroll: 1,
          centerMode: false, // Disable center mode for smaller screens
        },
      },
    ],
  };

  return (
    <>
<Helmet>
  <meta name="description" content="Read what guests say about their experience at Hotel Shivkadam, a luxury hotel offering exceptional service and comfort." />
  <meta name="keywords" content="Hotel Shivkadam, testimonials, luxury hotel, guest reviews, travel experience" />

</Helmet>
   
    <div
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl font-extrabold mb-4">What Our Guests Say</h2>
          <div className="w-24 h-1 mx-auto bg-yellow-400 mb-8"></div>
        </div>

        {/* TESTIMONIAL START */}
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div className="px-4" key={index}>
              <div className="bg-white rounded-xl shadow-xl p-8 mx-auto transform transition-transform duration-300 hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-100 opacity-20"></div>
                <div className="flex items-center justify-center mb-6 relative z-10">
                  <img
                    src={testimonial.imgSrc}
                    alt={testimonial.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-yellow-500 shadow-lg transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="text-center relative z-10">
                  <p className="text-2xl font-semibold mb-2 text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-700 mb-4 italic text-lg">“{testimonial.text}”</p>
                  <span className="text-gray-500">{testimonial.location}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* TESTIMONIAL END */}
      </div>
    </div>
    </>
  );
};

export default Testimonials;
