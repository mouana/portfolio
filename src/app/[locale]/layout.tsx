import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";

import { Dock, DockIcon } from "@/components/magicui/dock";

import {
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";

import { SiGmail } from "react-icons/si";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">

        <NextIntlClientProvider>

          <main className="pb-28">
            {children}
          </main>

          {/* ================= STICKY CONTACT DOCK ================= */}

          <Dock
           className="
  fixed
  bottom-4
  left-1/2
  -translate-x-1/2

  w-[calc(100%-24px)]
  max-w-[420px]

  z-[999]

  bg-black/20
  backdrop-blur-2xl
  backdrop-saturate-150

  border
  border-white/15

  rounded-2xl
  p-2

  shadow-[0_8px_40px_rgba(0,0,0,0.25)]

  md:w-auto

  transition-all
  duration-300
">

            {/* ================= WHATSAPP ================= */}

            <DockIcon
              className="
                group
                hover:scale-110
                active:scale-95
                transition-all
                duration-300
              "
            >
              <a
                href="https://wa.me/212710673700"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex items-center justify-center w-full h-full"
              >
                <FaWhatsapp
                  className="
                    text-green-500
                    w-8
                    h-8
                    group-hover:scale-110
                    transition-transform
                  "
                />
              </a>
            </DockIcon>


            {/* ================= PHONE ================= */}

            {/* <DockIcon
              className="
                group
                hover:scale-110
                active:scale-95
                transition-all
                duration-300
              "
            >
              <a
                href="tel:+212710673700"
                aria-label="Call Mona"
                className="flex items-center justify-center w-full h-full"
              >
                <FaPhone
                  className="
                    text-[#FF9478]
                    w-7
                    h-7
                    group-hover:scale-110
                    transition-transform
                  "
                />
              </a>
            </DockIcon> */}


            {/* ================= EMAIL ================= */}

            <DockIcon
              className="
                group
                hover:scale-110
                active:scale-95
                transition-all
                duration-300
              "
            >
              <a
                href="mailto:souabniesmona@gmail.com"
                aria-label="Email Mona"
                className="flex items-center justify-center w-full h-full"
              >
                <SiGmail
                  className="
                    text-red-500
                    w-8
                    h-8
                    group-hover:scale-110
                    transition-transform
                  "
                />
              </a>
            </DockIcon>


            {/* ================= GITHUB ================= */}

            <DockIcon
              className="
                group
                hover:scale-110
                active:scale-95
                transition-all
                duration-300
              "
            >
              <a
                href="https://github.com/mouana"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center justify-center w-full h-full"
              >
                <FaGithub
                  className="
                    text-gray-800
                    dark:text-gray-200
                    w-8
                    h-8
                    group-hover:scale-110
                    transition-transform
                  "
                />
              </a>
            </DockIcon>


            {/* ================= LINKEDIN ================= */}

            <DockIcon
              className="
                group
                hover:scale-110
                active:scale-95
                transition-all
                duration-300
              "
            >
              <a
                href="https://www.linkedin.com/in/souabni-mona-196796248/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-full h-full"
              >
                <FaLinkedin
                  className="
                    text-blue-600
                    w-8
                    h-8
                    group-hover:scale-110
                    transition-transform
                  "
                />
              </a>
            </DockIcon>


            {/* ================= RESUME ================= */}

            <DockIcon
              className="
                group
                hover:scale-110
                active:scale-95
                transition-all
                duration-300
              "
            >
              <a
                href="/cv/Mona_Souabni_CV_EN.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Resume"
                className="flex items-center justify-center w-full h-full"
              >
                <FaFileAlt
                  className="
                    text-[#FF9478]
                    w-7
                    h-7
                    group-hover:scale-110
                    transition-transform
                  "
                />
              </a>
            </DockIcon>

          </Dock>

        </NextIntlClientProvider>
      </body>
    </html>
  );
}