import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-[#060e24] border border-[#2c67ed]/50 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(44,103,237,0.4)] z-10 my-8"
        >
          {/* Header Image */}
          <div className="relative h-60 sm:h-72 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060e24] via-[#060e24]/40 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#030712]/80 text-slate-300 hover:text-white hover:bg-[#2c67ed] transition-colors border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category Pill */}
            <div className="absolute bottom-4 left-6">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#2c67ed] text-white shadow-[0_0_10px_#2c67ed]">
                {project.category}
              </span>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 flex items-center gap-2">
              <span>{project.title}</span>
              {project.featured && (
                <Sparkles className="w-5 h-5 text-yellow-400 fill-yellow-400/20" />
              )}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {project.fullDescription || project.description}
            </p>

            {/* Tech Stack used */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-2.5">
                Teknologi yang Digunakan
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono bg-[#0c1a40] text-blue-300 border border-[#2c67ed]/30 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2c67ed]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#2c67ed] to-[#1d4ed8] hover:from-[#3b82f6] hover:to-[#2563eb] shadow-[0_0_20px_rgba(44,103,237,0.5)] transition-all flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Kunjungi Live Demo</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-5 rounded-xl text-sm font-semibold text-slate-200 bg-[#09122c] hover:bg-[#0f1d47] border border-[#2c67ed]/40 hover:border-[#2c67ed] transition-all flex items-center justify-center gap-2"
                >
                  <GithubIcon className="w-4 h-4 text-blue-400" />
                  <span>Lihat Source Code</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
