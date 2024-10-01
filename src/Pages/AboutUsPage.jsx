import React, { useEffect } from 'react';
import heroImage from '../assets/shivkadam.avif'; // Replace with your hero image path
import hotelImage from '../assets/shivkadam2.avif'; // Replace with your hotel image path
import { FaBed, FaUtensils, FaWifi, FaConciergeBell, FaDumbbell, FaSpa } from 'react-icons/fa';
import hotel1 from "../assets/Aashiyana.png";
import hotel4 from "../assets/Dhanesh.png";
import hotel5 from "../assets/BEHLAshram.png";
import hotel6 from "../assets/BadriVilleResort.png";
import hotel7 from "../assets/HotelDivine.png";
import hotel8 from "../assets/Neelkanth.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';

const AboutUsPage = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
 <Helmet>
        <title>About Us - Hotel Shivkadamb</title>
        <meta name="description" content="Discover Hotel Shivkadamb in Badrinath, your best choice for luxury accommodations. Experience unmatched hospitality on your travel to Nirvana." />
        <meta name="keywords" content="Badrinath hotel, Shivkadamb, best hotel, luxury stay, travel to Nirvana" />
        <meta name="author" content="Hotel Shivkadamb" />
        <meta property="og:image" content={heroImage} />
        <meta property="og:url" content="https://hotelshivkadamb.co.in/about" />
      </Helmet>
    
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-75 p-6 rounded-lg text-center shadow-lg" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-teal-600">About Us</h2>
            <p className="text-gray-700 mt-2">Experience unmatched hospitality with our top-notch services.</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4 lg:px-16 bg-white shadow-md">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start" data-aos="fade-up">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={hotelImage}
              alt="Hotel Shivkadam"
              className="w-full h-80 object-cover rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <h2 className="text-4xl lg:text-4xl font-extrabold mb-4 text-[#3b69c0]">About Hotel Shivkadamb</h2>
            <p className="text-lg lg:text-xl mb-4">
              Welcome to Hotel Shivkadamb, your premier destination in the serene town of Badrinath.
            </p>
            <p className="text-lg lg:text-xl mb-4">
              Our well-appointed rooms are designed to provide you with a relaxing and enjoyable stay.
            </p>
            <p className="text-lg lg:text-xl mb-4">
              Enjoy our exquisite dining options, unwind in our cozy lounges, or explore the scenic beauty of Badrinath.
            </p>
            <p className="text-lg lg:text-xl">
              We look forward to welcoming you to Hotel Shivkadamb and ensuring that your stay with us is nothing short of exceptional.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4 lg:px-16 bg-teal-50" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 text-black">Our History</h2>
          <p className="text-lg lg:text-xl mb-4">
            Hotel Shivkadamb was established in , driven by a vision to provide exceptional hospitality.
          </p>
          <p className="text-lg lg:text-xl">
            Our commitment to quality and guest satisfaction has earned us numerous accolades and a loyal clientele.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 px-4 lg:px-16 bg-white shadow-md" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 text-[#3b69c0]">Mission and Vision</h2>
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-yellow-500">Our Mission</h3>
              <p className="text-lg lg:text-xl">
                Our mission is to provide unparalleled luxury and comfort while embracing the natural beauty.
              </p>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-teal-500">Our Vision</h3>
              <p className="text-lg lg:text-xl">
                Our vision is to be the premier choice for travelers seeking a unique and memorable experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
    {/* Amenities Section */}
<section className="py-16 px-4 lg:px-16 bg-teal-50"  data-aos="fade-up">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 text-black">Our Amenities</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {/* Amenity Item */}
      <div className="flex items-center justify-center flex-col p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
        <FaBed className="text-5xl text-teal-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Luxurious Rooms</h3>
        <p className="text-gray-600">Enjoy stunning scenic views and modern comforts in our elegant rooms.</p>
      </div>
      {/* Amenity Item */}
      <div className="flex items-center justify-center flex-col p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
        <FaUtensils className="text-5xl text-teal-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Exquisite Dining</h3>
        <p className="text-gray-600">Savor delicious meals at our world-class restaurant with diverse cuisine.</p>
      </div>
      {/* Amenity Item */}
      <div className="flex items-center justify-center flex-col p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
        <FaWifi className="text-5xl text-teal-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Free Wi-Fi</h3>
        <p className="text-gray-600">Stay connected with complimentary high-speed Wi-Fi throughout the hotel.</p>
      </div>
      {/* Amenity Item */}
      <div className="flex items-center justify-center flex-col p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
        <FaConciergeBell className="text-5xl text-teal-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2">24/7 Room Service</h3>
        <p className="text-gray-600">Our room service is available around the clock to meet your needs.</p>
      </div>
      {/* Amenity Item */}
      <div className="flex items-center justify-center flex-col p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
        <FaDumbbell className="text-5xl text-teal-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2">House keeping service</h3>
        <p className="text-gray-600">Experience impeccable housekeeping services to ensure your stay is always comfortable and welcoming.</p>
      </div>
      {/* Amenity Item */}
      <div className="flex items-center justify-center flex-col p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
        <FaSpa className="text-5xl text-teal-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2">24×7 services</h3>
        <p className="text-gray-600">Relax and rejuvenate at our hotel.</p>
      </div>
    </div>
  </div>
</section>


      {/* Explore Our Other Hotels Slider */}
      <div className="slider-container mb-16 px-4 mt-3" data-aos="fade-up">
        <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-8">
          Explore Our Other Hotels
        </h2>
        <Slider {...settings} className="relative">
          {[hotel1, hotel4, hotel5, hotel6, hotel7, hotel8].map((hotel, index) => (
            <div className="px-2" key={index}>
              <img
                src={hotel}
                alt={`Hotel ${index}`}
                className="w-full h-80 object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Guest Testimonials Section */}
      <section className="py-16 px-4 lg:px-16 bg-white shadow-md" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 text-[#3b69c0]">What Our Guests Say</h2>
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="bg-teal-50 p-6 rounded-lg shadow-lg mb-8 lg:mb-0">
              <p className="text-lg lg:text-xl mb-4">
                "The hotel is amazing, and the staff made our stay so comfortable."
              </p>
              <p className="text-sm font-semibold">— Guest 1</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg shadow-lg">
              <p className="text-lg lg:text-xl mb-4">
                "Best place to stay in Badrinath. Highly recommended!"
              </p>
              <p className="text-sm font-semibold">— Guest 2</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default AboutUsPage;
