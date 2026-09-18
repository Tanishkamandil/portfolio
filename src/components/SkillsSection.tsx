import React from 'react';
import { motion } from 'framer-motion';

const groups = [
  {
    number: '01',
    title: 'PROGRAMMING',
    description: 'Core languages and web fundamentals.',
    items: ['HTML', 'CSS', 'JavaScript', 'Java', 'C#', 'ASP.NET'],
  },
  {
    number: '02',
    title: 'FRONTEND',
    description: 'Building responsive and reusable interfaces.',
    items: ['React.js', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    number: '03',
    title: 'BACKEND',
    description: 'Developing APIs and server-side application logic.',
    items: ['Node.js', 'Express.js'],
  },
  {
    number: '04',
    title: 'DATABASE',
    description: 'Working with application data and database systems.',
    items: ['SQL', 'MongoDB'],
  },
  {
    number: '05',
    title: 'TOOLS',
    description: 'Development, API testing and database tools.',
    items: ['Postman', 'SSMS'],
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="section-shell bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="blue-glow -right-40 top-20 opacity-25" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="mb-10 flex items-center gap-4">
          <span className="text-[10px] font-bold tracking-[0.22em] text-blue-600">
            TECH STACK
          </span>

          <span className="h-px w-14 bg-blue-200" />
        </div>

        {/* Heading */}
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="display-font max-w-2xl text-5xl font-extrabold leading-[1] tracking-[-0.05em] text-slate-950 sm:text-6xl"
          >
            Technologies I
            <span className="block text-blue-600">
              work with.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="max-w-xl text-sm leading-7 text-slate-500 sm:text-base"
          >
            A practical technology stack spanning frontend, backend and
            database development, with a focus on building responsive and
            full-stack web applications.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              className={`group rounded-[26px] border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-md ${
                index === groups.length - 1
                  ? 'md:col-span-2'
                  : ''
              }`}
            >
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="display-font text-xl font-extrabold tracking-tight text-slate-900">
                    {group.title}
                  </h3>

                  <p className="mt-2 max-w-md text-xs leading-5 text-slate-400">
                    {group.description}
                  </p>
                </div>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[9px] font-bold tracking-[0.1em] text-blue-600 ring-1 ring-blue-100 transition-transform duration-300 group-hover:scale-105">
                  {group.number}
                </span>
              </div>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-[10px] font-semibold text-slate-600 transition-all duration-200 group-hover:border-blue-100 group-hover:bg-blue-50/60 group-hover:text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small Stack Footer */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] font-bold tracking-[0.14em] text-slate-400"
        >
          <span>REACT.JS</span>
          <span className="text-blue-300">•</span>

          <span>NODE.JS</span>
          <span className="text-blue-300">•</span>

          <span>EXPRESS.JS</span>
          <span className="text-blue-300">•</span>

          <span>SQL</span>
          <span className="text-blue-300">•</span>

          <span>MONGODB</span>
        </motion.div> */}
      </div>
    </section>
  );
};

export default SkillsSection;