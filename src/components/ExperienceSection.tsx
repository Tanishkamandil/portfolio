import React from 'react';
import { motion } from 'framer-motion';

const currentWork = [
  'Contributing to an end-to-end Manufacturing Execution System (MES) covering workflows from serial number generation and packaging to dispatch, tracking and warranty management.',
  'Developing responsive React.js modules with dynamic forms, validations, tables and workflow features for enterprise manufacturing applications.',
  'Integrating the Functionality of binding Live Thermal Printers of systems for Smooth generation of lables and using Postman for testing, validation and troubleshooting.',
];

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="section-shell bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="blue-glow -left-40 top-20 opacity-25" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="mb-10 flex items-center gap-4">
          <span className="text-[10px] font-bold tracking-[0.22em] text-blue-600">
             EXPERIENCE
          </span>

          <span className="h-px w-14 bg-blue-200" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr]">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <h2 className="display-font max-w-md text-5xl font-extrabold leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-6xl">
              Growing through
              <span className="block text-blue-600">
                real work.
              </span>
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-500 sm:text-base">
              Hands-on experience developing enterprise web applications,
              responsive React interfaces and SQL-backed workflows in a
              professional environment.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {['React.js', 'SQL', 'Postman', 'MES'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[9px] font-bold tracking-[0.08em] text-slate-500"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Side */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[7px] top-3 bottom-3 hidden w-px bg-slate-200 sm:block" />

            <div className="space-y-5">
              {/* Current Role */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative sm:pl-9"
              >
                <div className="absolute left-0 top-7 hidden h-4 w-4 rounded-full border-4 border-white bg-blue-600 shadow-[0_0_0_3px_rgba(37,99,235,0.12)] sm:block" />

                <div className="rounded-[28px] border border-blue-100 bg-blue-50/60 p-6 shadow-sm sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="text-[9px] font-bold tracking-[0.18em] text-blue-600">
                        CURRENT ROLE
                      </div>

                      <h3 className="display-font mt-2 text-2xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-3xl">
                        Software Developer
                      </h3>

                      <p className="mt-1 text-sm font-semibold text-slate-500">
                        V2SK Techno Pvt. Ltd.
                      </p>
                    </div>

                    <span className="w-fit rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[9px] font-bold tracking-[0.1em] text-slate-500">
                      JUL 2026 — PRESENT
                    </span>
                  </div>

                  <div className="mt-6 space-y-3">
                    {currentWork.map((item) => (
                      <div
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-slate-500"
                      >
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Previous Internship */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative sm:pl-9"
              >
                <div className="absolute left-0 top-7 hidden h-4 w-4 rounded-full border-4 border-white bg-slate-300 sm:block" />

                <div className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                        PREVIOUS EXPERIENCE
                      </div>

                      <h3 className="display-font mt-2 text-2xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-3xl">
                        Software Development Intern
                      </h3>

                      <p className="mt-1 text-sm font-semibold text-slate-500">
                        V2SK Techno Pvt. Ltd.
                      </p>
                    </div>

                    <span className="w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[9px] font-bold tracking-[0.1em] text-slate-500">
                      AUG 2025 — SEP 2025
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-500">
                    Contributed to MES modules by implementing features and
                    improving existing functionality, while developing
                    responsive React.js components and integrating frontend
                    modules with SQL databases.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {['React.js', 'SQL'].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[9px] font-semibold text-slate-500"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;