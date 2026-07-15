import React from "react";
import { Link } from "react-router-dom";
import imgBitcod from "./bitcod-production-image.jpg.jpeg";
import imgEagle from "./eagle-motors-image.jpg.jpeg";
import imgBio from "./bio-plus-image.jpg.jpeg";
import imgComfy from "./comfytoe-image.jpg.jpeg";
import imgSeleno from "./selenostones-landscaping-image.jpg.jpeg";
import imgInphint from "./inphint-image.jpg.jpeg";

const projects = [
  { id: 1, title: "BITCOD Production", category: "Social Media Marketing", image: imgBitcod },
  { id: 2, title: "Eagle Motors", category: "Social Media Marketing", image: imgEagle },
  { id: 3, title: "BIO Plus", category: "Website Design", image: imgBio },
  { id: 4, title: "Comfytoe", category: "SEO & PPC Campaign", image: imgComfy },
  { id: 5, title: "Selenostones Landscaping", category: "App UI/UX Design", image: imgSeleno },
  { id: 6, title: "Inphint", category: "Website Development", image: imgInphint },
];

function Work() {
  return (
    <section id="work" className="w-full bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-medium tracking-[0.2em] text-gray-500">
              OUR WORK
            </span>
            <br />
            <h2 className="relative mt-1 inline-block text-3xl font-bold text-gray-900">
              Recent Projects
              <span className="absolute -bottom-2 left-0 h-[3px] w-55 bg-[var(--button-color)]"></span>
            </h2>
          </div>

          <Link to="/portfolio"> <button className="group rounded border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-[var(--button-color)] hover:bg-[var(--button-color)] hover:text-white hover:shadow-lg hover:-translate-y-0.5">
            View All Projects
          </button></Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-lg border border-gray-200 bg-gray-50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
            >
              {/* Image Placeholder with overlay */}
              <div className="relative aspect-[4/3] w-full bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[var(--button-color)]/0 group-hover:bg-[var(--button-color)]/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                    <svg className="w-6 h-6 text-[var(--button-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 transition-colors duration-300 group-hover:bg-white">
                <h3 className="font-bold text-gray-900 group-hover:text-[var(--button-color)] transition-colors duration-300">{project.title}</h3>
                <p className="mt-1 text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;