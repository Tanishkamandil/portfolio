import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'WORK', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'EDUCATION', href: '#education' },
  { name: 'ACHIEVEMENTS', href: '#achievements' },
  { name: 'CONTACT', href: '#contact' },
];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const HeroSection: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-white text-slate-900">
      {/* Background */}
      <div className="absolute inset-0 soft-grid opacity-60" />

      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -18, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-blue-100/60 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -18, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-48 left-1/4 h-[25rem] w-[25rem] rounded-full bg-sky-100/70 blur-3xl"
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-[min(1180px,calc(100%-48px))] flex-col">
        {/* Navbar */}
        <header
          className={`sticky top-0 z-40 flex items-center justify-between py-5 transition-all duration-300 ${
            scrolled
              ? 'border-b border-slate-100 bg-white/80 backdrop-blur-xl'
              : ''
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            className="display-font text-sm font-extrabold tracking-[0.18em] text-slate-950 sm:text-base"
          >
            TANISHKA<span className="text-blue-600">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative text-[10px] font-bold tracking-[0.14em] text-slate-500 transition-colors duration-200 hover:text-blue-600"
              >
                {item.name}

                <span className="absolute -bottom-1 left-0 h-px w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Mobile Menu */}
            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] font-bold tracking-[0.12em] text-slate-700 shadow-sm transition-all hover:border-blue-200 hover:text-blue-600 md:hidden"
            >
              {menuOpen ? 'CLOSE' : 'MENU'}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] font-bold tracking-[0.13em] text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-md sm:inline-flex"
            >
              LET&apos;S TALK ↗
            </a>
          </div>
        </header>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="mb-3 rounded-3xl border border-slate-100 bg-white p-3 shadow-xl md:hidden">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-xs font-bold tracking-[0.12em] text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-600"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block rounded-2xl bg-blue-600 px-4 py-3 text-center text-xs font-bold tracking-[0.12em] text-white"
            >
              LET&apos;S TALK ↗
            </a>
          </div>
        )}

        {/* Hero Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid flex-1 items-center gap-12 py-14 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:py-16"
        >
          {/* Left */}
          <div>
            <motion.div
              variants={fadeUp}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-blue-600" />

              <span className="text-[10px] font-bold tracking-[0.22em] text-blue-600">
                SOFTWARE DEVELOPER
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="display-font max-w-4xl text-[3.7rem] font-extrabold leading-[0.94] tracking-[-0.055em] text-slate-950 sm:text-6xl md:text-7xl lg:text-[5.8rem]"
            >
              BUILDING
              <span className="block text-blue-600">
                REAL-WORLD
              </span>
              <span className="block">
                WEB PRODUCTS.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base"
            >
              I&apos;m Tanishka Mandil, a Full-Stack Developer currently
              working at V2SK Techno Pvt. Ltd. I build responsive web
              interfaces and practical applications using React.js, Node.js,
              SQL and MongoDB.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href="#work"
                className="rounded-full bg-blue-600 px-6 py-3 text-xs font-bold tracking-[0.1em] text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25"
              >
                VIEW MY WORK ↗
              </a>

              <a
                href="TanishkaMandil.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-xs font-bold tracking-[0.1em] text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
              >
                VIEW RESUME ↓
              </a>
            </motion.div>

            {/* Tech Strip */}
            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-bold tracking-[0.12em] text-slate-400"
            >
              <span>REACT.JS</span>
              <span className="text-blue-300">•</span>

              <span>NODE.JS</span>
              <span className="text-blue-300">•</span>

              <span>EXPRESS.JS</span>
              <span className="text-blue-300">•</span>

              <span>SQL</span>
              {/* <span className="text-blue-300">•</span> */}

              {/* <span>MONGODB</span> */}
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            variants={fadeUp}
            className="relative flex min-h-[390px] items-center justify-center lg:min-h-[450px]"
          >
            {/* Outer Glow */}
            <div className="absolute h-80 w-80 rounded-full bg-blue-50 shadow-[0_25px_80px_rgba(37,99,235,0.08)]" />

            {/* Orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute h-[22rem] w-[22rem] rounded-full border border-dashed border-blue-200"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 34,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute h-[18rem] w-[18rem] rounded-full border border-blue-100"
            />

            {/* Main Profile Card */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="relative w-[18.5rem] rounded-[28px] border border-slate-100 bg-white/95 p-7 shadow-[0_25px_70px_rgba(15,23,42,0.10)] backdrop-blur-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                    SOFTWARE DEVELOPER
                  </div>

                  <div className="mt-1 display-font text-xl font-extrabold tracking-tight text-slate-900">
                    Tanishka Mandil
                  </div>
                </div>

                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_14px_rgba(37,99,235,0.45)]" />
              </div>

              <div className="mt-7 h-px bg-slate-100" />

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-blue-50 p-4">
                  <div className="display-font text-2xl font-extrabold text-blue-600">
                    8.24
                  </div>

                  <div className="mt-1 text-[9px] font-bold tracking-[0.13em] text-slate-400">
                    CGPA
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="display-font text-xl font-extrabold text-slate-800">
                    CSE
                  </div>

                  <div className="mt-1 text-[9px] font-bold tracking-[0.13em] text-slate-400">
                    2022–2026
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-4">
                <div className="text-[9px] font-bold tracking-[0.15em] text-blue-500">
                  CURRENT ROLE
                </div>

                <div className="mt-1 text-sm font-semibold text-slate-700">
                  Software Developer
                </div>

                <div className="mt-0.5 text-[11px] text-slate-400">
                  V2SK Techno Pvt. Ltd.
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {['React.js', 'SQL', 'ASP.NET'].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[9px] font-semibold text-slate-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Meta */}
        <div className="flex items-center justify-between border-t border-slate-100 py-5 text-[9px] font-bold tracking-[0.15em] text-slate-400">
          <span>BASED IN INDIA</span>

          <a
            href="#about"
            className="transition-colors hover:text-blue-600"
          >
            SCROLL TO EXPLORE ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;