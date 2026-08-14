"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTranslations } from "next-intl";

const projects = [
  {
    id: 1,
    key: "globalGlow",
    category: "Next.js",
    image: "/global-glow.jpg",
    demo:
      "https://globalglow-git-main-mona-souabni-s-projects.vercel.app/en",
  },
  {
    id: 2,
    key: "ecoVibe",
    category: "React",
    image: "/ecovibe.jpg",
    demo: "https://mouana.github.io/ecovibe/#/",
  },
{
  id: 3,
  key: "portfolio",
  category: "Next.js",
  image: "/me.jpg",
  demo: "",
},
];

export default function Projects() {
  const t = useTranslations("project");

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">

          <span className="inline-flex px-4 py-2 rounded-full bg-[#FF9478]/10 text-[#e9785b] text-sm font-medium mb-4">
            {t("badge")}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("title")}
          </h2>

        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

          {projects.map((project) => (
            <MagicCard
              key={project.id}
              className="rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="p-4">

                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl group">

                  <Image
                    src={project.image}
                    alt={t(`items.${project.key}.title`)}
                    width={600}
                    height={360}
                    className="
                      w-full
                      h-52
                      object-cover
                      rounded-2xl
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* Category */}
                  <span className="
                    absolute
                    top-3
                    left-3
                    bg-white/90
                    backdrop-blur-sm
                    text-xs
                    font-medium
                    text-gray-800
                    px-3
                    py-1.5
                    rounded-full
                  ">
                    {project.category}
                  </span>

                </div>

                {/* Content */}
                <div className="px-1 pt-5 pb-3">

                  <h3 className="text-lg font-semibold text-gray-900">
                    {t(`items.${project.key}.title`)}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {t(`items.${project.key}.shortDescription`)}
                  </p>

                  {/* Demo */}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        mt-4
                        text-sm
                        font-medium
                        text-[#e9785b]
                        hover:text-[#FF9478]
                        transition
                      "
                    >
                      {t("viewProject")}
                      <ArrowUpRight size={16} />
                    </a>
                  )}

                </div>

              </div>
            </MagicCard>
          ))}

        </div>

      </div>
    </section>
  );
}