"use client";

import { useTranslations } from "next-intl";
import {
  FiDownload,
  FiFileText,
  FiGlobe,
  FiArrowUpRight,
} from "react-icons/fi";

import { BlurFade } from "@/components/magicui/blur-fade";
import Header from "@/app/components/Header";
import Footer from'@/app/components/footer'


export default function ResumePage() {
  const t = useTranslations("resume");

  const resumes = [
    {
      language: t("english.language"),
      code: "EN",
      description: t("english.description"),
      file: "/cv/Mona_Souabni_CV_EN.pdf",
    },
    {
      language: t("german.language"),
      code: "DE",
      description: t("german.description"),
      file: "/cv/Mona_Souabni_CV_DE.pdf",
    },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        <BlurFade>
          <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-32 pb-24">

            {/* ================= HERO ================= */}
            <div className="max-w-3xl mx-auto text-center">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF9478]/10 text-[#e9785b] text-sm font-medium mb-6">
                <FiFileText size={15} />
                {t("badge")}
              </div>

              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
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

            {/* ================= RESUME CARDS ================= */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-16">

              {resumes.map((resume) => (
                <div
                  key={resume.code}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-gray-100
                    bg-white
                    p-8
                    shadow-sm
                    hover:shadow-xl
                    hover:shadow-gray-200/50
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  {/* Decorative glow */}
                  <div
                    className="
                      absolute
                      -right-16
                      -top-16
                      w-40
                      h-40
                      rounded-full
                      bg-[#FF9478]/5
                      blur-3xl
                      group-hover:bg-[#FF9478]/10
                      transition
                    "
                  />

                  <div className="relative">

                    {/* Icon + Language */}
                    <div className="flex items-center justify-between mb-7">

                      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#FF9478]/10 text-[#FF9478]">
                        <FiFileText size={25} />
                      </div>

                      <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-semibold">
                        {resume.code}
                      </span>

                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-gray-900">
                      {resume.language}
                    </h2>

                    {/* Description */}
                    <p className="mt-3 text-gray-600 leading-7 min-h-[56px]">
                      {resume.description}
                    </p>

                    {/* Download */}
                    <a
                      href={resume.file}
                      download
                      className="
                        mt-7
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        w-full
                        px-5
                        py-3
                        rounded-full
                        bg-[#FF9478]
                        text-white
                        font-semibold
                        hover:bg-[#f27f62]
                        transition
                      "
                    >
                      <FiDownload size={18} />
                      {t("download")}
                    </a>

                    {/* View */}
                    <a
                      href={resume.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        mt-3
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        w-full
                        px-5
                        py-3
                        rounded-full
                        border
                        border-gray-200
                        text-gray-700
                        font-medium
                        hover:border-[#FF9478]
                        hover:text-[#e9785b]
                        transition
                      "
                    >
                      {t("view")}
                      <FiArrowUpRight size={17} />
                    </a>

                  </div>
                </div>
              ))}

            </div>

            {/* ================= NOTE ================= */}
            <div className="max-w-4xl mx-auto mt-10">
              <div className="flex items-start gap-4 rounded-2xl bg-gray-50 border border-gray-100 p-5">

                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#FF9478]/10 text-[#FF9478] flex items-center justify-center">
                  <FiGlobe size={19} />
                </div>

                <p className="text-sm text-gray-600 leading-6">
                  {t("note")}
                </p>

              </div>
            </div>

          </section>
        </BlurFade>
                <Footer />

      </main>
    </>
  );
}