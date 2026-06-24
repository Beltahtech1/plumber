import { useRef } from 'react';
import { Flame, Search, Droplets, Thermometer } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    icon: Flame,
    title: 'Emergency Plumbing',
    description: 'Burst pipes, flooding, gas leaks—our rapid-response team is on call 24/7 to protect your home and family.',
    color: 'bg-emergency-500',
  },
  {
    icon: Search,
    title: 'Leak Detection & Repair',
    description: 'We use advanced tools to locate hidden leaks behind walls and underground, then fix them with minimal disruption.',
    color: 'bg-cyan-500',
  },
  {
    icon: Droplets,
    title: 'Drain Cleaning',
    description: 'Clogged sinks, backed-up toilets, and slow drains. We clear blockages fast and keep them from coming back.',
    color: 'bg-navy-600',
  },
  {
    icon: Thermometer,
    title: 'Water Heater Services',
    description: 'Repairs, replacements, and installations for tank and tankless systems. Get hot water back the same day.',
    color: 'bg-emergency-600',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-24 md:py-32 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-emergency-400 font-semibold text-sm uppercase tracking-wider mb-3"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Professional Services for Every Need
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-navy-300 max-w-2xl mx-auto"
          >
            From urgent repairs to planned installations, we handle every job with the same care and precision.
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-navy-900/60 border border-navy-800 rounded-2xl p-8 md:p-10 hover:border-navy-600 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-3xl`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-navy-300 leading-relaxed flex-grow">{service.description}</p>
                <div className="mt-6 flex items-center gap-2 text-emergency-400 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
