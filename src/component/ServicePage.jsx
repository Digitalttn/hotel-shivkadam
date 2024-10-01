import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FaWifi, FaCalendarAlt, FaBusinessTime, FaClock } from 'react-icons/fa';
import { IoMdCafe } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    icon: <FaWifi className="text-5xl text-[#1851b2]" />,
    title: 'Free Wi-Fi Available',
    description: 'Stay connected with complimentary high-speed Wi-Fi throughout the hotel, ensuring you’re always online.',
  },
  {
    icon: <IoMdCafe className="text-5xl text-[#b96613]" />,
    title: 'Meetings & Special Events',
    description: 'Host your meetings and special events in our elegant spaces equipped with modern amenities and attentive service.',
  },
  {
    icon: <FaCalendarAlt className="text-5xl text-[#86b812]" />,
    title: 'Free Cancellation Anytime',
    description: 'Plan your stay with peace of mind with our flexible cancellation policy, allowing free cancellations up to 24 hours prior to arrival.',
  },
  {
    icon: <FaBusinessTime className="text-5xl text-[#d04212]" />,
    title: 'Best Price Guarantee',
    description: 'Book directly with us to enjoy the best rates guaranteed, ensuring you get the most value for your stay.',
  },
  {
    icon: <FaClock className="text-5xl text-[#b2b218]" />,
    title: 'Book Now to Secure Availability',
    description: 'Don’t miss out on our luxury accommodations; book your stay now to secure your preferred dates.',
  },
  {
    icon: <FaClock className="text-5xl text-[#c312c3]" />,
    title: 'Late Check-out on Request',
    description: 'Enjoy your last moments with us by requesting a late check-out, giving you more time to relax before your departure.',
  },
];

const ServicePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-100 py-16">
      <Helmet>
        <meta name="description" content="Explore the exceptional services offered at Shivkadamb Hotel, including free Wi-Fi, best price guarantee, and more." />
        <meta name="keywords" content="Shivkadamb Hotel, services, luxury accommodation, travel to Nirvana, free Wi-Fi, meetings, cancellation policy" />
        
      </Helmet>

      <div className="container mx-auto px-4">
        {/* TITLE START */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <div className="border-t-4 border-yellow-500 w-24"></div>
        </div>
        {/* TITLE END */}

        <div className="flex flex-wrap -mx-4">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8" data-aos="fade-up">
              <div className="border border-[#dbbfbf] rounded-lg p-6 text-center hover:bg-[#bcc2ca] transition duration-300">
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/services" className="bg-[#3b69c0] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300">
            View All Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
