import { useState, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { supabase } from '../lib/supabase';

const serviceOptions = [
  'Emergency Plumbing',
  'Leak Detection & Repair',
  'Drain Cleaning',
  'Water Heater Services',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service_needed: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const { error: submitError } = await supabase
      .from('contact_requests')
      .insert({
        name: form.name,
        phone: form.phone,
        service_needed: form.service_needed,
        message: form.message,
      });

    if (submitError) {
      setError('Something went wrong. Please try again or call us directly.');
    } else {
      setSuccess(true);
      setForm({ name: '', phone: '', service_needed: '', message: '' });
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-emergency-500 font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight"
          >
            Service Area & Contact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-navy-500 max-w-2xl mx-auto"
          >
            Serving homes and businesses across the metro area. Reach out today and we'll be there fast.
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-navy-50/60 rounded-2xl border border-navy-100/60">
                <div className="w-12 h-12 rounded-xl bg-emergency-500 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-900 mb-1">Call Us</p>
                  <a href="tel:+1234567890" className="text-navy-600 hover:text-emergency-500 transition-colors font-medium">
                    (254) 1141-41192
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-navy-50/60 rounded-2xl border border-navy-100/60">
                <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-900 mb-1">Email</p>
                  <a href="mailto:info@beltahplumbing.com" className="text-navy-600 hover:text-emergency-500 transition-colors font-medium">
                    info@beltahplumbing.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-navy-50/60 rounded-2xl border border-navy-100/60">
                <div className="w-12 h-12 rounded-xl bg-navy-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-900 mb-1">Address</p>
                  <p className="text-navy-600 font-medium">
                    123 Main Street<br />
                    Metro City, ST 12345
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-navy-50/60 rounded-2xl border border-navy-100/60">
                <div className="w-12 h-12 rounded-xl bg-emergency-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-900 mb-1">Hours</p>
                  <p className="text-navy-600 font-medium">
                    Mon–Sat: 8am–8pm<br />
                    <span className="text-emergency-500 font-semibold">Emergency: 24/7</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden border border-navy-100/60 bg-navy-50">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-100 to-navy-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-emergency-500/15 flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-8 h-8 text-emergency-500" />
                  </div>
                  <p className="text-navy-700 font-semibold text-lg">Metro Area Coverage</p>
                  <p className="text-navy-500 text-sm mt-1">Serving 25-mile radius from downtown</p>
                </div>
              </div>
              {/* Decorative grid overlay */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'linear-gradient(#334e68 1px, transparent 1px), linear-gradient(90deg, #334e68 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
              {/* Animated pulse on location */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-emergency-500 rounded-full animate-ping" />
                <div className="w-4 h-4 bg-emergency-500 rounded-full absolute inset-0" />
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-navy-50/60 rounded-2xl p-8 md:p-10 border border-navy-100/60">
              <h3 className="text-2xl font-bold text-navy-950 mb-2">Request a Service</h3>
              <p className="text-navy-500 mb-8">Fill out the form below and we'll get back to you within 15 minutes.</p>

              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-navy-900 mb-2">Request Received!</h4>
                  <p className="text-navy-500">We'll be in touch shortly. For emergencies, call us now.</p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-6 text-emergency-500 font-semibold hover:underline"
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy-800 mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-emergency-500/30 focus:border-emergency-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-800 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="(555) 123-4567"
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-emergency-500/30 focus:border-emergency-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy-800 mb-2">Service Needed</label>
                    <select
                      value={form.service_needed}
                      onChange={(e) => setForm({ ...form, service_needed: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-emergency-500/30 focus:border-emergency-500 transition-all appearance-none"
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy-800 mb-2">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe your issue or what you need..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-emergency-500/30 focus:border-emergency-500 transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-xl">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-emergency-500 hover:bg-emergency-600 disabled:bg-emergency-300 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-emergency-500/20"
                  >
                    {loading ? (
                      <span className="inline-flex items-center gap-2">
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Request
                      </>
                    )}
                  </button>

                  <p className="text-xs text-navy-400 text-center">
                    By submitting, you agree to our service terms. We respect your privacy.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
