import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      value: '8.24',
      label: 'CGPA',
      subtext: 'B.Tech CSE · 2022–2026',
    },
    {
      value: 'REACT.JS',
      label: 'CURRENT WORK',
      subtext: 'Responsive Enterprise Applications',
    },
    {
      value: 'MES',
      label: 'DOMAIN',
      subtext: 'Manufacturing & Industrial Automation',
    },
    {
      value: 'FULL-STACK',
      label: 'CAREER FOCUS',
      subtext: 'Web & Product Development',
    },
  ];

  return (
    <section
      id="about"
      className="section-shell bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="blue-glow -left-44 top-10 opacity-30" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="mb-10 flex items-center gap-4">
          <span className="text-[10px] font-bold tracking-[0.22em] text-blue-600">
            ABOUT ME
          </span>

          <span className="h-px w-14 bg-blue-200" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <h2 className="display-font max-w-2xl text-4xl font-extrabold leading-[1.03] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
              Building practical
              <span className="block text-blue-600">
                web applications.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              I am a Computer Science and Engineering graduate with hands-on
              experience in web development, building responsive interfaces
              and working with React.js, Node.js, SQL and MongoDB.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              I currently work at V2SK Techno Pvt. Ltd. on enterprise
              applications within the Manufacturing Execution System (MES)
              domain, contributing to practical, data-driven workflows and
              responsive web interfaces.
            </p>

            {/* Areas of Interest */}
            <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-[10px] font-bold tracking-[0.12em] text-slate-400">
              <span>FULL-STACK DEVELOPMENT</span>
              <span className="text-blue-300">•</span>
              <span>WEB DEVELOPMENT</span>
              <span className="text-blue-300">•</span>
              <span>PROBLEM SOLVING</span>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: 0.08,
            }}
            className="grid gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                className="group rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div
                      className={`display-font font-extrabold tracking-tight text-slate-900 ${
                        item.value === 'FULL-STACK' || item.value === 'REACT.JS'
                          ? 'text-xl sm:text-2xl'
                          : 'text-2xl sm:text-3xl'
                      }`}
                    >
                      {item.value}
                    </div>

                    <div className="mt-1 text-[9px] font-bold tracking-[0.14em] text-blue-500">
                      {item.label}
                    </div>
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600 ring-1 ring-blue-100 transition-transform duration-300 group-hover:scale-105">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <p className="mt-3 text-xs font-medium text-slate-400">
                  {item.subtext}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;