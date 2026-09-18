import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'Prescripto',
    type: 'DOCTOR APPOINTMENT PLATFORM',
    description:
      'A full-stack healthcare platform with role-based workflows for Patients, Doctors and Admins, combining appointment management, REST APIs, secure payments and cloud media handling.',
    stack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'Cloudinary',
      'Razorpay',
    ],
    gradient: 'from-blue-50 via-white to-sky-50',
    github: 'https://github.com/Tanishkamandil/Doctor-Booking-App',
    liveDemo: 'https://doctor-booking-app-frontend.vercel.app/',
    adminDemo: 'https://doctor-booking-app-admin.vercel.app/',
  },
  {
    number: '02',
    title: 'QuickGPT',
    type: 'AI CONTENT & IMAGE GENERATOR',
    description:
      'A full-stack AI-powered application for generating smart text responses and creative content, with authentication and a Stripe-based credit management system.',
    stack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Gemini AI',
      'OpenAI',
      'ImageKit',
      'Stripe',
      'Tailwind CSS',
    ],
    gradient: 'from-indigo-50 via-white to-blue-50',
    github: 'https://github.com/Tanishkamandil/QuickGPT',
    liveDemo: 'https://quick-gpt-ruby-five.vercel.app/',
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="section-shell bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <span className="text-[10px] font-bold tracking-[0.22em] text-blue-600">
                02 / SELECTED WORK
              </span>

              <span className="h-px w-14 bg-blue-200" />
            </div>

            <h2 className="display-font text-5xl font-extrabold tracking-[-0.05em] text-slate-950 sm:text-6xl">
              Projects I&apos;ve
              <span className="text-blue-600"> built.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-slate-400 md:text-right">
            Full-stack applications built with modern technologies, real-world
            workflows and deployed for live use.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                margin: '-60px',
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className={`group relative overflow-hidden rounded-[30px] border border-slate-100 bg-gradient-to-br ${project.gradient} p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl sm:p-9`}
            >
              {/* Background Number */}
              <div className="absolute right-7 top-3 display-font text-7xl font-extrabold tracking-[-0.08em] text-slate-200/60 sm:text-8xl">
                {project.number}
              </div>

              {/* Soft Hover Glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-blue-100/50 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Project Type */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[10px] font-bold tracking-[0.18em] text-blue-600">
                    {project.type}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-blue-300" />

                  <span className="text-[9px] font-bold tracking-[0.14em] text-slate-400">
                    PROJECT {project.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="display-font mt-4 text-4xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-5xl">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-[10px] font-bold tracking-wide text-slate-500 shadow-sm transition-all duration-200 group-hover:border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {/* Live Demo */}
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-[10px] font-bold tracking-[0.1em] text-white shadow-md shadow-blue-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
                  >
                    <ExternalLink size={13} strokeWidth={2} />
                    LIVE DEMO
                  </a>

                  {/* GitHub */}
                 <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-[10px] font-bold tracking-[0.1em] text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
>
  <i className="fa-brands fa-github text-base"></i>
  
</a>

                  {/* Admin Panel - only for Prescripto */}
                  {project.adminDemo && (
                    <a
                      href={project.adminDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2.5 text-[10px] font-bold tracking-[0.1em] text-blue-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-100"
                    >
                      <ExternalLink size={13} strokeWidth={2} />
                      ADMIN PANEL
                    </a>
                  )}
                </div>

                {/* Deployment Status */}
                <div className="mt-6 flex items-center gap-2 text-[9px] font-semibold tracking-[0.12em] text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                  LIVE &amp; DEPLOYED
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;