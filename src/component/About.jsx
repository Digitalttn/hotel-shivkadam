import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'; // SEO optimization
import Slider from 'react-slick'; // React slick for slider
import { FaUtensils, FaWifi, FaSpa, FaGamepad } from 'react-icons/fa'; // Icons
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos'; // Animation on Scroll (AOS)
import 'aos/dist/aos.css'; // AOS styles

import shiv1 from '../assets/shivkadam.avif';
import shiv2 from '../assets/restaurant.jpg';
import shiv3 from '../assets/shivkadam2.avif';
import shiv4 from '../assets/res1.jpg'
import shiv5 from '../assets/res2.jpg'
import { Link } from 'react-router-dom';

const About = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Slider settings for react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
       
        <meta
          name="description"
          content="Discover the luxury and serenity at Shivkadamb Hotel in Badrinath, Uttarakhand. Enjoy top-notch amenities like free Wi-Fi,  restaurants."
        />
        <meta
          name="keywords"
          content="Shivkadamb Hotel, Badrinath, luxury hotel, Uttarakhand, hotel amenities, restaurants, free wifi"
        />
        <meta property="og:title" content="About Shivkadamb Hotel - Luxury Stay in Badrinath" />
        <meta
          property="og:description"
          content="Explore the comfort and luxury of Shivkadamb Hotel, your perfect stay in Badrinath with top amenities."
        />
        <meta property="og:image" content={shiv1} />
        <meta property="og:url" content="https://hotelshivkadamb.co.in/about" />
      </Helmet>

      {/* Main About Section */}
      <main className="bg-gray-100 mt-8">
        <section className="px-4 lg:px-8 py-12">
          <div className="flex flex-wrap">
            {/* Left Side: Text Content */}
            <article className="w-full lg:w-1/2 p-5">
              <div className="text-left mb-12" data-aos="fade-up">
                <h1 className="text-3xl font-bold mb-4">About Shivkadamb</h1>
                <div className="border-t-4 border-yellow-500 w-24"></div>
              </div>
              <h3 className="text-2xl mb-4 font-medium" data-aos="fade-up" data-aos-delay="100">
  A Place of Calm and Comfort
</h3>
              <p className="mb-6 text-lg" data-aos="fade-up" data-aos-delay="200">
  Hotel Shivkadamb is more than just a place to stay—it's a peaceful spot in the holy town of Badrinath. Whether you're visiting for pilgrimage or relaxation, we’ll make sure your stay is special with our comfortable rooms, great facilities, and friendly service.
</p>

              {/* Hotel Features */}
              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-center" data-aos="fade-right">
                  <FaUtensils className="text-5xl text-[#2f4892] mr-4" />
                  <div>
                    <h4 className="text-xl font-semibold">Fine Dining Restaurants</h4>
                    <p className="text-gray-700">Enjoy a diverse culinary experience at our on-site restaurants.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-center" data-aos="fade-right" data-aos-delay="100">
                  <FaWifi className="text-5xl text-[#2f4892] mr-4" />
                  <div>
                    <h4 className="text-xl font-semibold">Free High-Speed Wi-Fi</h4>
                    <p className="text-gray-700">Stay connected with complimentary high-speed internet.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-center" data-aos="fade-left" data-aos-delay="200">
                  <FaSpa className="text-5xl text-[#2f4892] mr-4" />
                  <div>
                    <h4 className="text-xl font-semibold">24/7 Room Service</h4>
                    <p className="text-gray-700">Enjoy delicious meals in the comfort of your room, any time of the day</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-center" data-aos="fade-left" data-aos-delay="300">
                  <FaGamepad className="text-5xl text-[#2f4892] mr-4" />
                  <div>
                    <h4 className="text-xl font-semibold">Comfortable Rooms</h4>
                    <p className="text-gray-700">Relax in our cozy and well-furnished rooms designed for your comfort.</p>
                  </div>
                </div>
              </div>

              {/* Call to Action Button */}
              <div className="text-left mb-12" data-aos="fade-up" data-aos-delay="400">
                <button className="px-8 py-3 border border-black text-blue-800 font-semibold rounded-lg hover:bg-blue-600 hover:text-black transition-colors">
                 <Link to='/about'>Learn More About Us</Link> 
                </button>
              </div>
            </article>

            {/* Right Side: Image Slider */}
            <section className="w-full lg:w-1/2 p-5">
              <Slider {...settings} className="relative">
                <div>
                  <img src={shiv1} alt="Shivkadamb Hotel Exterior" className="rounded-lg shadow-lg w-full h-[50vh]" data-aos="fade-up" />
                </div>
                <div>
                  <img src={shiv2} alt="Shivkadamb Hotel Restaurant" className="rounded-lg shadow-lg w-full h-[50vh]" data-aos="fade-up" />
                </div>
                <div>
                  <img src={shiv3} alt="Shivkadamb Hotel Interior" className="rounded-lg shadow-lg w-full h-[50vh]" data-aos="fade-up" />
                </div>
                <div>
                  <img src={shiv4} alt="Shivkadamb Hotel restaurant" className="rounded-lg shadow-lg w-full h-[50vh]" data-aos="fade-up" />
                </div>
              </Slider>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
