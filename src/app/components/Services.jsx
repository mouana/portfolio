"use client";

import { useLocale, useTranslations } from "next-intl";
import {
  FiCode,
  FiLayout,
  FiDatabase,
  FiGlobe,
  FiSmartphone,
  FiServer,
  FiArrowUpRight,
} from "react-icons/fi";

import { BlurFade } from "@/components/magicui/blur-fade";
import Header from "@/app/components/Header";
import Link from "next/link";
export default function ServicePage() {
  const t = useTranslations("service");
  const locale = useLocale();
  const services = [
    {
      number: "01",
      icon: FiCode,
      key: "frontend",
    },
    {
      number: "02",
      icon: FiServer,
      key: "backend",
    },
    {
      number: "03",
      icon: FiDatabase,
      key: "database",
    },
    {
      number: "04",
      icon: FiLayout,
      key: "ui",
    },
    {
      number: "05",
      icon: FiGlobe,
      key: "api",
    },
    {
      number: "06",
      icon: FiSmartphone,
      key: "responsive",
    },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#fafafa] text-gray-900">
        <BlurFade>

          {/* =====================================================
              HERO
          ===================================================== */}
          <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-20">

            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-end">

              <div>

                {/* Small label */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-10 h-[2px] bg-[#FF9478]" />

                  <span className="text-sm font-medium tracking-widest uppercase text-gray-500">
                    {t("badge")}
                  </span>
                </div>

                {/* Main title */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                  {t("title")}
                </h1>

              </div>

              {/* Description */}
              <div className="lg:pb-2">

                <p className="text-lg md:text-xl text-gray-500 leading-8 max-w-lg">
                  {t("description")}
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF9478]" />
                  <span className="text-sm text-gray-400">
                    {t("items.frontend.title")} ·{" "}
                    {t("items.backend.title")} ·{" "}
                    {t("items.database.title")}
                  </span>
                </div>

              </div>

            </div>

          </section>


          {/* =====================================================
              SERVICES
          ===================================================== */}
          <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-28">

            <div className="border-t border-gray-200">

              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.key}
                    className="
                      group
                      grid
                      grid-cols-[55px_1fr]
                      md:grid-cols-[80px_70px_1fr_auto]
                      gap-5
                      md:gap-8
                      items-start
                      py-8
                      md:py-10
                      border-b
                      border-gray-200
                      transition-all
                      duration-300
                      hover:bg-white
                      hover:px-5
                      rounded-xl
                    "
                  >

                    {/* Number */}
                    <span className="
                      text-sm
                      font-semibold
                      text-gray-300
                      pt-1
                      group-hover:text-[#FF9478]
                      transition
                    ">
                      {service.number}
                    </span>


                    {/* Icon */}
                    <div className="
                      hidden
                      md:flex
                      w-12
                      h-12
                      rounded-xl
                      bg-white
                      border
                      border-gray-200
                      items-center
                      justify-center
                      text-gray-500
                      group-hover:bg-[#FF9478]
                      group-hover:text-white
                      group-hover:border-[#FF9478]
                      transition-all
                      duration-300
                    ">
                      <Icon size={21} />
                    </div>


                    {/* Content */}
                    <div className="col-start-2 md:col-start-3">

                      <h2 className="
                        text-2xl
                        md:text-3xl
                        font-semibold
                        tracking-tight
                        text-gray-900
                        group-hover:text-[#e9785b]
                        transition
                      ">
                        {t(`items.${service.key}.title`)}
                      </h2>

                      <p className="
                        mt-3
                        text-gray-500
                        leading-7
                        max-w-2xl
                        text-sm
                        md:text-base
                      ">
                        {t(`items.${service.key}.description`)}
                      </p>

                    </div>


                    {/* Arrow */}
                    <div className="
                      hidden
                      md:flex
                      w-10
                      h-10
                      rounded-full
                      border
                      border-gray-200
                      items-center
                      justify-center
                      text-gray-400
                      group-hover:bg-[#FF9478]
                      group-hover:text-white
                      group-hover:border-[#FF9478]
                      group-hover:rotate-45
                      transition-all
                      duration-300
                    ">
                      <FiArrowUpRight size={18} />
                    </div>

                  </div>
                );
              })}

            </div>

          </section>


          {/* =====================================================
              CTA
          ===================================================== */}
          <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-28">

            <div className="
              relative
              overflow-hidden
              rounded-[2rem]
              bg-[#111111]
              px-7
              py-12
              md:px-12
              md:py-14
            ">

              {/* Decorative circles */}
              <div className="
                absolute
                -right-20
                -top-20
                w-64
                h-64
                rounded-full
                bg-[#FF9478]/10
                blur-3xl
              " />

              <div className="
                absolute
                -left-20
                -bottom-20
                w-64
                h-64
                rounded-full
                bg-orange-400/10
                blur-3xl
              " />

              <div className="
                relative
                flex
                flex-col
                md:flex-row
                md:items-center
                md:justify-between
                gap-8
              ">

                <div>

                  <p className="text-[#FF9478] text-sm font-medium uppercase tracking-widest mb-3">
                    Let's work together
                  </p>

                  <h2 className="
                    text-3xl
                    md:text-4xl
                    font-bold
                    text-white
                    tracking-tight
                  ">
                    {t("cta.title")}
                  </h2>

                  <p className="
                    text-gray-400
                    mt-3
                    max-w-xl
                    leading-7
                  ">
                    {t("cta.description")}
                  </p>

                </div>


               <Link
  href={`/${locale}/contact`}
  className="inline-flex px-6 py-3 rounded-full bg-[#FF9478] text-white font-semibold hover:bg-[#e9785b] hover:scale-105 transition-all duration-300"
>
  {t("cta.button")}
</Link>

              </div>

            </div>

          </section>

        </BlurFade>
      </main>
    </>
  );
}