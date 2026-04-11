import { motion } from 'motion/react';
import { Phone, Mail, Send, ChevronDown, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useState, useRef, FormEvent, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedService, setSelectedService] = useState('');

  // Initialize EmailJS v4
  useEffect(() => {
    console.log("🔌 Initializing EmailJS with Public Key: hJBjQFSH_OfLDgAPL");
    emailjs.init('hJBjQFSH_OfLDgAPL');
  }, []);

  // Handle query parameter for service
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      setSelectedService(serviceParam);
    }
  }, [searchParams]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(formRef.current);
    
    // Exact template parameters as requested
    const templateParams = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
    };

    console.log("📧 Sending with params:", templateParams);

    try {
      const result = await emailjs.send(
        "service_q8o7byd",
        "template_o20iu48",
        templateParams
      );
      
      console.log("✅ EmailJS Success:", result.status, result.text);
      setSubmitStatus('success');
      formRef.current.reset();
      setSelectedService('');
    } catch (error) {
      console.error('❌ EmailJS Error Details:', {
        error,
        status: (error as any)?.status,
        text: (error as any)?.text,
        message: (error as any)?.message
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <Helmet>
        <title>Contact | Aqua-Environs Construction</title>
        <meta name="description" content="Get in touch with Aqua-Environs Construction for your next natural pool or habitat project. Serving the USA and New Zealand." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-serif text-forest mb-8">Get In Touch</h1>
          <div className="w-24 h-1 bg-gold-accent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <div className="space-y-12">
              <div>
                <h3 className="text-gold-accent uppercase tracking-widest text-xs font-bold mb-6">Our Offices</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-serif text-forest mb-2">Sacramento, USA</h4>
                    <p className="text-forest/60 text-sm leading-relaxed">
                      Aqua-Environs Construction LLC<br />
                      California, United States
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-forest mb-2">Auckland, NZ</h4>
                    <p className="text-forest/60 text-sm leading-relaxed">
                      Aqua-Environs Construction Ltd.<br />
                      P.O. Box 78-322, Auckland
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-gold-accent uppercase tracking-widest text-xs font-bold mb-6">Direct Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-earth-beige flex items-center justify-center rounded-full shrink-0">
                      <Phone className="w-5 h-5 text-teal-aqua" />
                    </div>
                    <div>
                      <p className="text-xs text-forest/40 uppercase tracking-widest font-bold mb-1">Phone Numbers</p>
                      <p className="text-forest">+1 (916) 305-1373 (USA)</p>
                      <p className="text-forest">+1 (253) 236-6615 (USA)</p>
                      <p className="text-forest">+64 27 347 8338 (NZ)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-earth-beige flex items-center justify-center rounded-full shrink-0">
                      <Mail className="w-5 h-5 text-teal-aqua" />
                    </div>
                    <div>
                      <p className="text-xs text-forest/40 uppercase tracking-widest font-bold mb-1">Email Addresses</p>
                      <p className="text-forest">darin@aquaenvirons.com</p>
                      <p className="text-forest">aquaenvironsconstructionllc@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-earth-beige/20 p-8 md:p-12 rounded-sm"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-forest/60 mb-2">Name</label>
                  <input 
                    required
                    name="name"
                    type="text" 
                    className="w-full bg-white border border-gray-100 p-4 focus:outline-none focus:border-teal-aqua transition-colors" 
                    placeholder="Your Name" 
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-forest/60 mb-2">Email</label>
                  <input 
                    required
                    name="email"
                    type="email" 
                    className="w-full bg-white border border-gray-100 p-4 focus:outline-none focus:border-teal-aqua transition-colors" 
                    placeholder="your@email.com" 
                  />
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs uppercase tracking-widest font-bold text-forest/60 mb-2">Service Interested In</label>
                <div className="relative">
                  <select 
                    required
                    name="service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-white border border-gray-100 p-4 focus:outline-none focus:border-teal-aqua transition-colors appearance-none pr-12"
                  >
                    <option value="">Select a service...</option>
                    <option value="Natural Swimming Ponds">Natural Swimming Ponds</option>
                    <option value="Lakes & Waterways">Lakes & Waterways</option>
                    <option value="Water & Fire Features">Water & Fire Features</option>
                    <option value="Habitats & Life Support">Habitats & Life Support</option>
                    <option value="Remediation & Restoration">Remediation & Restoration</option>
                    <option value="Becoming a Partner">Becoming a Partner</option>
                    <option value="Other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-forest/40 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-forest/60 mb-2">Message</label>
                <textarea 
                  required
                  name="message"
                  rows={6} 
                  className="w-full bg-white border border-gray-100 p-4 focus:outline-none focus:border-teal-aqua transition-colors" 
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-green-50 text-green-700 border border-green-100 rounded-sm"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <p className="text-sm font-medium">Thank you! Your message has been sent successfully.</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-red-50 text-red-700 border border-red-100 rounded-sm"
                >
                  <AlertCircle className="w-5 h-5" />
                  <p className="text-sm font-medium">Something went wrong. Please try again or call us directly.</p>
                </motion.div>
              )}

              <button 
                disabled={isSubmitting}
                type="submit"
                className="w-full py-5 bg-forest text-white uppercase tracking-[0.2em] text-sm font-bold hover:bg-teal-aqua transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Sending... <Loader2 className="w-4 h-4 animate-spin" /></>
                ) : (
                  <>Send Message <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
