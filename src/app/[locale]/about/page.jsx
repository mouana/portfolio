"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  FiUser,
  FiCode,
  FiBook,
  FiBriefcase,
  FiArrowUpRight,
} from "react-icons/fi";

import { BlurFade } from "@/components/magicui/blur-fade";
import Header from "@/app/components/Header";
import Footer from'@/app/components/footer'
import { WarpBackground } from "@/components/ui/warp-background";


export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        <BlurFade>
          <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-32 pb-20">
            {/* HERO */}
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-center">
              
              {/* IMAGE */}
              <div className="relative flex justify-center">
                <div className="relative w-full max-w-[480px] aspect-square">
                  
                  {/* Glow */}
                  <div className="absolute -inset-5 bg-gradient-to-br from-[#FF9478]/20 via-orange-300/10 to-transparent blur-3xl rounded-full" />

                  {/* Warp background */}
                  <WarpBackground
                    className="absolute inset-0 rounded-[2rem] overflow-hidden"
                  />

                  {/* Image frame */}
                  <div className="absolute inset-3 overflow-hidden rounded-[1.5rem] border border-white/60 shadow-2xl">
                    <Image
                      src="/mona-1.png"
                      alt="Mona Souabni"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-5 -right-4 md:right-0 bg-white/90 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl px-5 py-4">
                    <p className="text-xs text-gray-500 mb-1">
                      Full-Stack Developer
                    </p>

                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-semibold text-gray-800">
                        Open to opportunities
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* INTRO */}
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF9478]/10 text-[#e9785b] text-sm font-medium mb-6">
                  <FiUser size={15} />
                  {t("badge")}
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] text-gray-900">
                  {t("title")}
                </h1>

                {/* Accent */}
                <div className="flex items-center gap-3 mt-6">
                  <div className="h-1 w-16 rounded-full bg-[#FF9478]" />
                  <div className="h-1 w-3 rounded-full bg-orange-300" />
                </div>

                {/* Description */}
                <p className="mt-7 text-lg leading-8 text-gray-600 max-w-2xl">
                  {t("description")}
                </p>

                {/* Quick stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-9">
                  <div className="rounded-2xl border border-gray-100 bg-gray-50/70 p-4">
                    <p className="text-2xl font-bold text-gray-900">Full</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Stack Developer
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-100 bg-gray-50/70 p-4">
                    <p className="text-2xl font-bold text-gray-900">4</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Languages
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-100 bg-gray-50/70 p-4 col-span-2 sm:col-span-1">
                    <p className="text-2xl font-bold text-gray-900">Web</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Development
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* DETAILS */}
            <div className="mt-24">
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* ABOUT */}
                <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-gray-50/60 p-7 hover:bg-white hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9478]/5 rounded-full blur-2xl group-hover:bg-[#FF9478]/10 transition" />

                  <div className="relative">
                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#FF9478]/10 text-[#FF9478] mb-5">
                      <FiUser size={22} />
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-3">
                      {t("detailsTitle")}
                    </h2>

                    <p className="text-gray-600 leading-7">
                      {t("details")}
                    </p>
                  </div>
                </div>

                {/* SKILLS */}
                <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-gray-50/60 p-7 hover:bg-white hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#FF9478]/10 text-[#FF9478] mb-5">
                    <FiCode size={22} />
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    {t("skillsTitle")}
                  </h2>

                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <span
                        key={i}
                        className="px-3 py-2 rounded-xl bg-white border border-gray-100 text-sm text-gray-600 hover:border-[#FF9478]/30 hover:text-[#e9785b] transition"
                      >
                        {t(`skills.item${i}`)}
                      </span>
                    ))}
                  </div>
                </div>

                {/* EDUCATION */}
                <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-7 shadow-sm hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-[#FF9478]/10 text-[#FF9478]">
                      <FiBook size={22} />
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3">
                        {t("educationTitle")}
                      </h2>

                      <p className="text-gray-600 leading-7">
                        {t("education")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* EXPERIENCE */}
                <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-7 shadow-sm hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-[#FF9478]/10 text-[#FF9478]">
                      <FiBriefcase size={22} />
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3">
                        {t("experienceTitle")}
                      </h2>

                      <p className="text-gray-600 leading-7">
                        {t("experience")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 relative overflow-hidden rounded-3xl bg-gray-900 p-8 md:p-10">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#FF9478]/20 rounded-full blur-3xl" />
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl" />

              <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {t("goalTitle")}
                  </h2>

                  <p className="text-gray-400 mt-2 max-w-2xl">
                    {t("goal")}
                  </p>
                </div>

                <div className="shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <FiArrowUpRight size={22} />
                </div>
              </div>
            </div>
          </section>
        </BlurFade>
                <Footer />

      </main>
    </>
  );
}