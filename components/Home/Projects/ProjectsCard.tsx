import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  desc: string;
};

const ProjectsCard = ({ image, title, desc }: Props) => {
  return (
    <div>
      <Image
        src={image}
        alt="project_img"
        width={800}
        height={650}
        className="rounded-lg"
      />
      <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
        {title}
      </h1>
      <h1 className="pt-2 font-medium text-white/80"> {desc}</h1>
    </div>
  );
};

export default ProjectsCard;
