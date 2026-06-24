import { useEffect, useRef } from 'react';
import { Phone, ArrowRight, Clock, Shield, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="https://videos.pexels.com/video-files/2040075/2040075-uhd_2560_1440_30fps.mp4" type="video/mp4" />
      </video>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950/90 via-navy-900/85 to-navy-800/80" />
      
      {/* Floating decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emergency-500/10 rounded-full blur-3xl hero-blob" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl hero-blob" style={{ animationDelay: '-4s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emergency-500/15 border border-emergency-500/25 text-emergency-400 text-sm font-medium mb-8"
          >
            <Clock className="w-4 h-4" />
            24/7 Emergency Service Available
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
          >
            Fast. Reliable.{' '}
            <span className="text-emergency-500">Plumbing</span>{' '}
            You Can Trust.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-navy-200 leading-relaxed mb-10 max-w-2xl"
          >
            From emergency repairs to routine maintenance, our licensed technicians arrive fast, fix it right, and keep your home running smoothly—day or night.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emergency-500 hover:bg-emergency-600 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-emergency-500/25"
            >
              Book Online
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm border border-white/20 transition-all duration-200 hover:scale-105"
            >
              <Phone className="w-5 h-5 text-emergency-400" />
              (123) 456-7890
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 text-sm text-navy-300"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span>Fully Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-cyan-400" />
              <span>Same-Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>30 Min Response Time</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
