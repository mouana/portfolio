import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import './globals.css';
import { Dock, DockIcon } from "@/components/magicui/dock";
import { FaWhatsapp, FaGithub, FaLinkedin,FaFileAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default async function LocaleLayout({
  children,
  params
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
          <main className="pb-28">{children}</main>

          {/* Ultra-Smooth Animated Dock */}
          <Dock
         className="fixed bottom-3 left-1/2 transform -translate-x-1/2 w-[280px] max-w-md z-50 
           bg-white dark:bg-gray-900 
           border border-gray-300 dark:border-gray-700 
           rounded-2xl p-2 shadow-xl hover:shadow-lg 
           transition-all duration-500
           filter drop-shadow-[0_12px_25px_rgba(255,255,255,0.3)] dark:drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]
           hover:w-[300px] transition-all duration-300 
           "
            iconSize={70}
            iconDistance={110}
            direction="middle"
            iconMagnification={80}
          >
            <DockIcon 
              className="
                          hover:shadow-green-400/30 transition-all duration-300 
                         hover:scale-110 active:scale-95 group"
            >
              <FaWhatsapp className="text-green-500  group-active:animate-pulse w-10 h-10
                                    transition-all duration-300 " />
            </DockIcon>

            <DockIcon 
              className=" hover:shadow-red-400/30 transition-all duration-300 
                         hover:scale-110 active:scale-95 group"
            >
              <SiGmail className="text-red-500  group-active:animate-pulse w-10 h-10
                                transition-all duration-300 " />
            </DockIcon>

            <DockIcon 
              className=" hover:shadow-purple-400/30 transition-all duration-300 
                         hover:scale-110 active:scale-95 group"
            >
              <FaGithub className="text-gray-700 dark:text-gray-300  w-10 h-10
                                 group-active:animate-pulse transition-all duration-300 
                                " />
            </DockIcon>

            <DockIcon 
              className=" hover:shadow-blue-400/30 transition-all duration-300 
                         hover:scale-110 active:scale-95 group"
            >
              <FaLinkedin className="text-blue-600  group-active:animate-pulse w-10 h-10
                                   transition-all duration-300" />
            </DockIcon>
            <DockIcon 
              className=" hover:shadow-blue-400/30 transition-all duration-300 
                         hover:scale-110 active:scale-95 group"
            >
              <FaFileAlt className="text-black  group-active:animate-pulse w-6 h-6
                                   transition-all duration-300 " />
            </DockIcon>
          </Dock>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}