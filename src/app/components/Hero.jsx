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
import {
  FaReact,
  FaLaravel,
  FaNodeJs,
  FaPhp,
} from "react-icons/fa";

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
      <div className="bg-white overflow-hidden pt-24">

        <section
          className="
            min-h-screen
            w-full
            max-w-7xl
            mx-auto
            px-6
            lg:px-10
            flex
            flex-col
            lg:flex-row
            items-center
            justify-center
            gap-10
            lg:gap-16
          "
        >

          {/* ===================================================== */}
          {/* LEFT — PHOTO */}
          {/* ===================================================== */}

          <div
            className="
              w-full
              lg:w-1/2
              flex
              justify-center
              items-center
              order-1
            "
          >

            <div
  className="relative w-90 h-64 md:w-90 md:h-80 mx-auto mb-8 group right-[21px]"
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>
  {/* Soft blurred background glow */}
  <div
    className={`
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-56
      h-56
      rounded-full
      bg-[#FF9478]/30
      blur-[70px]
      transition-all
      duration-700
      pointer-events-none
      ${
        hovered
          ? "opacity-90 scale-125"
          : "opacity-40 scale-100"
      }
    `}
  />

  {/* Tech orbiting icons */}
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

  {/* Main photo */}
  <div
    className={`
      absolute
      inset-0
      z-10
      transition-all
      duration-500
      ease-in-out
      ${
        hovered
          ? "opacity-0 scale-90 translate-y-4"
          : "opacity-100 scale-100 translate-y-0"
      }
    `}
  >
    <Image
      src="/mona-1.png"
      alt="Mona"
      fill
      className="object-cover"
    />
  </div>

  {/* Hover photo */}
  <div
    className={`
      absolute
      inset-0
      z-10
      transition-all
      duration-700
      ease-[cubic-bezier(0.34,1.56,0.64,1)]
      ${
        hovered
          ? "opacity-100 scale-100"
          : "opacity-0 scale-110 translate-y-8"
      }
    `}
  >
    <Image
      src="/mona-2.png"
      alt="Mona Hover"
      fill
      className="object-cover"
    />
  </div>

  {/* Hover text */}
  <div
    className={`
      absolute
      -bottom-4
      left-1/2
      -translate-x-1/2
      z-20
      bg-white
      px-4
      py-2
      rounded-full
      shadow-md
      transition-all
      duration-300
      ${
        hovered
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2"
      }
    `}
  >
    <span className="text-sm font-medium text-gray-800">
      {t("center.hoverLabel")}
    </span>
  </div>
</div>

          </div>


          {/* ===================================================== */}
          {/* RIGHT — CONTENT */}
          {/* ===================================================== */}

          <div
            className="
              w-full
              lg:w-1/2
              order-2
              text-center
              lg:text-left
              flex
              flex-col
              justify-center
            "
          >

            {/* Greeting */}

            <div
              className="
                inline-flex
                items-center
                justify-center
                lg:justify-start
                mb-5
              "
            >

              <span
                className="
                  text-sm
                  border
                  border-gray-300
                  px-4
                  py-2
                  rounded-full
                  font-medium
                  text-gray-700
                  bg-white
                "
              >
                {t("center.hello")}
              </span>

            </div>


            {/* Main title */}

            <h1
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                font-bold
                leading-tight
                text-gray-900
                mb-6
              "
            >

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


            {/* Description */}

            <p
              className="
                text-lg
                text-gray-600
                leading-8
                max-w-xl
                mx-auto
                lg:mx-0
                mb-8
              "
            >
              {t("center.subtitle")}
            </p>


            {/* ================================================= */}
            {/* INFORMATION CARDS */}
            {/* ================================================= */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-4
                max-w-xl
                mx-auto
                lg:mx-0
              "
            >

              {/* =============================================== */}
              {/* GLOBAL */}
              {/* =============================================== */}

              <div
                className="
                  group
                  bg-gray-50
                  border
                  border-gray-100
                  rounded-2xl
                  p-5
                  text-left

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:border-[#FF9478]/30
                "
              >

                <FiGlobe
                  className="
                    text-[#FF9478]
                    text-2xl
                    mb-3

                    transition-transform
                    duration-300

                    group-hover:scale-110
                  "
                />

                <h3 className="font-bold text-gray-900 mb-2">
                  {hovered
                    ? t("leftTextHover.title")
                    : t("leftTextDefault.title")}
                </h3>

                <p className="text-gray-700 text-sm leading-6">
                  {hovered
                    ? t("leftTextHover.line1")
                    : t("leftTextDefault.line1")}
                  <br />

                  {hovered
                    ? t("leftTextHover.line2")
                    : t("leftTextDefault.line2")}
                </p>

              </div>


              {/* =============================================== */}
              {/* TECHNICAL SKILLS */}
              {/* =============================================== */}

              <div
                className="
                  group
                  bg-gray-50
                  border
                  border-gray-100
                  rounded-2xl
                  p-5
                  text-left

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:border-[#FF9478]/30
                "
              >

                <FiCode
                  className="
                    text-[#FF9478]
                    text-2xl
                    mb-3

                    transition-transform
                    duration-300

                    group-hover:scale-110
                  "
                />

                <h3 className="font-bold text-gray-900 mb-2">
                  {hovered
                    ? t("rightTextHover.title")
                    : t("rightTextDefault.title")}
                </h3>

                <p className="text-gray-700 text-sm leading-6 mb-2">
                  {hovered
                    ? t("rightTextHover.line1")
                    : t("rightTextDefault.line1")}
                  <br />

                  {hovered
                    ? t("rightTextHover.line2")
                    : t("rightTextDefault.line2")}
                </p>

                <ul className="text-xs text-gray-500 space-y-1">

                  {[1, 2, 3].map((item) => (
                    <li key={item}>
                      •{" "}
                      {hovered
                        ? t(`rightTextHover.list.item${item}`)
                        : t(`rightTextDefault.list.item${item}`)}
                    </li>
                  ))}

                </ul>

              </div>

            </div>


            {/* ================================================= */}
            {/* SMALL STATS */}
            {/* ================================================= */}

            <div
              className="
                flex
                flex-wrap
                justify-center
                lg:justify-start
                gap-8
                mt-8
              "
            >

              {/* <div>
                <div className="text-2xl font-bold text-gray-900">
                  {t("center.experience.years")}
                </div>

                <div className="text-sm text-gray-500">
                  {t("center.experience.label")}
                </div>
              </div> */}


              {/* <div>
                <div className="text-2xl font-bold text-gray-900">
                  {t("center.projects.count")}
                </div>

                <div className="text-sm text-gray-500">
                  {t("center.projects.label")}
                </div>
              </div> */}


              {/* <div>
                <div className="text-2xl font-bold text-gray-900">
                  {t("center.clients.count")}
                </div>

                <div className="text-sm text-gray-500">
                  {t("center.clients.label")}
                </div>
              </div> */}

            </div>

          </div>

        </section>
      </div>
    </BlurFade>
  );
}