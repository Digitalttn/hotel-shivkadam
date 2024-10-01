import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Helmet } from "react-helmet";
import shivkadamb from "../assets/shivkadam.avif";
import About from "../component/About";
import Room from "../component/Room";
import Specialization from "../component/Specilaization";
import ServicePage from "../component/ServicePage";
import Testimonials from "../component/Testimonials";
import "./style.css";
import Offers from "../component/Offers";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration
  }, []);

  return (
    <>
      <Helmet>
        <title>Hotel Shivkadamb | Best hotel in Badrinath</title>
        <meta name="description" content="Experience luxury and comfort at Hotel Shivkadamb, the best hotel in Badrinath, Uttarakhand. Enjoy deluxe rooms with temple views and exceptional services." />
        <meta name="keywords" content="best hotel in Badrinath, best hotel Shivkadamb, Uttarakhand,part of travel to nirvana, deluxe hotel, comfortable room, temple view, char dham" />
        <meta
          name="description"
          content="Stay at Shivkadamb Hotel in Badrinath, part of the Char Dham pilgrimage. Experience luxury and serenity while visiting one of the holiest places for Hindus."
        />
        <meta
          name="keywords"
          content="Badrinath hotel, Char Dham stay, luxury hotel Uttarakhand, Shivkadamb Hotel, Hindu pilgrimage, best hotel Badrinath, hotel near Badrinath Temple"
        />
        <meta name="author" content="Shivkadamb Hotel" />

        <meta
          property="og:title"
          content="Shivkadamb Hotel | Luxury Stay in Badrinath, Char Dham"
        />
        <meta
          property="og:description"
          content="Book your stay at Shivkadamb Hotel in Badrinath, part of the Char Dham. Enjoy a serene and luxurious experience in one of the holiest places for Hindus."
        />
        <meta
          property="og:image"
          content={shivkadamb} // URL to the hotel image
        />
        <meta property="og:url" content="https://hotelshivkadambb.co.in/" />

        <link rel="canonical" href="https://hotelshivkadambb.co.in/" />
      </Helmet>

      {/* Hero Section */}
      <header className="relative h-screen w-full">
        {/* Hero Image */}
        <div className="h-full w-full overflow-hidden">
          <img
            src={shivkadamb}
            alt="Shivkadamb Hotel in Badrinath, Uttarakhand"
            className="object-cover w-full h-full opacity-80"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80"></div>
        </div>

        {/* Hero Text */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="text-center text-white px-4 md:px-10 lg:px-20">
            {/* Heading with Shadow and Animation */}
            <h1
              className="text-4xl md:text-6xl font-extrabold tracking-wide mb-4 drop-shadow-lg"
              data-aos="fade-up"
            >
              Welcome to Hotel Shivkadamb
            </h1>
            {/* Subheading */}
            <p
              className="text-lg md:text-2xl mb-8 font-medium max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Experience the perfect blend of luxury and serenity in the heart
              of Uttarakhand. Relax and unwind in our cozy, luxurious rooms
              while enjoying the finest hospitality at Shivkadamb Hotel.
            </p>
            {/* Call to Action Button */}
            <a
              href="#book"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-4 text-lg rounded-lg shadow-lg transition-all duration-300 ease-in-out font-semibold transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <main>
        <About />
        <Room />
        <Specialization />
        <ServicePage />
        <Offers />
        <Testimonials />
      </main>
    </>
  );
};

export default Home;
