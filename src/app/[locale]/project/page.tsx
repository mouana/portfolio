"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  FiGithub,
  FiExternalLink,
  FiCode,
  FiArrowUpRight,
} from "react-icons/fi";

import Header from "@/app/components/Header";
import Footer from'@/app/components/footer'
import { BlurFade } from "@/components/magicui/blur-fade";

export default function ProjectPage() {
  const t = useTranslations("projects");
  const locale = useLocale();

  const projects = [
    {
  key: "ecoVibe",
  image: "/ecovibe.jpg",
  technologies: ["React", "JavaScript", "CSS"],
  github: "https://github.com/mouana/ecovibe",
  demo: "https://mouana.github.io/ecovibe/#/",
},
    {
  key: "globalGlow",
  image: "/global-glow.jpg",
  technologies: ["Next.js", "Tailwind CSS", "next-intl"],
  github: "https://github.com/mouana",
  demo: "https://globalglow.vercel.app/en",
},
    {
      key: "portfolio",
      image: "/me.jpg",
      technologies: ["Next.js", "React", "Tailwind CSS", "next-intl"],
      github: "https://github.com/mouana/portfolio",
      demo: "#",
    },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        <BlurFade>
          <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">

            {/* ================= HERO ================= */}

            <div className="max-w-3xl mx-auto text-center">

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  bg-[#FF9478]/10
                  text-[#e9785b]
                  text-sm
                  font-medium
                  mb-6
                "
              >
                <FiCode size={15} />
                {t("badge")}
              </div>

              <h1
                className="
                  text-4xl
                  md:text-5xl
                  xl:text-6xl
                  font-bold
                  tracking-tight
                  text-gray-900
                  leading-tight
                "
              >
                {t("title")}
              </h1>

              <div className="flex justify-center items-center gap-3 mt-6">
                <div className="h-1 w-16 rounded-full bg-[#FF9478]" />
                <div className="h-1 w-3 rounded-full bg-orange-300" />
              </div>

              <p className="mt-7 text-lg text-gray-600 leading-8">
                {t("description")}
              </p>

            </div>


            {/* ================= PROJECTS ================= */}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

              {projects.map((project, index) => (

                <motion.article
                  key={project.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="
                    group
                    overflow-hidden
                    rounded-3xl
                    border
                    border-gray-100
                    bg-white
                    shadow-sm
                    hover:shadow-xl
                    hover:shadow-gray-200/60
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >

                  {/* IMAGE */}

                  <div className="relative h-56 overflow-hidden bg-gray-100">

                    <Image
                      src={project.image}
                      alt={t(`items.${project.key}.title`)}
                      fill
                      className="
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />

                    {/* Overlay */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-black/0
                        group-hover:bg-black/20
                        transition
                      "
                    />

                    {/* Project number */}

                    <span
                      className="
                        absolute
                        top-4
                        left-4
                        px-3
                        py-1
                        rounded-full
                        bg-black/70
                        backdrop-blur-sm
                        text-white
                        text-xs
                        font-semibold
                      "
                    >
                      0{index + 1}
                    </span>

                  </div>


                  {/* CONTENT */}

                  <div className="p-6">

                    <h2
                      className="
                        text-xl
                        font-bold
                        text-gray-900
                        group-hover:text-[#FF9478]
                        transition
                      "
                    >
                      {t(`items.${project.key}.title`)}
                    </h2>

                    <p className="mt-3 text-gray-600 text-sm leading-7">
                      {t(`items.${project.key}.description`)}
                    </p>


                    {/* TECHNOLOGIES */}

                    <div className="flex flex-wrap gap-2 mt-5">

                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
                            px-3
                            py-1
                            rounded-full
                            bg-gray-100
                            text-gray-600
                            text-xs
                            font-medium
                          "
                        >
                          {tech}
                        </span>
                      ))}

                    </div>


                    {/* LINKS */}

                    <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-100">

                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          items-center
                          gap-2
                          px-4
                          py-2
                          rounded-full
                          bg-gray-900
                          text-white
                          text-sm
                          font-medium
                          hover:bg-[#FF9478]
                          transition
                        "
                      >
                        <FiGithub size={16} />
                        {t("github")}
                      </Link>

                      {project.demo !== "#" && (
                        <Link
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            flex
                            items-center
                            gap-2
                            px-4
                            py-2
                            rounded-full
                            border
                            border-gray-200
                            text-gray-700
                            text-sm
                            font-medium
                            hover:border-[#FF9478]
                            hover:text-[#FF9478]
                            transition
                          "
                        >
                          <FiExternalLink size={16} />
                          {t("demo")}
                        </Link>
                      )}

                      <div className="ml-auto text-gray-300 group-hover:text-[#FF9478] transition">
                        <FiArrowUpRight size={20} />
                      </div>

                    </div>

                  </div>

                </motion.article>

              ))}

            </div>


            {/* ================= BOTTOM CTA ================= */}

            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                bg-gray-900
                mt-20
                p-8
                md:p-10
              "
            >

              <div
                className="
                  absolute
                  -right-20
                  -top-20
                  w-64
                  h-64
                  bg-[#FF9478]/20
                  rounded-full
                  blur-3xl
                "
              />

              <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">

                <div>

                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {t("cta.title")}
                  </h2>

                  <p className="text-gray-400 mt-2 max-w-2xl">
                    {t("cta.description")}
                  </p>

                </div>

                <Link
                    href={`/${locale}/contact`}
                    className="
                    shrink-0
                    inline-flex
                    items-center
                    gap-2
                    px-6
                    py-3
                    rounded-full
                    bg-[#FF9478]
                    text-white
                    font-semibold
                    hover:bg-[#e9785b]
                    transition
                  "
                >
                  {t("cta.button")}
                  <FiArrowUpRight size={18} />
                </Link>

              </div>

            </div>

          </section>
        </BlurFade>
                <Footer />

      </main>
    </>
  );
}