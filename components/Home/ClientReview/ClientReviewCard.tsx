"use client";
import React from "react";
import Image from "next/image";

type Props = {
  name: string;
  image: string;
  role: string;
  index?: number;
};

const ClientReviewCard = ({ name, image, role, index = 0 }: Props) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-duration="1000"
      data-aos-anchor-placement="top-bottom"
      className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-xl text-center transition-transform hover:scale-105 hover:shadow-cyan-500/30 border border-white/10"
    >
      <div className="relative w-20 h-20 mx-auto mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 blur-sm"></div>
        <Image
          src={image}
          alt={`${name} profile`}
          width={80}
          height={80}
          className="rounded-full relative z-10 border-4 border-white"
        />
      </div>

      <div className="text-gray-300 text-base italic leading-relaxed px-2">
        <span className="text-3xl text-cyan-300 font-serif">“</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit labore
        distinctio fugiat quas deleniti? Eum eaque odit sapiente id. Dolorum!
        <span className="text-3xl text-cyan-300 font-serif">”</span>
      </div>

      <h1 className="mt-6 text-xl font-bold text-cyan-200">{name}</h1>
      <p className="mt-1 text-sm text-gray-400">{role}</p>
    </div>
  );
};

export default ClientReviewCard;
