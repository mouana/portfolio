"use client";

import { useTranslations } from "next-intl";
import {
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiPhone,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import { BlurFade } from "@/components/magicui/blur-fade";
import Header from "@/app/components/Header";
import Footer from'@/app/components/footer'


export default function ContactPage() {
  const t = useTranslations("contact");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        <BlurFade>
          <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-32 pb-24">

            {/* ================= HERO ================= */}
            <div className="max-w-3xl mx-auto text-center">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF9478]/10 text-[#e9785b] text-sm font-medium mb-6">
                <FiMail size={15} />
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

            {/* ================= CONTENT ================= */}
            <div className="grid lg:grid-cols-5 gap-8 mt-16">

              {/* ================= LEFT INFO ================= */}
              <div className="lg:col-span-2">

                <div className="h-full rounded-3xl bg-gray-900 p-8 md:p-10 relative overflow-hidden">

                  {/* Decorative circles */}
                  <div className="absolute -right-20 -top-20 w-56 h-56 rounded-full bg-[#FF9478]/20 blur-3xl" />
                  <div className="absolute -left-20 -bottom-20 w-56 h-56 rounded-full bg-orange-400/10 blur-3xl" />

                  <div className="relative">

                    <h2 className="text-2xl font-bold text-white">
                      {t("info.title")}
                    </h2>

                    <p className="mt-3 text-gray-400 leading-7">
                      {t("info.description")}
                    </p>

                    {/* Email */}
                    <a
                      href="mailto:your@email.com"
                      className="group flex items-center gap-4 mt-10"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#FF9478] group-hover:bg-[#FF9478] group-hover:text-white transition">
                        <FiMail size={20} />
                      </div>

                      <div>
                        <p className="text-sm text-gray-500">
                          {t("info.emailLabel")}
                        </p>

                        <p className="text-white font-medium mt-1">
                          souabniesmona@email.com
                        </p>
                      </div>
                    </a>

                    {/* Location */}
                    <div className="flex items-center gap-4 mt-7">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#FF9478]">
                        <FiMapPin size={20} />
                      </div>

                      <div>
                        <p className="text-sm text-gray-500">
                          {t("info.locationLabel")}
                        </p>

                        <p className="text-white font-medium mt-1">
                          Marrakech, Morocco
                        </p>
                      </div>
                    </div>

                    {/* Social Links */}
                    {/* ================= CONTACT DETAILS & SOCIAL ================= */}
<div className="mt-10 pt-8 border-t border-white/10">

  {/* Contact Details */}
  <div className="space-y-5">

    {/* Phone */}
    <a
      href="tel:+212710673700"
      className="
        group
        flex
        items-center
        gap-4
        p-3
        -mx-3
        rounded-2xl
        hover:bg-white/5
        transition-all
        duration-300
      "
    >
      <div
        className="
          w-11
          h-11
          shrink-0
          rounded-xl
          bg-white/10
          flex
          items-center
          justify-center
          text-[#FF9478]
          group-hover:bg-[#FF9478]
          group-hover:text-white
          transition-all
          duration-300
        "
      >
        <FiPhone size={19} />
      </div>

      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wider">
          {t("info.phoneLabel")}
        </p>

        <p className="text-white text-sm font-medium mt-1">
          +212 7 10 67 37 00
        </p>
      </div>
    </a>


    {/* WhatsApp */}
    <a
      href="https://wa.me/212710673700"
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex
        items-center
        gap-4
        p-3
        -mx-3
        rounded-2xl
        hover:bg-white/5
        transition-all
        duration-300
      "
    >
      <div
        className="
          w-11
          h-11
          shrink-0
          rounded-xl
          bg-white/10
          flex
          items-center
          justify-center
          text-[#FF9478]
          group-hover:bg-[#FF9478]
          group-hover:text-white
          transition-all
          duration-300
        "
      >
        <FaWhatsapp size={21} />
      </div>

      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wider">
          {t("info.whatsappLabel")}
        </p>

        <p className="text-white text-sm font-medium mt-1">
          +212 7 10 67 37 00
        </p>
      </div>
    </a>

  </div>


  {/* Social Media */}
  <div className="mt-8 pt-7 border-t border-white/10">

    <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">
      {t("info.socialLabel")}
    </p>

    <div className="flex gap-3">

      {/* GitHub */}
      <a
        href="https://github.com/mouana"
        target="_blank"
        rel="noopener noreferrer"
        className="
          w-11
          h-11
          rounded-xl
          bg-white/10
          flex
          items-center
          justify-center
          text-white
          hover:bg-[#FF9478]
          hover:-translate-y-1
          transition-all
          duration-300
        "
        aria-label="GitHub"
      >
        <FiGithub size={20} />
      </a>


      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/souabni-mona-196796248/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          w-11
          h-11
          rounded-xl
          bg-white/10
          flex
          items-center
          justify-center
          text-white
          hover:bg-[#FF9478]
          hover:-translate-y-1
          transition-all
          duration-300
        "
        aria-label="LinkedIn"
      >
        <FiLinkedin size={20} />
      </a>

    </div>

  </div>

</div>

                  </div>
                </div>
              </div>

              {/* ================= CONTACT FORM ================= */}
              <div className="lg:col-span-3">

                <form
                  onSubmit={handleSubmit}
                  className="
                    rounded-3xl
                    border
                    border-gray-100
                    bg-white
                    p-8
                    md:p-10
                    shadow-sm
                  "
                >

                  <h2 className="text-2xl font-bold text-gray-900">
                    {t("form.title")}
                  </h2>

                  <p className="mt-2 text-gray-500">
                    {t("form.description")}
                  </p>

                  {/* Name */}
                  <div className="mt-8">

                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t("form.name")}
                    </label>

                    <div className="relative">
                      <FiUser
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                      />

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder={t("form.namePlaceholder")}
                        className="
                          w-full
                          pl-11
                          pr-4
                          py-3.5
                          rounded-2xl
                          border
                          border-gray-200
                          outline-none
                          text-gray-800
                          placeholder:text-gray-400
                          focus:border-[#FF9478]
                          focus:ring-2
                          focus:ring-[#FF9478]/10
                          transition
                        "
                      />
                    </div>

                  </div>

                  {/* Email */}
                  <div className="mt-6">

                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t("form.email")}
                    </label>

                    <div className="relative">
                      <FiMail
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                      />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder={t("form.emailPlaceholder")}
                        className="
                          w-full
                          pl-11
                          pr-4
                          py-3.5
                          rounded-2xl
                          border
                          border-gray-200
                          outline-none
                          text-gray-800
                          placeholder:text-gray-400
                          focus:border-[#FF9478]
                          focus:ring-2
                          focus:ring-[#FF9478]/10
                          transition
                        "
                      />
                    </div>

                  </div>

                  {/* Message */}
                  <div className="mt-6">

                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t("form.message")}
                    </label>

                    <div className="relative">

                      <FiMessageSquare
                        className="absolute left-4 top-4 text-gray-400"
                        size={18}
                      />

                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="6"
                        placeholder={t("form.messagePlaceholder")}
                        className="
                          w-full
                          pl-11
                          pr-4
                          py-3.5
                          rounded-2xl
                          border
                          border-gray-200
                          outline-none
                          text-gray-800
                          placeholder:text-gray-400
                          focus:border-[#FF9478]
                          focus:ring-2
                          focus:ring-[#FF9478]/10
                          transition
                          resize-none
                        "
                      />

                    </div>

                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="
                      mt-7
                      w-full
                      flex
                      items-center
                      justify-center
                      gap-2
                      px-6
                      py-3.5
                      rounded-full
                      bg-[#FF9478]
                      text-white
                      font-semibold
                      hover:bg-[#f27f62]
                      hover:shadow-lg
                      hover:shadow-[#FF9478]/20
                      transition-all
                      duration-300
                    "
                  >
                    <FiSend size={18} />
                    {t("form.button")}
                  </button>

                </form>

              </div>

            </div>

          </section>
        </BlurFade>
                <Footer />

      </main>
    </>
  );
}