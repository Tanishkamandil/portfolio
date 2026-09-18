import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    period: '2022 – 2026',
    degree: 'B.Tech in Computer Science and Engineering',
    institute:
      'Shri Ram College of Engineering and Management, Banmore',
    score: 'CGPA 8.24 / 10',
  },
  {
    period: '2022',
    degree: 'XIIth – Senior Secondary',
    institute:
      'Genius Higher Secondary School, Morena · M.P.B.S.E. Board',
    score: '82%',
  },
  {
    period: '2020',
    degree: 'Xth – Secondary School',
    institute:
      'Kanyalok Higher Secondary School, Morena · M.P.B.S.E. Board',
    score: '93.3%',
  },
];

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="section-shell bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-10 flex items-center gap-4">
          <span className="text-[10px] font-bold tracking-[0.22em] text-blue-600">
            EDUCATION
          </span>

          <span className="h-px w-14 bg-blue-200" />
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[0.68fr_1.32fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <h2 className="display-font max-w-md text-5xl font-extrabold leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-6xl">
              Academic
              <span className="block text-blue-600">
                foundation.
              </span>
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-500 sm:text-base">
              A Computer Science and Engineering background with consistent
              academic performance and a strong foundation for software
              development.
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="relative space-y-4">
            <div className="absolute left-[7px] top-5 bottom-5 hidden w-px bg-slate-200 sm:block" />

            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="relative sm:pl-9"
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-0 top-7 hidden h-4 w-4 rounded-full border-4 border-white sm:block ${
                    index === 0
                      ? 'bg-blue-600 shadow-[0_0_0_3px_rgba(37,99,235,0.12)]'
                      : 'bg-slate-300'
                  }`}
                />

                <div
                  className={`rounded-[26px] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                    index === 0
                      ? 'border-blue-100 bg-blue-50/60'
                      : 'border-slate-100 bg-white'
                  }`}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div
                        className={`text-[9px] font-bold tracking-[0.16em] ${
                          index === 0
                            ? 'text-blue-600'
                            : 'text-slate-400'
                        }`}
                      >
                        {item.period}
                      </div>

                      <h3 className="display-font mt-2 text-xl font-extrabold leading-tight tracking-[-0.02em] text-slate-900 sm:text-2xl">
                        {item.degree}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {item.institute}
                      </p>
                    </div>

                    <span
                      className={`w-fit shrink-0 rounded-full px-3 py-1.5 text-[9px] font-bold tracking-[0.1em] ${
                        index === 0
                          ? 'border border-blue-100 bg-white text-blue-600'
                          : 'border border-slate-200 bg-slate-50 text-slate-500'
                      }`}
                    >
                      {item.score}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;