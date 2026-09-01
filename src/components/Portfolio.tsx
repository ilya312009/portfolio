import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  Layers, 
  Sparkles, 
  ExternalLink, 
  ArrowUpRight,
  Code,
  FileCode,
  Server,
  Database,
  GitBranch,
  Layout,
  Video
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Portfolio: React.FC = () => {
  const { projects, skills } = portfolioData;
  const [mainTab, setMainTab] = useState<'projects' | 'techstack'>('projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Tech stack icon mapping
  const skillIcons: Record<string, React.FC<{ className?: string }>> = {
    Layout: Layout,
    FileCode: FileCode,
    Code: Code,
    Server: Server,
    Database: Database,
    Video: Video,
    GitBranch: GitBranch,
  };

  const techCategories = [
    'Programming & Web',
    'Framework & Database',
    'Tools & Version Control',
    'Design & Creative'
  ];

  return (
    <section id="portfolio" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c67ed]/15 border border-[#2c67ed]/40 text-[#5b8bf7] text-xs font-mono mb-3"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>KARYA & TEKNOLOGI</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Portfolio & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#2c67ed] drop-shadow-[0_0_20px_rgba(44,103,237,0.5)]">Keahlian Tech</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base"
          >
            Jelajahi galeri proyek yang telah saya bangun serta daftar persenjataan teknologi (*tech stack*) yang saya kuasai.
          </motion.p>
        </div>

        {/* Primary Tab Switcher: Projects vs Tech Stack */}
        <div className="flex justify-center mb-12">
          <div className="p-1.5 rounded-2xl bg-[#060e24] border border-[#2c67ed]/40 shadow-[0_0_25px_rgba(44,103,237,0.25)] flex items-center gap-2">
            <button
              onClick={() => setMainTab('projects')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                mainTab === 'projects'
                  ? 'bg-gradient-to-r from-[#2c67ed] to-[#1d4ed8] text-white shadow-[0_0_20px_rgba(44,103,237,0.7)] scale-100'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Projects ({projects.length})</span>
            </button>

            <button
              onClick={() => setMainTab('techstack')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                mainTab === 'techstack'
                  ? 'bg-gradient-to-r from-[#2c67ed] to-[#1d4ed8] text-white shadow-[0_0_20px_rgba(44,103,237,0.7)] scale-100'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Tech Stack ({skills.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 1: PROJECTS */}
        {mainTab === 'projects' && (
          <div>
            {/* Projects Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ y: -8 }}
                    className="rounded-3xl bg-[#060e24]/90 border border-[#2c67ed]/25 hover:border-[#2c67ed]/60 overflow-hidden backdrop-blur-xl shadow-[0_0_20px_rgba(44,103,237,0.15)] hover:shadow-[0_0_30px_rgba(44,103,237,0.35)] transition-all flex flex-col group"
                  >
                    {/* Project Image Box */}
                    <div 
                      onClick={() => setSelectedProject(project)}
                      className="relative h-48 sm:h-52 w-full overflow-hidden cursor-pointer bg-slate-900"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060e24] via-[#060e24]/30 to-transparent" />

                      {/* Category Badge */}
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#030712]/80 text-[#5b8bf7] border border-[#2c67ed]/40 backdrop-blur-md">
                        {project.category}
                      </span>

                      {/* Featured Star */}
                      {project.featured && (
                        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1 backdrop-blur-md">
                          <Sparkles className="w-3 h-3" />
                          Featured
                        </span>
                      )}

                      {/* View Details Overlay prompt */}
                      <div className="absolute inset-0 bg-[#2c67ed]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <span className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#030712]/90 border border-white/20 shadow-lg flex items-center gap-1.5">
                          <span>Detail Proyek</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 
                          onClick={() => setSelectedProject(project)}
                          className="text-lg font-bold text-white mb-2 group-hover:text-[#5b8bf7] transition-colors cursor-pointer flex items-center justify-between"
                        >
                          <span>{project.title}</span>
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#5b8bf7]" />
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed mb-4">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        {/* Tech Tag Pills */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-blue-200 border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="px-2 py-1 rounded-md text-[11px] font-mono bg-white/[0.02] text-slate-400">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Project Actions */}
                        <div className="flex items-center gap-3 pt-3 border-t border-slate-800/80">
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold text-white bg-[#2c67ed] hover:bg-[#1d4ed8] shadow-[0_0_12px_rgba(44,103,237,0.4)] transition-all flex items-center justify-center gap-1.5"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              <span>Live Demo</span>
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="p-2 rounded-xl text-slate-300 bg-[#09122c] hover:bg-[#0d1c47] border border-slate-800 hover:border-[#2c67ed]/50 hover:text-white transition-all"
                              title="Source Code"
                            >
                              <GithubIcon className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {/* TAB 2: TECH STACK */}
        {mainTab === 'techstack' && (
          <div className="space-y-12">
            {techCategories.map((category) => {
              const categorySkills = skills.filter((s) => s.category === category);
              if (categorySkills.length === 0) return null;

              return (
                <div key={category} className="rounded-3xl p-6 sm:p-8 bg-[#050b1d]/85 border border-[#2c67ed]/30 backdrop-blur-xl shadow-[0_0_30px_rgba(44,103,237,0.15)]">
                  
                  {/* Category Subheader */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                    <div className="w-3 h-3 rounded-full bg-[#2c67ed] shadow-[0_0_10px_#2c67ed]" />
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {category}
                    </h3>
                    <span className="text-xs font-mono text-slate-400 ml-auto">
                      {categorySkills.length} Teknologi
                    </span>
                  </div>

                  {/* Skills Grid without percentage indicators */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {categorySkills.map((skill) => {
                      const IconComponent = skillIcons[skill.iconName] || Code;

                      return (
                        <motion.div
                          key={skill.name}
                          whileHover={{ scale: 1.02, y: -4 }}
                          className="p-5 rounded-2xl bg-[#09122c]/60 border border-slate-800 hover:border-[#2c67ed]/60 transition-all hover:bg-[#0a1538] hover:shadow-[0_0_20px_rgba(44,103,237,0.25)] group flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 rounded-xl bg-[#2c67ed]/15 border border-[#2c67ed]/30 flex items-center justify-center text-[#5b8bf7] group-hover:scale-110 group-hover:text-white group-hover:bg-[#2c67ed] transition-all shadow-[0_0_10px_rgba(44,103,237,0.2)]">
                                <IconComponent className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="text-base font-bold text-white group-hover:text-[#5b8bf7] transition-colors">
                                  {skill.name}
                                </h4>
                                <span className="text-[11px] text-[#5b8bf7] font-mono">
                                  Tech Capability
                                </span>
                              </div>
                            </div>

                            <p className="text-xs text-slate-300 leading-relaxed">
                              {skill.tagline}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Selected Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
