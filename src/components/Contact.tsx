import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Send, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare, 
  Copy, 
  Check, 
  Globe 
} from 'lucide-react';
import { 
  GithubIcon, 
  LinkedinIcon, 
  InstagramIcon, 
  TwitterIcon, 
  DiscordIcon 
} from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { personal, socials } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const socialIcons: Record<string, React.FC<{ className?: string }>> = {
    Github: GithubIcon,
    Linkedin: LinkedinIcon,
    Instagram: InstagramIcon,
    MessageSquare: MessageSquare,
    Discord: DiscordIcon,
    Twitter: TwitterIcon,
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory cosmic confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2c67ed', '#60a5fa', '#a855f7', '#38bdf8', '#ffffff']
        });
      } catch (err) {
        console.error(err);
      }

      // Reset form after a delay
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitted(false);
      }, 6000);
    }, 1200);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c67ed]/15 border border-[#2c67ed]/40 text-[#5b8bf7] text-xs font-mono mb-3"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>TRANSMISI SINYAL</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Hubungi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#2c67ed] drop-shadow-[0_0_20px_rgba(44,103,237,0.5)]">Saya</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base"
          >
            Punya ide proyek, tawaran pekerjaan, atau sekadar ingin menyapa? Kirimkan pesan Anda melalui transmisi di bawah ini!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Details Card */}
            <div className="rounded-3xl p-6 sm:p-8 bg-[#050b1d]/85 border border-[#2c67ed]/30 backdrop-blur-xl shadow-[0_0_30px_rgba(44,103,237,0.2)]">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#2c67ed]" />
                Informasi Kontak
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Saya selalu terbuka untuk berdiskusi mengenai proyek baru, kolaborasi open source, atau peluang karir.
              </p>

              <div className="space-y-4">
                {/* Email Direct */}
                <div className="p-3.5 rounded-2xl bg-[#09122c]/70 border border-slate-800 flex items-center justify-between gap-3 group hover:border-[#2c67ed]/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#2c67ed]/15 border border-[#2c67ed]/30 flex items-center justify-center text-[#5b8bf7]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="text-[11px] text-slate-400 font-mono">Email Address</div>
                      <div className="text-xs sm:text-sm font-semibold text-white truncate max-w-[180px] sm:max-w-[220px]">
                        {personal.email}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={copyEmailToClipboard}
                    className="p-2 rounded-xl bg-white/5 hover:bg-[#2c67ed]/30 text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-2xl bg-[#09122c]/70 border border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2c67ed]/15 border border-[#2c67ed]/30 flex items-center justify-center text-[#5b8bf7]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">Lokasi Base</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {personal.location}
                    </div>
                  </div>
                </div>

                {/* Status Pill */}
                <div className="p-3.5 rounded-2xl bg-[#09122c]/70 border border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">Status Ketersediaan</div>
                    <div className="text-xs sm:text-sm font-semibold text-emerald-300">
                      Open to Work / Freelance
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Channels Grid */}
            <div className="rounded-3xl p-6 sm:p-8 bg-[#050b1d]/85 border border-[#2c67ed]/30 backdrop-blur-xl shadow-[0_0_30px_rgba(44,103,237,0.2)]">
              <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#2c67ed]">#</span>
                Koneksi Sosial & Profil Developer
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {socials.map((social) => {
                  const Icon = socialIcons[social.icon] || Globe;
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-2xl bg-[#09122c]/60 border border-slate-800 hover:border-[#2c67ed]/60 hover:bg-[#0a1538] hover:shadow-[0_0_15px_rgba(44,103,237,0.3)] transition-all flex items-center gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#2c67ed]/15 flex items-center justify-center text-[#5b8bf7] group-hover:bg-[#2c67ed] group-hover:text-white transition-all">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <div className="text-xs font-bold text-white group-hover:text-[#5b8bf7] transition-colors">
                          {social.platform}
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono truncate">
                          {social.username}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 rounded-3xl p-6 sm:p-10 bg-[#050b1d]/85 border border-[#2c67ed]/30 backdrop-blur-xl shadow-[0_0_30px_rgba(44,103,237,0.25)] relative overflow-hidden"
          >
            {/* Background Orb */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2c67ed]/15 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-2xl font-bold text-white mb-2">Kirimkan Pesan</h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-8">
              Isi form berikut untuk memulai percakapan transmisi data langsung.
            </p>

            {/* Success Alert Banner */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-2xl bg-[#2c67ed]/20 border border-[#2c67ed] text-blue-100 flex items-center gap-3 shadow-[0_0_20px_rgba(44,103,237,0.5)]"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-white">Transmisi Berhasil!</span> Terima kasih atas pesan Anda. Saya akan segera merespon sesegera mungkin.
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Name Field */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Nama Lengkap <span className="text-[#2c67ed]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#08102b] border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#2c67ed] focus:ring-1 focus:ring-[#2c67ed] focus:shadow-[0_0_15px_rgba(44,103,237,0.35)] transition-all"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Alamat Email <span className="text-[#2c67ed]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="nama@domain.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#08102b] border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#2c67ed] focus:ring-1 focus:ring-[#2c67ed] focus:shadow-[0_0_15px_rgba(44,103,237,0.35)] transition-all"
                  />
                </div>

              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                  Subjek Pesan
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Misal: Penawaran Kolaborasi Web Project"
                  className="w-full px-4 py-3.5 rounded-xl bg-[#08102b] border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#2c67ed] focus:ring-1 focus:ring-[#2c67ed] focus:shadow-[0_0_15px_rgba(44,103,237,0.35)] transition-all"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                  Pesan Anda <span className="text-[#2c67ed]">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Ceritakan detail proyek atau topik yang ingin didiskusikan..."
                  className="w-full px-4 py-3.5 rounded-xl bg-[#08102b] border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#2c67ed] focus:ring-1 focus:ring-[#2c67ed] focus:shadow-[0_0_15px_rgba(44,103,237,0.35)] transition-all resize-none"
                />
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#2c67ed] via-[#3b82f6] to-[#1d4ed8] hover:from-[#3b82f6] hover:to-[#2563eb] shadow-[0_0_25px_rgba(44,103,237,0.6)] hover:shadow-[0_0_35px_rgba(44,103,237,0.8)] transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed border border-blue-400/30"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Mentransmisikan Sinyal...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Luncurkan Pesan</span>
                  </>
                )}
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
