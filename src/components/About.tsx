import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Sparkles,
  Award,
  MapPin,
  Mail,
  Calendar,
  CheckCircle2,
  Rocket,
  Code2,
  GitCommit,
  Star,
  ChevronRight,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const About: React.FC = () => {
  const { personal, education, experiences, statistics } = portfolioData;
  const [activeTab, setActiveTab] = useState<"experience" | "education">(
    "experience",
  );

  const statIcons = {
    Rocket: Rocket,
    Code2: Code2,
    GitCommit: GitCommit,
    Sparkles: Sparkles,
  };

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>KOSMIK & BIOGRAFI</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Tentang{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#2c67ed] drop-shadow-[0_0_20px_rgba(44,103,237,0.5)]">
              Saya
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base"
          >
            Mengenal lebih dekat latar belakang, rekam jejak akademis,
            perjalanan organisasi, serta pencapaian prestasi saya.
          </motion.p>
        </div>

        {/* Top Section: Profile Card & Bio narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Profile Card with Cosmic Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-[#050b1d]/80 border border-[#2c67ed]/30 backdrop-blur-xl shadow-[0_0_30px_rgba(44,103,237,0.2)] flex flex-col items-center text-center relative overflow-hidden"
          >
            {/* Ambient Background Glow in Card */}
            <div className="absolute -top-16 -right-16 w-44 h-44 bg-[#2c67ed]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-[#7c3aed]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Glowing Avatar Container */}
            <div className="relative mb-6">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-tr from-[#2c67ed] via-[#60a5fa] to-[#a855f7] shadow-[0_0_25px_rgba(44,103,237,0.6)]">
                <img
                  src={personal.avatarUrl}
                  alt={personal.name}
                  className="w-full h-full object-cover rounded-full filter brightness-95 contrast-105"
                />
              </div>
              <div className="absolute bottom-1 right-2 w-8 h-8 rounded-full bg-[#0a1435] border-2 border-[#2c67ed] flex items-center justify-center shadow-[0_0_10px_#2c67ed]">
                <Sparkles className="w-4 h-4 text-[#5b8bf7]" />
              </div>
            </div>

            {/* Profile Info */}
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
              {personal.name}
            </h3>
            <p className="text-sm text-[#5b8bf7] font-mono mb-4">
              SMK N 4 Palembang
            </p>

            <div className="w-full space-y-2.5 pt-4 border-t border-slate-800 text-left text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-3 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                <MapPin className="w-4 h-4 text-[#5b8bf7] flex-shrink-0" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                <Mail className="w-4 h-4 text-[#5b8bf7] flex-shrink-0" />
                <span className="truncate">{personal.email}</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-emerald-300 font-medium">
                  {personal.status}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Detailed Bio & Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-[#050b1d]/80 border border-[#2c67ed]/30 backdrop-blur-xl shadow-[0_0_30px_rgba(44,103,237,0.15)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-[#5b8bf7] text-xs font-mono uppercase tracking-wider mb-2">
                <Star className="w-4 h-4" />
                <span>Eksplorasi & Visi</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4"></h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {personal.aboutLong}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-2xl bg-[#09122c]/60 border border-[#2c67ed]/20">
                  <div className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2c67ed]" />
                    Pendidikan Keahlian
                  </div>
                  <p className="text-xs text-slate-400">
                    Rekayasa Perangkat Lunak (RPL) di SMK Negeri 4 Palembang
                    (2024 - 2027).
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#09122c]/60 border border-[#7c3aed]/20">
                  <div className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                    Pengalaman Organisasi
                  </div>
                  <p className="text-xs text-slate-400">
                    Aktif di Organisasi Paskibra dengan 6 pencapaian kejuaraan
                    tingkat kompetisi LTBB & Foker.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-mono">
                Lokasi: Palembang, Sumatera Selatan
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5b8bf7] hover:text-white transition-colors"
              >
                <span>Ajak Kolaborasi</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Project & Career Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {statistics.map((stat, idx) => {
            const IconComp =
              statIcons[stat.icon as keyof typeof statIcons] || Sparkles;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-5 sm:p-6 rounded-2xl bg-[#060e24]/90 border border-[#2c67ed]/25 hover:border-[#2c67ed]/60 backdrop-blur-md shadow-[0_0_20px_rgba(44,103,237,0.15)] hover:shadow-[0_0_25px_rgba(44,103,237,0.35)] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2c67ed]/15 border border-[#2c67ed]/30 flex items-center justify-center text-[#5b8bf7] mb-3 group-hover:scale-110 transition-transform">
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-4xl font-extrabold text-white font-mono tracking-tight mb-1 flex items-baseline gap-0.5">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                    {stat.value}
                  </span>
                  <span className="text-[#2c67ed] text-xl sm:text-2xl">
                    {stat.suffix}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 leading-tight">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Tabs: Riwayat Pendidikan & Pengalaman */}
        <div className="rounded-3xl p-6 sm:p-10 bg-[#050b1d]/85 border border-[#2c67ed]/30 backdrop-blur-xl shadow-[0_0_30px_rgba(44,103,237,0.2)]">
          {/* Tab Selection Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-[#2c67ed]" />
                Rekam Jejak & Perjalanan
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Eksplorasi pengalaman organisasi Paskibra dan pendidikan formal.
              </p>
            </div>

            {/* Toggle Button Pills */}
            <div className="flex items-center p-1 rounded-2xl bg-[#09122c] border border-[#2c67ed]/30">
              <button
                onClick={() => setActiveTab("experience")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "experience"
                    ? "bg-[#2c67ed] text-white shadow-[0_0_15px_rgba(44,103,237,0.7)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Pengalaman Organisasi ({experiences.length})</span>
              </button>

              <button
                onClick={() => setActiveTab("education")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "education"
                    ? "bg-[#2c67ed] text-white shadow-[0_0_15px_rgba(44,103,237,0.7)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Pendidikan ({education.length})</span>
              </button>
            </div>
          </div>

          {/* Tab Content: Experience Timeline */}
          {activeTab === "experience" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-0.5 before:bg-gradient-to-b before:from-[#2c67ed] before:via-[#3b82f6]/40 before:to-transparent"
            >
              {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-8 sm:pl-10 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-1.5 sm:left-2.5 top-1.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#030712] border-2 border-[#2c67ed] group-hover:bg-[#2c67ed] group-hover:shadow-[0_0_10px_#2c67ed] transition-all" />

                  <div className="p-5 sm:p-6 rounded-2xl bg-[#09122c]/50 border border-slate-800 hover:border-[#2c67ed]/50 transition-all hover:bg-[#09122c]/80">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                        {exp.role}
                      </h4>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono bg-[#2c67ed]/15 text-[#5b8bf7] border border-[#2c67ed]/30">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm text-slate-300 font-medium mb-3 flex items-center gap-2">
                      <span className="text-white font-semibold">
                        {exp.company}
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400">{exp.location}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements Badges */}
                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      <div className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 mb-2">
                        <Award className="w-4 h-4 text-yellow-400" />
                        <span>Prestasi yang Didapat:</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {exp.technologies.map((achievement, i) => (
                          <div
                            key={i}
                            className="px-3 py-2 rounded-xl text-xs font-semibold bg-[#2c67ed]/10 text-blue-200 border border-[#2c67ed]/30 flex items-center gap-2 shadow-[0_0_10px_rgba(44,103,237,0.15)]"
                          >
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Tab Content: Education Timeline */}
          {activeTab === "education" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-0.5 before:bg-gradient-to-b before:from-[#2c67ed] before:via-[#3b82f6]/40 before:to-transparent"
            >
              {education.map((edu) => (
                <div key={edu.id} className="relative pl-8 sm:pl-10 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-1.5 sm:left-2.5 top-1.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#030712] border-2 border-[#7c3aed] group-hover:bg-[#7c3aed] group-hover:shadow-[0_0_10px_#7c3aed] transition-all" />

                  <div className="p-5 sm:p-6 rounded-2xl bg-[#09122c]/50 border border-slate-800 hover:border-[#7c3aed]/50 transition-all hover:bg-[#09122c]/80">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {edu.degree}
                      </h4>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/15 text-purple-300 border border-purple-500/30">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm text-blue-300 font-semibold mb-3">
                      {edu.institution}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Highlights (if any) */}
                    {edu.highlights && edu.highlights.length > 0 && (
                      <div className="space-y-1.5 pt-3 mt-3 border-t border-slate-800/80">
                        <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mb-1">
                          <Award className="w-3.5 h-3.5 text-yellow-400" />
                          <span>Pencapaian & Aktivitas:</span>
                        </div>
                        {edu.highlights.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-xs text-slate-300"
                          >
                            <span className="text-[#2c67ed] mt-0.5">✦</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
