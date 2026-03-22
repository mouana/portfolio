"use client";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  FiGlobe,
  FiCode,
  FiCoffee,
} from "react-icons/fi";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { FaReact, FaLaravel, FaNodeJs, FaPhp } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiVite,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function HeroSection() {
  const [hovered, setHovered] = useState(false);
  const t = useTranslations("hero");

  return (
    <BlurFade>
      <div className="bg-white overflow-x-hidden pt-24">
        <section className="flex flex-col lg:flex-row lg:items-center justify-center min-h-screen text-gray-900 px-4 sm:px-6 w-full mx-auto gap-8">
          
          {/* LEFT box */}
          <div className="w-full lg:w-1/4 text-center lg:text-right pr-0 lg:pr-8 relative order-2 lg:order-1">
            <div className={`transition-all duration-500 ${hovered ? "opacity-0 translate-y-4" : "opacity-100"}`}>
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow mx-auto max-w-xs lg:max-w-none">
                <FiGlobe className="text-[#FF9478] text-2xl mx-auto lg:mr-auto lg:ml-0 mb-3" />
                <h3 className="text-xl font-bold mb-2">{t("leftTextDefault.title")}</h3>
                <p className="text-gray-700 mb-4">
                  {t("leftTextDefault.line1")} <br />
                  {t("leftTextDefault.line2")}
                </p>
                <p className="text-sm text-gray-500">{t("leftTextDefault.additional")}</p>
              </div>
            </div>
            <div className={`transition-all duration-500 absolute top-0 w-full ${hovered ? "opacity-100" : "opacity-0"}`}>
              <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 mx-auto max-w-xs lg:max-w-none">
                <FiGlobe className="text-orange-600 text-2xl mx-auto lg:mr-auto lg:ml-0 mb-3" />
                <h3 className="text-xl font-bold text-orange-800 mb-2">{t("leftTextHover.title")}</h3>
                <p className="text-orange-700 mb-4">
                  {t("leftTextHover.line1")} <br />
                  {t("leftTextHover.line2")}
                </p>
                <p className="text-sm text-orange-600">{t("leftTextHover.additional")}</p>
              </div>
            </div>
          </div>

          {/* CENTER */}
          <div className="w-full lg:w-2/4 text-center px-4 flex items-center flex-col order-1 lg:order-2">
            <div className="text-sm border px-4 py-1 rounded-full border-black font-medium mb-4 w-40 mt-4 break-words">
              {t("center.hello")}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              <TypingAnimation
                as="span"
                duration={50}
                startOnView
              >
                {t("center.titlePart1") + " "}
              </TypingAnimation>

              <TypingAnimation
                as="span"
                className="text-[#FF9478]"
                duration={60}
                delay={t("center.titlePart1").length * 50}
                startOnView
              >
                {t("center.name")}
              </TypingAnimation>
              <br />
              <TypingAnimation
                as="span"
                duration={60}
                delay={t("center.name").length * 50}
                startOnView
              >
                {t("center.titlePart2")}
              </TypingAnimation>
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 px-4">
              {t("center.subtitle")}
            </p>

            <div
              className="relative w-90 h-64 md:w-90 md:h-80 mx-auto mb-8 group right-[21px]"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div className="absolute overflow-hidden inset-0 z-0 flex items-center justify-center pointer-events-none">
                <OrbitingCircles radius={146}>
                  <FaLaravel className="text-red-600 w-10 h-10" />
                  <FaReact className="text-blue-500 w-10 h-10" />
                  <SiTailwindcss className="text-teal-400 w-10 h-10" />
                  <SiJavascript className="text-yellow-400 w-10 h-10" />
                  <SiHtml5 className="text-orange-500 w-10 h-10" />
                  <SiCss3 className="text-blue-500 w-10 h-10" />
                  <FaPhp className="text-indigo-700 w-10 h-10" />
                </OrbitingCircles>

                <OrbitingCircles radius={113} reverse>
                  <FaNodeJs className="text-green-600 w-10 h-10" />
                  <SiMysql className="text-blue-700 w-10 h-10" />
                  <SiBootstrap className="text-purple-600 w-10 h-10" />
                  <SiVite className="text-purple-400 w-10 h-10" />
                  <SiGit className="text-orange-600 w-10 h-10" />
                  <SiGithub className="text-gray-800 w-10 h-10" />
                </OrbitingCircles>
              </div>

              <div
                className={`absolute inset-0 z-10 transition-all duration-500 ease-in-out ${
                  hovered ? "opacity-0 scale-90 translate-y-4" : "opacity-100 scale-100 translate-y-0"
                }`}
              >
                <Image src="/mona-1.png" alt="Mona" fill className="object-cover" />
              </div>

              <div
                className={`absolute inset-0 z-10 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                  hovered ? "opacity-100 scale-100" : "opacity-0 scale-110 translate-y-8"
                }`}
              >
                <Image src="/mona-2.png" alt="Mona Hover" fill className="object-cover" />
              </div>

              <div
                className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-20 bg-white px-4 py-2 rounded-full shadow-md transition-opacity duration-300 ${
                  hovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="text-sm font-medium">{t("center.hoverLabel")}</span>
              </div>
            </div>
          </div>

          {/* RIGHT box */}
          <div className="w-full lg:w-1/4 text-center lg:text-left pl-0 lg:pl-8 relative order-3 lg:order-3">
            <div className={`transition-all duration-500 ${hovered ? "opacity-0 translate-y-4" : "opacity-100"}`}>
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow mx-auto max-w-xs lg:max-w-none">
                <FiCode className="text-[#FF9478] text-2xl mx-auto lg:ml-0 mb-3" />
                <h3 className="text-xl font-bold mb-2">{t("rightTextDefault.title")}</h3>
                <p className="text-gray-700 mb-4">
                  {t("rightTextDefault.line1")} <br />
                  {t("rightTextDefault.line2")}
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {[1, 2, 3].map((item) => (
                    <li key={item}>{t(`rightTextDefault.list.item${item}`)}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={`transition-all duration-500 absolute top-0 w-full ${hovered ? "opacity-100" : "opacity-0"}`}>
              <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 mx-auto max-w-xs lg:max-w-none">
                <FiCoffee className="text-orange-600 text-2xl mx-auto lg:ml-0 mb-3" />
                <h3 className="text-xl font-bold text-orange-800 mb-2">{t("rightTextHover.title")}</h3>
                <p className="text-orange-700 mb-4">
                  {t("rightTextHover.line1")} <br />
                  {t("rightTextHover.line2")}
                </p>
                <ul className="text-sm text-orange-600 space-y-1">
                  {[1, 2, 3].map((item) => (
                    <li key={item}>{t(`rightTextHover.list.item${item}`)}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </section>
      </div>
    </BlurFade>
  );
}
