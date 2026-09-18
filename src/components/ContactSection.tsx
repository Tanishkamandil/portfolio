import React from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const contactLinks = [
    {
      label: 'EMAIL',
      value: 'tanishkamandil77@gmail.com',
      href: 'mailto:tanishkamandil77@gmail.com',
    },
    {
      label: 'LINKEDIN',
      value: 'View LinkedIn Profile',
      href: 'https://www.linkedin.com/in/tanishka-mandil-8779a5271/',
    },
    {
      label: 'GITHUB',
      value: 'View GitHub Profile',
      href: 'https://github.com/Tanishkamandil',
    },
  ];

  return (
    <footer
      id="contact"
      className="section-shell bg-slate-950 py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 75% 20%, rgba(59,130,246,0.32), transparent 28%), radial-gradient(circle at 20% 80%, rgba(96,165,250,0.18), transparent 30%)',
        }}
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="mb-10 flex items-center gap-4">
          <span className="text-[10px] font-bold tracking-[0.22em] text-blue-300">
            CONTACT
          </span>

          <span className="h-px w-14 bg-blue-800" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className="mb-5 text-[10px] font-bold tracking-[0.18em] text-blue-400">
              OPEN TO OPPORTUNITIES
            </div>

            <h2 className="display-font max-w-2xl text-5xl font-extrabold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              LET&apos;S BUILD
              <span className="block text-blue-400">
                SOMETHING GREAT.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              I&apos;m interested in full-stack and web development
              opportunities where I can build useful products, solve real
              problems and continue growing as a software developer.
            </p>

            <a
              href="mailto:tanishkamandil77@gmail.com"
              className="mt-8 inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-xs font-bold tracking-[0.1em] text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl"
            >
              GET IN TOUCH ↗
            </a>
          </motion.div>

          {/* Right Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="rounded-[30px] border border-white/10 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-xl sm:p-8"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-500">
                  CONTACT DETAILS
                </div>

                <div className="mt-1 display-font text-xl font-extrabold text-white">
                  Tanishka Mandil
                </div>
              </div>

              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.55)]" />
            </div>

            <div className="mt-5 space-y-3">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'EMAIL' ? undefined : '_blank'}
                  rel={item.label === 'EMAIL' ? undefined : 'noreferrer'}
                  className="group block rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.07]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-[9px] font-bold tracking-[0.16em] text-slate-500">
                        {item.label}
                      </div>

                      <div className="mt-1 text-sm font-semibold text-slate-200 transition-colors group-hover:text-white">
                        {item.value}
                      </div>
                    </div>

                    <span className="text-sm text-slate-500 transition-all group-hover:translate-x-1 group-hover:text-blue-300">
                      ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* <div className="mt-5 rounded-2xl border border-blue-400/10 bg-blue-500/[0.06] p-4">
              <div className="text-[9px] font-bold tracking-[0.16em] text-blue-300">
                CURRENTLY
              </div>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                Software Developer at V2SK Techno Pvt. Ltd.
              </p>
            </div> */}
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-20 flex flex-col gap-3 border-t border-white/10 pt-6 text-[9px] font-bold tracking-[0.15em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} TANISHKA MANDIL
          </span>

          <span>
            REACT · FULL-STACK DEVELOPMENT · BUILT WITH INTENT
          </span>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;