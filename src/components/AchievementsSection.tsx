import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    number: '01',
    title: 'Research Paper',
    text: 'Co-authored a research paper on Comparative Study of Machine Learning Algorithms for Brain Tumor Detection.',
  },
  {
    number: '02',
    title: 'Leadership',
    text: 'Joint Secretary of the XD Coding Club, SRCEM since August 2024.',
  },
  {
    number: '03',
    title: 'HackerRank Java',
    text: 'Achieved 5-star rating and Golden Badge in Java on HackerRank.',
  },
  {
    number: '04',
    title: 'XD-MSAR Robot',
    text: 'Contributed to the external design and presentation of the XD-MSAR Robot.',
  },
];

const certifications = [
  'React + Redux',
  'Node.js, Express.js and MongoDB',
  'Generative AI Studio',
  'SQL',
];

export const AchievementsSection: React.FC = () => {
  return (
    <section
      id="achievements"
      className="section-shell bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="blue-glow -right-40 top-20 opacity-25" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="mb-10 flex items-center gap-4">
          <span className="text-[10px] font-bold tracking-[0.22em] text-blue-600">
             ACHIEVEMENTS
          </span>

          <span className="h-px w-14 bg-blue-200" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <h2 className="display-font max-w-md text-5xl font-extrabold leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-6xl">
              Beyond the
              <span className="block text-blue-600">code.</span>
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-500 sm:text-base">
              A few milestones from my academic journey, leadership
              experience, technical learning and project contributions.
            </p>
          </motion.div>

          {/* Achievement Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-bold tracking-[0.16em] text-blue-500">
                    {achievement.number}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600 ring-1 ring-blue-100 transition-transform duration-300 group-hover:scale-105">
                    ↗
                  </span>
                </div>

                <h3 className="display-font mt-5 text-xl font-extrabold tracking-tight text-slate-900">
                  {achievement.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {achievement.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 rounded-[28px] border border-blue-100 bg-blue-50/70 p-6 sm:p-7"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-[10px] font-bold tracking-[0.18em] text-blue-600">
                CERTIFICATIONS
              </div>

              <p className="mt-1 text-xs text-slate-400">
                Courses and technical certifications completed.
              </p>
            </div>

            <div className="h-px flex-1 bg-blue-100 sm:ml-6" />
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {certifications.map((certification) => (
              <span
                key={certification}
                className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-600 shadow-sm transition-colors hover:border-blue-200 hover:text-blue-600"
              >
                {certification}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;