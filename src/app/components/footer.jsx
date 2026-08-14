"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiArrowUpRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const t = useTranslations("footer");
  const currentLocale = useLocale();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#fafafa] border-t border-gray-100 overflow-hidden">

      {/* Soft decorative background */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-[#FF9478]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">

        {/* ================= MAIN FOOTER ================= */}
        <div className="py-14 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* ================= BRAND ================= */}
          <div>
            <Link
              href={`/${currentLocale}`}
              className="inline-flex items-center gap-3 group"
            >
              <div className="
                w-11
                h-11
                rounded-full
                bg-[#FF9478]
                text-white
                flex
                items-center
                justify-center
                font-bold
                text-sm
                shadow-sm
                group-hover:scale-105
                transition-transform
                duration-300
              ">
                MS
              </div>

              <div>
                <p className="font-bold text-gray-900">
                  Mona Souabni
                </p>

                <p className="text-xs text-gray-400">
                  {t("role")}
                </p>
              </div>
            </Link>

            <p className="mt-5 text-sm text-gray-500 leading-7 max-w-sm">
              {t("description")}
            </p>
          </div>


          {/* ================= NAVIGATION ================= */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-5">
              {t("navigationTitle")}
            </h3>

            <nav className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">

              <Link
                href={`/${currentLocale}`}
                className="text-gray-500 hover:text-[#FF9478] transition-colors"
              >
                {t("links.home")}
              </Link>

              <Link
                href={`/${currentLocale}/about`}
                className="text-gray-500 hover:text-[#FF9478] transition-colors"
              >
                {t("links.about")}
              </Link>

              <Link
                href={`/${currentLocale}/service`}
                className="text-gray-500 hover:text-[#FF9478] transition-colors"
              >
                {t("links.services")}
              </Link>

              <Link
                href={`/${currentLocale}/project`}
                className="text-gray-500 hover:text-[#FF9478] transition-colors"
              >
                {t("links.projects")}
              </Link>

              <Link
                href={`/${currentLocale}/resume`}
                className="text-gray-500 hover:text-[#FF9478] transition-colors"
              >
                {t("links.resume")}
              </Link>

              <Link
                href={`/${currentLocale}/contact`}
                className="text-gray-500 hover:text-[#FF9478] transition-colors"
              >
                {t("links.contact")}
              </Link>

            </nav>
          </div>


          {/* ================= CONTACT ================= */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-5">
              {t("contactTitle")}
            </h3>

            <div className="space-y-3">

              {/* Email */}
              <a
                href="mailto:mona.souabni@gmail.com"
                className="group flex items-center gap-3 text-sm text-gray-500 hover:text-[#FF9478] transition-colors"
              >
                <span className="
                  w-9
                  h-9
                  rounded-xl
                  bg-white
                  border border-gray-100
                  flex
                  items-center
                  justify-center
                  text-[#FF9478]
                  shadow-sm
                  group-hover:bg-[#FF9478]
                  group-hover:text-white
                  transition-all
                ">
                  <FiMail size={16} />
                </span>

                <span>
                  souabniesmona@gmail.com
                </span>
              </a>


              {/* Phone */}
              <a
                href="tel:+212710673700"
                className="group flex items-center gap-3 text-sm text-gray-500 hover:text-[#FF9478] transition-colors"
              >
                <span className="
                  w-9
                  h-9
                  rounded-xl
                  bg-white
                  border border-gray-100
                  flex
                  items-center
                  justify-center
                  text-[#FF9478]
                  shadow-sm
                  group-hover:bg-[#FF9478]
                  group-hover:text-white
                  transition-all
                ">
                  <FiPhone size={16} />
                </span>

                <span>
                  +212 7 10 67 37 00
                </span>
              </a>


              {/* WhatsApp */}
              <a
                href="https://wa.me/212710673700"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-gray-500 hover:text-[#FF9478] transition-colors"
              >
                <span className="
                  w-9
                  h-9
                  rounded-xl
                  bg-white
                  border border-gray-100
                  flex
                  items-center
                  justify-center
                  text-[#FF9478]
                  shadow-sm
                  group-hover:bg-[#FF9478]
                  group-hover:text-white
                  transition-all
                ">
                  <FaWhatsapp size={17} />
                </span>

                <span>
                  {t("whatsapp")}
                </span>
              </a>

            </div>
          </div>

        </div>


        {/* ================= BOTTOM ================= */}
        <div className="
          border-t
          border-gray-200
          py-6
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
        ">

          {/* Copyright */}
          <p className="text-xs text-gray-400 text-center md:text-left">
            © {currentYear} Mona Souabni. {t("rights")}
          </p>


          {/* Social links */}
          <div className="flex items-center gap-2">

            {/* GitHub */}
            <a
              href="https://github.com/mouana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                w-9
                h-9
                rounded-xl
                bg-white
                border border-gray-100
                flex
                items-center
                justify-center
                text-gray-500
                hover:text-white
                hover:bg-[#FF9478]
                hover:-translate-y-1
                shadow-sm
                transition-all
                duration-300
              "
            >
              <FiGithub size={17} />
            </a>


            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/souabni-mona-196796248/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                w-9
                h-9
                rounded-xl
                bg-white
                border border-gray-100
                flex
                items-center
                justify-center
                text-gray-500
                hover:text-white
                hover:bg-[#FF9478]
                hover:-translate-y-1
                shadow-sm
                transition-all
                duration-300
              "
            >
              <FiLinkedin size={17} />
            </a>


            {/* Email */}
            <a
              href="souabniesmona@gmail.com"
              aria-label="Email"
              className="
                w-9
                h-9
                rounded-xl
                bg-white
                border border-gray-100
                flex
                items-center
                justify-center
                text-gray-500
                hover:text-white
                hover:bg-[#FF9478]
                hover:-translate-y-1
                shadow-sm
                transition-all
                duration-300
              "
            >
              <FiMail size={17} />
            </a>


            {/* Back to top */}
            <a
              href="#top"
              aria-label={t("backToTop")}
              className="
                ml-2
                w-9
                h-9
                rounded-xl
                bg-[#FF9478]
                text-white
                flex
                items-center
                justify-center
                hover:bg-[#e9785b]
                hover:-translate-y-1
                shadow-sm
                transition-all
                duration-300
              "
            >
              <FiArrowUpRight size={17} />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}