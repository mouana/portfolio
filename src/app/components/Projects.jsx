'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { MagicCard } from "@/components/magicui/magic-card";

const projects = [
  {
    id: 1,
    title: 'Design Unraveled: Behind the Scenes of UI/UX Magic',
    category: 'UI/ UX Design',
    image: 'https://picsum.photos/seed/uiux/500/300',
    author: 'Fatima Ait Taouil',
    date: '10 Nov, 2023',
  },
  {
    id: 2,
    title: 'Sugee: Loan Management System for Rural Sector.',
    category: 'App Design',
    image: 'https://picsum.photos/seed/sugee/500/300',
    author: 'Fatima Ait Taouil',
    date: '09 Oct, 2023',
  },
  {
    id: 3,
    title: 'Cinetrade: Innovative way to invest in Digital Media',
    category: 'App Design',
    image: 'https://picsum.photos/seed/cinetrade/500/300',
    author: 'Fatima Ait Taouil',
    date: '13 Aug, 2023',
  },
];

export default function Projects() {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <MagicCard
              key={project.id}
              className="rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="p-4 pb-8">
                {/* Thumbnail */}
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-60 object-cover rounded-2xl"
                    unoptimized
                  />

                  {/* Top-left label */}
                  <span className="absolute top-3 left-3 bg-white text-sm font-medium text-gray-800 px-3 py-1 rounded-full shadow">
                    {project.category}
                  </span>

                  {/* Arrow button */}
                  <button className="absolute bottom-[-16px] right-4 bg-gray-900 text-white p-3 rounded-full hover:bg-[#FF9478] transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </button>
                </div>

                {/* Metadata */}
                <div className="flex items-center space-x-2 text-sm text-gray-500 mt-6">
                  <span className="text-orange-500 font-medium">{project.author}</span>
                  <span className="text-orange-500">•</span>
                  <span>{project.date}</span>
                </div>

                {/* Title */}
                <h3 className="mt-2 text-lg font-semibold text-gray-800 leading-snug">
                  {project.title}
                </h3>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
}
