import React from 'react';
import { Github, Linkedin, Mail, FileText, ExternalLink, Code2, Terminal, Cpu, Database, Layout, Smartphone, GitBranch, Atom, Palette, PenTool, FileCode } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-teal-300 selection:text-teal-900">
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-teal-400">KalifsPortfolio.</span>
          <div className="flex gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-teal-400 transition-colors hidden sm:block">About</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <section className="mb-32 flex flex-col justify-center min-h-[80vh]">
          <p className="font-mono text-teal-400 mb-5 ml-1 text-lg">
            Hi, my name is
          </p>
          <h1 className="text-5xl md:text-8xl font-bold text-slate-100 mb-6 tracking-tight">
            Kalif Albirra Alfath.
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed mb-10">
            Aspiring AI Engineer
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/KalifAA" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-200 transition-all font-medium border border-transparent hover:border-slate-600">
              <Github size={20} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/kalif-albirra-alfath-356577386/" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-200 transition-all font-medium border border-transparent hover:border-slate-600">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 px-6 py-3 bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/50 rounded-lg transition-all font-medium">
              <FileText size={20} />
              Resume
            </a>
          </div>
        </section>
        <section id="about" className="mb-32 scroll-mt-20">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
                  About Me
                </h2>
                <div className="space-y-4 text-slate-400 text-lg leading-relaxed text-justify">
                  <p>
                    Hello! My name is <span className="text-teal-400">Kalif</span> and I'm a Computer Science undergraduate at Bina Nusantara University with a dedicated focus on Artificial Intelligence and Machine Learning. Through my studies and personal experiences, I have gained a strong foundation in data structures, algorithms, and software engineering principles, which I now apply to the fascinating world of intelligent systems.                  </p>
                  <p>
                    I am proficient in languages like Python, C, HTML, and Java, and have hands-on experience with core AI/ML libraries such as TensorFlow, PyTorch, and Scikit-learn. My project work has allowed me to explore areas like Natural Language Processing (NLP) and Computer Vision, from building sentiment analysis models to developing image recognition systems.                  </p>
                  <p>
                    I am driven by the challenge of using data to solve real-world problems and am always eager to learn and implement new techniques.                  </p>
                </div>
              </div>
              <div className="relative flex justify-center lg:justify-end">
                <div className="absolute top-4 right-4 w-64 h-64 md:w-80 md:h-80 bg-teal-500/20 rounded-2xl -z-10 transition-all group-hover:top-2 group-hover:right-2"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 bg-slate-800 rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-300 cursor-pointer group">
                  <img src="/profile_img.jpg" alt="Profile" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"/>
                  <div className="absolute inset-0 bg-teal-500/10 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>
           </div>
        </section>
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-slate-100 mb-8">
            Technologies I've worked with
          </h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-500/30 transition-all hover:-translate-y-1">
              <Terminal className="text-teal-400" size={24} />
              <span className="text-slate-300 font-medium">C</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-500/30 transition-all hover:-translate-y-1">
              <Code2 className="text-teal-400" size={24} />
              <span className="text-slate-300 font-medium">Python</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-500/30 transition-all hover:-translate-y-1">
              <FileCode className="text-teal-400" size={24} />
              <span className="text-slate-300 font-medium">JavaScript</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-500/30 transition-all hover:-translate-y-1">
              <Layout className="text-teal-400" size={24} />
              <span className="text-slate-300 font-medium">HTML / CSS</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-500/30 transition-all hover:-translate-y-1">
              <Database className="text-teal-400" size={24} />
              <span className="text-slate-300 font-medium">SQL</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-500/30 transition-all hover:-translate-y-1">
              <Atom className="text-teal-400" size={24} />
              <span className="text-slate-300 font-medium">React</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-500/30 transition-all hover:-translate-y-1">
              <Cpu className="text-teal-400" size={24} />
              <span className="text-slate-300 font-medium">Next.js</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-500/30 transition-all hover:-translate-y-1">
              <Palette className="text-teal-400" size={24} />
              <span className="text-slate-300 font-medium">Bootstrap / Tailwind</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-500/30 transition-all hover:-translate-y-1">
              <GitBranch className="text-teal-400" size={24} />
              <span className="text-slate-300 font-medium">Git</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-500/30 transition-all hover:-translate-y-1">
              <PenTool className="text-teal-400" size={24} />
              <span className="text-slate-300 font-medium">Figma</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-500/30 transition-all hover:-translate-y-1">
              <Smartphone className="text-teal-400" size={24} />
              <span className="text-slate-300 font-medium">Android Studio</span>
            </div>
          </div>
        </section>
        <section id="projects" className="mb-32">
          <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3">
            <Code2 className="text-teal-400" size={32} /> Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="group relative bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-teal-500/50 transition-all hover:-translate-y-1 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-teal-400 transition-colors">
                  LearnSphere
                </h3>
                <div className="flex gap-4">
                  <a href="https://github.com/KalifAA/LearnSphere" target="_blank" className="text-slate-400 hover:text-teal-400 transition-colors" aria-label="View Code"><Github size={20} /></a>
                </div>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
                LearnSphere is a decentralized educational platform built on the Internet Computer Protocol (ICP). By integrating AI agents with a 'learn-to-earn' incentive model, it gamifies the mastery of complex Web3 concepts, rewarding users with tokens and on-chain achievements as they complete technical quests.
              </p>
              <div className="flex gap-2 flex-wrap mt-auto">
                <span className="px-3 py-1 bg-teal-500/10 text-teal-300 text-xs font-medium rounded-full">React.js</span>
                <span className="px-3 py-1 bg-teal-500/10 text-teal-300 text-xs font-medium rounded-full">Python</span>
                <span className="px-3 py-1 bg-teal-500/10 text-teal-300 text-xs font-medium rounded-full">Motoko</span>
                <span className="px-3 py-1 bg-teal-500/10 text-teal-300 text-xs font-medium rounded-full">TailwindCSS</span>
                <span className="px-3 py-1 bg-teal-500/10 text-teal-300 text-xs font-medium rounded-full">Fetch.ai</span>
                <span className="px-3 py-1 bg-teal-500/10 text-teal-300 text-xs font-medium rounded-full">Internet Computer</span>
              </div>
            </div>
            <div className="group relative bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-teal-500/50 transition-all hover:-translate-y-1 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-teal-400 transition-colors">
                  Brain Tumor Classification
                </h3>
                <div className="flex gap-4">
                  <a href="https://github.com/KalifAA/brain-tumor-classification-deep-learning" target="_blank" className="text-slate-400 hover:text-teal-400 transition-colors"><Github size={20} /></a>
                </div>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
                A deep learning application designed to automate the detection and classification of brain tumors from MRI scans. Using a trained Convolutional Neural Network (CNN), the system analyzes medical imagery to categorize scans into four classes: Glioma, Meningioma, Pituitary Tumor, or No Tumor. The project features a user-friendly Flask web interface that allows users to upload images and receive instant diagnostic predictions.
              </p>
              <div className="flex gap-2 flex-wrap mt-auto">
                <span className="px-3 py-1 bg-teal-500/10 text-teal-300 text-xs font-medium rounded-full">Python</span>
                <span className="px-3 py-1 bg-teal-500/10 text-teal-300 text-xs font-medium rounded-full">Tensorflow & Keras</span>
                <span className="px-3 py-1 bg-teal-500/10 text-teal-300 text-xs font-medium rounded-full">Flask</span>
                <span className="px-3 py-1 bg-teal-500/10 text-teal-300 text-xs font-medium rounded-full">OpenCV</span>
                <span className="px-3 py-1 bg-teal-500/10 text-teal-300 text-xs font-medium rounded-full">NumPy</span>
                <span className="px-3 py-1 bg-teal-500/10 text-teal-300 text-xs font-medium rounded-full">HTML/CSS</span>
                <span className="px-3 py-1 bg-teal-500/10 text-teal-300 text-xs font-medium rounded-full">JavaScript</span>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="text-center max-w-2xl mx-auto mb-20">
          <a href="mailto:kalifalbirraalfath@gmail.com" 
             className="inline-flex items-center gap-3 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-slate-900 rounded-lg transition-all font-bold text-lg">
            <Mail size={20} />
            Send me an email
          </a>
        </section>
      </main>
    </div>
  );
}