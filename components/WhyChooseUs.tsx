import { useRef } from 'react';
import { ShieldCheck, Timer, DollarSign, Wrench } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const features = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    description: 'Every technician is fully licensed and insured. Your property is always protected, and our work is guaranteed.',
  },
  {
    icon: Timer,
    title: 'Fast Response Time',
    description: 'We know plumbing emergencies cannot wait. Our team arrives within 30 minutes or your scheduled window.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden fees. No surprise charges. We provide upfront, honest quotes before any work begins.',
  },
  {
    icon: Wrench,
    title: 'Expert Technicians',
    description: 'Our team brings years of hands-on experience and ongoing training to solve even the toughest problems.',
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why-us" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-emergency-500 font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Why Homeowners Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight"
          >
            Built on Trust, Speed, and Quality
          </motion.h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-navy-50/60 rounded-2xl p-8 border border-navy-100/60 hover:border-emergency-300/40 transition-all duration-300 hover:shadow-xl hover:shadow-emergency-500/5 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-navy-900 flex items-center justify-center mb-6 group-hover:bg-emergency-500 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-emergency-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{feature.title}</h3>
              <p className="text-navy-500 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
