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

  const handleLocaleChange = (e) => {
    const newLocale = e.target.value;
    const pathWithoutLocale = pathname.replace(/^\/(en|fr|ar)/, "") || "/";
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <>
      {/* Mobile Menu Button (hidden on desktop) */}
      <button 
        className="md:hidden fixed top-11 right-6 z-50 bg-[#FF9478] p-2 rounded-full"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

<header className="bg-[#111] py-2 px-4 md:px-6 flex fixed md:absolute flex-col md:flex-row justify-between items-center rounded-full w-[90%] max-w-6xl mx-auto mt-4 shadow-lg top-4 left-1/2 z-40 -translate-x-1/2">
        {/* Left Links - Hidden on mobile */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-14">
          <Link href="/" className="bg-[#FF9478] text-white px-4 py-2 rounded-full font-semibold">
            {t("home")}
          </Link>
          <Link href={`/${currentLocale}/about`} className="text-white hover:text-[#FF9478]">
            {t("about")}
          </Link>
          <Link href={`/${currentLocale}/service`} className="text-white hover:text-[#FF9478]">{t("service")}</Link>
        </nav>

        {/* Center Logo */}
        <div className="flex items-center gap-2 my-2 md:my-0">
          <div
            className={`rounded-full bg-[#FF9478] text-white font-bold inline-flex items-center justify-center transition-all duration-300 ease-in-out ${hovered ? "px-4 py-2" : "w-8 h-8"}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {hovered ? "Mona Souabni" : "MS"}
          </div>
        </div>

        {/* Right Links + Language Switcher - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <nav className="flex items-center gap-4 lg:gap-6">
            <Link href={`/${currentLocale}/resume`} className="text-white hover:text-[#FF9478]">{t("resume")}</Link>
            <Link href={`/${currentLocale}/resume`} className="text-white hover:text-[#FF9478]">{t("project")}</Link>
            <Link href={`/${currentLocale}/contact`} className="text-white hover:text-[#FF9478]">{t("contact")}</Link>
          </nav>

          {/* Language Selector */}
          <select
            value={currentLocale}
            onChange={handleLocaleChange}
            className="bg-[#222] text-white border border-[#FF9478] px-2 py-1 rounded text-sm"
          >
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="ar">AR</option>
          </select>
        </div>

        {/* Mobile Menu (shown when mobile menu is open) */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-[#111] bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8 pt-20 overflow-y-auto h-fit
">
            <Link 
              href="/" 
              className="bg-[#FF9478] text-white px-6 py-3 rounded-full font-semibold text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("home")}
            </Link>
            <Link 
              href={`/${currentLocale}/about`} 
              className="text-white hover:text-[#FF9478] text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("about")}
            </Link>
            <Link 
              href={`/${currentLocale}/service`} 
              className="text-white hover:text-[#FF9478] text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("service")}
            </Link>
            <Link 
              href={`/${currentLocale}/resume`} 
              className="text-white hover:text-[#FF9478] text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("resume")}
            </Link>
            <Link 
              href={`/${currentLocale}/project`} 
              className="text-white hover:text-[#FF9478] text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("project")}
            </Link>
            <Link 
              href={`/${currentLocale}/contact`} 
              className="text-white hover:text-[#FF9478] text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("contact")}
            </Link>
            
            <select
              value={currentLocale}
              onChange={handleLocaleChange}
              className="bg-[#222] text-white border border-[#FF9478] px-4 py-2 rounded text-lg mt-4"
            >
              <option value="en">English (EN)</option>
              <option value="fr">Français (FR)</option>
              <option value="ar">العربية (AR)</option>
            </select>
          </div>
        )}
      </header>
<ScrollProgress className="fixed left-0  w-[100%] max-w-6xl  h-1 rounded-full z-40" />
    </>
  );
}