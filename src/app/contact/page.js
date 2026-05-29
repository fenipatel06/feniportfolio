"use client";

import React from 'react';
import { motion } from 'motion/react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const contactHubs = [
  {
    id: 1,
    title: "Official Email",
    value: "fenipatel6120@gmail.com",
    href: "mailto:fenipatel6120@gmail.com",
    label: "Write an email",
    description: "Inquiries regarding project design verification, consultations, or institution structures.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Direct Line",
    value: "+91 8160162320",
    href: "tel:+918160162320",
    label: "Call securely",
    description: "Immediate voice interface for active project sync metrics or time-sensitive communications.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.6221 2.25 6.622c0-1.164.94-2.117 2.118-2.117h2.518c.642 0 1.2.443 1.323 1.074l.442 2.21a1.24 1.24 0 0 1-.505 1.21l-1.393 1.045a16.651 16.651 0 0 0 7.978 7.978l1.045-1.393a1.24 1.24 0 0 1 1.21-.505l2.21.442c.631.126 1.074.681 1.074 1.323v2.518c0 1.178-.953 2.118-2.117 2.118H17.5c-8.423 0-15.25-6.827-15.25-15.25v-.934z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Personal Instagram",
    value: "@fenipatel006",
    href: "https://www.instagram.com/fenipatel006/",
    label: "View digital updates",
    description: "Leadership insights, entrepreneurial experiences, and continuous personal growth.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Business Instagram",
    value: "@websankul_civil_engineering",
    href: "https://www.instagram.com/websankul_civil_engineering/",
    label: "View digital updates",
    description: "Civil engineering education, competitive exam preparation, and student success stories.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 5,
    title: "YouTube Platform",
    value: "WebSankul Civil Engineering",
    href: "https://www.youtube.com/channel/UCKRVQ4hFemjL8gmN02vGkfg",
    label: "Stream video resources",
    description: "Broadcast engineering blueprints, macro parsing tutorials, and academic masterclasses.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M23 12s0-4.18-.5-5.8A3 3 0 0 0 20.4 4.1C18.78 3.6 12 3.6 12 3.6s-6.78 0-8.4.5A3 3 0 0 0 1.5 6.2C1 7.82 1 12 1 12s0 4.18.5 5.8a3 3 0 0 0 2.1 2.1c1.62.5 8.4.5 8.4.5s6.78 0 8.4-.5a3 3 0 0 0 2.1-2.1c.5-1.62.5-5.8.5-5.8z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
      </svg>
    )
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-24 w-full text-slate-900 flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full space-y-16">
        
        {/* HEADER BLOCK */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="border-b border-slate-200 pb-10"
        >
          <span className="text-[#D49E2D] text-xs font-bold uppercase tracking-widest">Connect Matrix</span>
          <h1 className="text-4xl md:text-6xl font-black text-[#0F1E36] tracking-tight uppercase mt-2">Get In Touch</h1>
          <p className="text-slate-500 mt-2 text-lg">Initiate professional consultations, enterprise collaborations, or stream educational resources.</p>
        </motion.div>

        {/* CHANGED: Swapped 'whileInView' to 'animate' so cards load immediately without scroll dependencies */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer} 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
        >
          {contactHubs.map((hub) => (
            <a 
              key={hub.id} 
              href={hub.href} 
              target={hub.id > 2 ? "_blank" : undefined} 
              rel={hub.id > 2 ? "noopener noreferrer" : undefined}
              className="block group"
            >
              <motion.div 
                variants={fadeInUp}
                whileHover={{ 
                  y: -6, 
                  boxShadow: "0 30px 60px -15px rgba(15,30,54,0.08)"
                }}
                className="h-full bg-white border border-slate-200 p-8 rounded-3xl flex flex-col justify-between transition-all duration-500 relative overflow-hidden"
              >
                {/* Top-Line Accent */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0F1E36] to-[#D49E2D] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="space-y-6">
                  {/* Icon Container Frame */}
                  <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-[#D49E2D] group-hover:bg-[#0F1E36] group-hover:text-white group-hover:rotate-3 transition-all duration-500 shadow-xs">
                    {hub.icon}
                  </div>

                  {/* Text Blocks */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-[#D49E2D] uppercase tracking-widest block">
                      {hub.title}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight leading-none truncate group-hover:text-[#0F1E36] transition-colors duration-300">
                      {hub.value}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed pt-2">
                      {hub.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action Link */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#D49E2D] transition-colors duration-300">
                  <span>{hub.label}</span>
                  <span className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300 text-base">
                    →
                  </span>
                </div>
              </motion.div>
            </a>
          ))}
        </motion.div>

      </div>
    </div>
  );
}