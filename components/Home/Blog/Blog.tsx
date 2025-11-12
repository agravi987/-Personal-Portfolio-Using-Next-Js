import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My Latest <span className="text-cyan-200">Blogs</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-10 items-center mt-16">
        {[
          {
            image: "/images/b1.jpg",
            title: "Learn How to invest in Stock market ",
          },
          {
            image: "/images/b3.jpg",
            title: "Learn How to invest in Stock market ",
          },
          {
            image: "/images/b2.jpg",
            title: "Learn How to invest in Stock market ",
          },
        ].map((blog, index) => (
          <div
            key={index}
            data-aos="fade-right"
            data-aos-delay={index * 100}
            data-aos-anchor-placement="top-bottom"
          >
            <BlogCard image={blog.image} title={blog.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
