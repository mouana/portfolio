"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

export default function Header() {
  const [hovered, setHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = useTranslations("header");
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  // Remove locale from pathname
  // /en/about -> /about
  const cleanPath =
    pathname.replace(/^\/(en|fr|ar|de)/, "") || "/";

  // Check active page
  const isActive = (path) => {
    return cleanPath === path;
  };

  // Change language while keeping current page
  const handleLocaleChange = (e) => {
    const newLocale = e.target.value;

    const pathWithoutLocale =
      pathname.replace(/^\/(en|fr|ar|de)/, "") || "/";

    router.push(`/${newLocale}${pathWithoutLocale}`);

    // Close mobile menu after changing language
    setMobileMenuOpen(false);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Desktop link style
  const desktopLink = (path) =>
    `px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
      isActive(path)
        ? "bg-[#FF9478] text-white"
        : "text-white hover:text-[#FF9478]"
    }`;

  // Mobile link style
  const mobileLink = (path) =>
    `px-7 py-3 rounded-full font-semibold text-lg transition-all duration-200 ${
      isActive(path)
        ? "bg-[#FF9478] text-white shadow-lg shadow-[#FF9478]/20"
        : "text-white hover:text-[#FF9478]"
    }`;

  return (
    <>
      {/* ========================================================= */}
      {/* MOBILE MENU BUTTON */}
      {/* ========================================================= */}

      <button
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileMenuOpen}
        className="
          md:hidden
          fixed
          top-6
          right-6
          z-[70]
          w-8
          h-8
          rounded-full
          bg-[#FF9478]
          text-white
          flex
          items-center
          justify-center
          shadow-lg
          shadow-black/20
          transition-all
          duration-300
          hover:scale-105
        "
      >
        {mobileMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* ========================================================= */}
      {/* HEADER */}
      {/* ========================================================= */}

      <header
        className="
          fixed
          md:absolute
          top-4
          left-1/2
          -translate-x-1/2
          z-40
          w-[90%]
          max-w-6xl
          bg-[#111]
          rounded-full
          shadow-lg
          px-4
          md:px-6
          py-2
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            md:justify-between
          "
        >

          {/* ===================================================== */}
          {/* LEFT NAVIGATION - DESKTOP */}
          {/* ===================================================== */}

          <nav className="hidden md:flex items-center gap-2 lg:gap-6">

            {/* HOME */}
            <Link
              href={`/${currentLocale}`}
              className={desktopLink("/")}
            >
              {t("home")}
            </Link>

            {/* ABOUT */}
            <Link
              href={`/${currentLocale}/about`}
              className={desktopLink("/about")}
            >
              {t("about")}
            </Link>

            {/* SERVICE */}
            <Link
              href={`/${currentLocale}/service`}
              className={desktopLink("/service")}
            >
              {t("service")}
            </Link>

          </nav>

          {/* ===================================================== */}
          {/* LOGO */}
          {/* ===================================================== */}

          <div className="flex items-center justify-center">
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className={`
                rounded-full
                bg-[#FF9478]
                text-white
                font-bold
                inline-flex
                items-center
                justify-center
                transition-all
                duration-300
                ease-in-out
                cursor-default
                ${
                  hovered
                    ? "px-4 py-2"
                    : "w-8 h-8"
                }
              `}
            >
              {hovered ? "Mona Souabni" : "MS"}
            </div>
          </div>

          {/* ===================================================== */}
          {/* RIGHT NAVIGATION - DESKTOP */}
          {/* ===================================================== */}

          <div className="hidden md:flex items-center gap-4 lg:gap-6">

            <nav className="flex items-center gap-2 lg:gap-4">

              {/* RESUME */}
              <Link
                href={`/${currentLocale}/resume`}
                className={desktopLink("/resume")}
              >
                {t("resume")}
              </Link>

              {/* PROJECT */}
              <Link
                href={`/${currentLocale}/project`}
                className={desktopLink("/project")}
              >
                {t("project")}
              </Link>

              {/* CONTACT */}
              <Link
                href={`/${currentLocale}/contact`}
                className={desktopLink("/contact")}
              >
                {t("contact")}
              </Link>

            </nav>

            {/* LANGUAGE */}
            <select
              value={currentLocale}
              onChange={handleLocaleChange}
              className="
                bg-[#222]
                text-white
                border
                border-[#FF9478]
                px-2
                py-1
                rounded
                text-sm
                outline-none
                cursor-pointer
              "
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="ar">AR</option>
              <option value="de">DE</option>
            </select>

          </div>

        </div>
      </header>

      {/* ========================================================= */}
      {/* MOBILE MENU - OUTSIDE HEADER */}
      {/* ========================================================= */}

      <div
        className={`
          md:hidden
          fixed
          inset-0
          z-[60]
          bg-[#111]/98
          backdrop-blur-xl
          flex
          flex-col
          items-center
          justify-center
          transition-all
          duration-300
          ${
            mobileMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      >

        {/* Mobile Navigation */}

        <nav className="flex flex-col items-center gap-3">

          {/* HOME */}
          <Link
            href={`/${currentLocale}`}
            className={mobileLink("/")}
            onClick={closeMobileMenu}
          >
            {t("home")}
          </Link>

          {/* ABOUT */}
          <Link
            href={`/${currentLocale}/about`}
            className={mobileLink("/about")}
            onClick={closeMobileMenu}
          >
            {t("about")}
          </Link>

          {/* SERVICE */}
          <Link
            href={`/${currentLocale}/service`}
            className={mobileLink("/service")}
            onClick={closeMobileMenu}
          >
            {t("service")}
          </Link>

          {/* RESUME */}
          <Link
            href={`/${currentLocale}/resume`}
            className={mobileLink("/resume")}
            onClick={closeMobileMenu}
          >
            {t("resume")}
          </Link>

          {/* PROJECT */}
          <Link
            href={`/${currentLocale}/project`}
            className={mobileLink("/project")}
            onClick={closeMobileMenu}
          >
            {t("project")}
          </Link>

          {/* CONTACT */}
          <Link
            href={`/${currentLocale}/contact`}
            className={mobileLink("/contact")}
            onClick={closeMobileMenu}
          >
            {t("contact")}
          </Link>

        </nav>

        {/* ===================================================== */}
        {/* MOBILE LANGUAGE SELECTOR */}
        {/* ===================================================== */}

        <div className="mt-8">

          <select
            value={currentLocale}
            onChange={handleLocaleChange}
            className="
              bg-[#222]
              text-white
              border
              border-[#FF9478]
              px-5
              py-3
              rounded-full
              text-sm
              font-medium
              outline-none
              cursor-pointer
            "
          >
            <option value="en">English (EN)</option>
            <option value="fr">Français (FR)</option>
            <option value="ar">العربية (AR)</option>
            <option value="de">Deutsch (DE)</option>
          </select>

        </div>

      </div>

      {/* ========================================================= */}
      {/* SCROLL PROGRESS */}
      {/* ========================================================= */}

      <ScrollProgress
        className="
          fixed
          left-0
          w-full
          max-w-6xl
          h-1
          rounded-full
          z-40
        "
      />
    </>
  );
}