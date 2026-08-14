"use client";

import { useTranslations } from "next-intl";
import {
  FiCode,
  FiLayout,
  FiDatabase,
  FiGlobe,
  FiSmartphone,
  FiServer,
} from "react-icons/fi";

import { BlurFade } from "@/components/magicui/blur-fade";
import Header from "@/app/components/Header";
import Footer from'@/app/components/footer'


export default function ServicePage() {
  const t = useTranslations("service");

  const services = [
    {
      icon: FiCode,
      title: t("items.frontend.title"),
      description: t("items.frontend.description"),
    },
    {
      icon: FiServer,
      title: t("items.backend.title"),
      description: t("items.backend.description"),
    },
    {
      icon: FiDatabase,
      title: t("items.database.title"),
      description: t("items.database.description"),
    },
    {
      icon: FiLayout,
      title: t("items.ui.title"),
      description: t("items.ui.description"),
    },
    {
      icon: FiGlobe,
      title: t("items.api.title"),
      description: t("items.api.description"),
    },
    {
      icon: FiSmartphone,
      title: t("items.responsive.title"),
      description: t("items.responsive.description"),
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
                <FiCode size={15} />
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

            {/* ================= SERVICES ================= */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">

              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <div
                    key={index}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-3xl
                      border
                      border-gray-100
                      bg-white
                      p-7
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
                        -right-10
                        -top-10
                        w-32
                        h-32
                        rounded-full
                        bg-[#FF9478]/5
                        blur-2xl
                        group-hover:bg-[#FF9478]/10
                        transition
                      "
                    />

                    <div className="relative">

                      {/* Icon */}
                      <div
                        className="
                          w-14
                          h-14
                          flex
                          items-center
                          justify-center
                          rounded-2xl
                          bg-[#FF9478]/10
                          text-[#FF9478]
                          mb-6
                          group-hover:bg-[#FF9478]
                          group-hover:text-white
                          transition-all
                          duration-300
                        "
                      >
                        <Icon size={24} />
                      </div>

                      {/* Number */}
                      <span className="absolute top-0 right-0 text-sm font-semibold text-gray-200">
                        0{index + 1}
                      </span>

                      <h2 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h2>

                      <p className="text-gray-600 leading-7">
                        {service.description}
                      </p>

                    </div>
                  </div>
                );
              })}

            </div>

            {/* ================= BOTTOM CTA ================= */}
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 mt-20 p-8 md:p-10">

              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#FF9478]/20 rounded-full blur-3xl" />

              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl" />

              <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {t("cta.title")}
                  </h2>

                  <p className="text-gray-400 mt-2 max-w-2xl">
                    {t("cta.description")}
                  </p>
                </div>

                <div className="shrink-0">
                  <div className="px-6 py-3 rounded-full bg-[#FF9478] text-white font-semibold">
                    {t("cta.button")}
                  </div>
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