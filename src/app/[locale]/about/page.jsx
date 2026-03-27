"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { BlurFade } from "@/components/magicui/blur-fade";
import { FiUser, FiCode, FiBook } from "react-icons/fi";
import Header from "@/app/components/Header";
import { WarpBackground } from "@/components/ui/warp-background";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      <Header />

      <BlurFade>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center pt-45">

          {/* LEFT - IMAGE (FIXED) */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[550px] aspect-square relative">

              {/* BACKGROUND */}
              <WarpBackground className="absolute inset-0 rounded-3xl overflow-hidden" />

              {/* IMAGE (centered properly, no extra wrappers) */}
              <Image
                src="/mona-1.png"
                alt="Mona"
                fill
                className="object-cover rounded-2xl z-10"
                priority
              />

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-10">

            {/* TITLE BLOCK */}
            <div className="relative">

              <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-[#FF9478] to-orange-400 rounded-full"></div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#FF9478] to-orange-500 bg-clip-text text-transparent">
                  {t("title")}
                </span>
              </h1>

              <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-xl">
                {t("description")}
              </p>

              <div className="mt-6 w-24 h-[3px] bg-[#FF9478] rounded-full"></div>
            </div>

            {/* DETAILS */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <FiUser className="text-[#FF9478] text-2xl mb-3" />
              <p className="text-gray-700">{t("details")}</p>
            </div>
</div>
<div>
            {/* SKILLS */}
            <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <FiCode className="text-[#FF9478] text-2xl mb-3" />
              <h3 className="font-bold mb-2">{t("skillsTitle")}</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i}>{t(`skills.item${i}`)}</li>
                ))}
              </ul>
            </div>

            {/* EDUCATION */}
            <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <FiBook className="text-[#FF9478] text-2xl mb-3" />
              <h3 className="font-bold mb-2">{t("educationTitle")}</h3>
              <p className="text-gray-600 text-sm">{t("education")}</p>
            </div>

            {/* EXPERIENCE */}
            <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <FiUser className="text-[#FF9478] text-2xl mb-3" />
              <h3 className="font-bold mb-2">{t("experienceTitle")}</h3>
              <p className="text-gray-600 text-sm">{t("experience")}</p>
            </div>

          </div>
        </div>
      </BlurFade>
    </>
  );
}