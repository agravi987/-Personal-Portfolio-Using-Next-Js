"use client";
import React, { useEffect } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="pt-16 pb-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text content */}
        <div data-aos="fade-right">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            Get In Touch With Me <br />
            <span className="text-cyan-200">Always Ready to contact</span>
          </h1>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Reach out to me today and let's have a quick discussion
          </p>

          {/* Info */}
          <div className="mt-7" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center space-x-3 mb-4">
              <BiPhone className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">+977 987654321</p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiEnvelope className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                bishalagr@gmail.com
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiMap className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                Ramgram-10, Parasi, Nepal
              </p>
            </div>
          </div>

          {/* Social icons */}
          <div
            className="flex items-center mt-8 space-x-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {[
              { icon: FaFacebookF, hover: "hover:bg-blue-800" },
              { icon: FaYoutube, hover: "hover:bg-red-600" },
              { icon: FaTwitter, hover: "hover:bg-sky-400" },
              { icon: FaInstagram, hover: "hover:bg-pink-500" },
            ].map(({ icon: Icon, hover }, i) => (
              <div
                key={i}
                className={`w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer ${hover} transition-all duration-300`}
              >
                <Icon className="text-white w-6 h-6" />
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div
          data-aos="fade-left"
          className="md:p-10 p-5 bg-[#131332] rounded-lg"
        >
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />
          <input
            type="number"
            placeholder="Mobile Number"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />
          <textarea
            placeholder="Your Message"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]"
          />
          <button className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
