'use client';

import { useTranslations } from 'next-intl';
import { RetroGrid } from "@/components/magicui/retro-grid";
import { motion } from 'framer-motion';

export default function Services() {
  const t = useTranslations('services');

  const cardData = [
    {
      key: 'frontend',
      image: './1733379386369.png',
      alt: 'Frontend',
    },
    {
      key: 'backend',
      image: '/logos-backend.png',
      alt: 'Backend',
    },
    {
      key: 'fullstack',
      image: './full-stack-web-development.png',
      alt: 'Fullstack',
    },
  ];

  return (
    <section className="relative py-20 px-4 max-w-7xl mx-auto overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-gray-900 to-black opacity-90 -z-10"></div>
      <RetroGrid />

      {/* Heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          <span>{t('title').split(' ')[0]} </span>
          <span className="text-[#FF9478]">{t('title').split(' ')[1]}</span>
        </h2>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto text-base md:text-lg">
          {t('description')}
        </p>
      </motion.div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {cardData.map((card, index) => (
          <motion.div
            key={card.key}
            className="group relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden p-6 border border-white/10 transition-all duration-300 hover:border-[#FF9478] hover:shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3 className="text-white text-2xl font-semibold mb-4">
              {t(`items.${card.key}.title`)}
            </h3>

            <div className="w-full h-44 bg-gray-700/50 rounded-lg mb-5 overflow-hidden">
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              {t(`items.${card.key}.description`)}
            </p>

            {/* <button className="absolute bottom-5 right-5 bg-[#1f2937] text-white p-3 rounded-full hover:bg-[#FF9478] transition-colors">
              →
            </button> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
