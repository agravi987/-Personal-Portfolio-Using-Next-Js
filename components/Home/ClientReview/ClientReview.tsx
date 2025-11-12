"use client";
import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewCard from "./ClientReviewCard";
import AOS from "aos";
import "aos/dist/aos.css";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1324 }, items: 3 },
  tablet: { breakpoint: { max: 1324, min: 764 }, items: 2 },
  mobile: { breakpoint: { max: 764, min: 0 }, items: 1 },
};

const clientData = [
  { image: "/images/c1.png", name: "Raveena Agrahari", role: "CEO, Landscape" },
  { image: "/images/c3.png", name: "Rithiga S", role: "UI/UX Designer" },
  {
    image: "/images/c2.png",
    name: "Ranbir Agrahari",
    role: "Frontend Developer",
  },
  { image: "/images/c4.png", name: "Suresh Singh", role: "Frontend Developer" },
  { image: "/images/c5.png", name: "Ashok Tamata", role: "Frontend Developer" },
];

const ClientReview = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Kind Words from Satisfied <br />
        <span className="text-cyan-200">Clients</span>
      </h1>
      <div className="mt-16 w-[70%] mx-auto">
        <Carousel
          showDots={false}
          responsive={responsive}
          ssr={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          itemClass="px-4"
        >
          {clientData.map((client, index) => (
            <ClientReviewCard
              key={index}
              image={client.image}
              name={client.name}
              role={client.role}
              index={index}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ClientReview;
