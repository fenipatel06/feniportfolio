"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  EngineeringIcon,
  CapIcon,
  TargetIcon,
  VideoIcon,
  GrowthIcon,
  RealEstateIcon,
} from "@/components/Icons";

const fadeInUp = {
  hidden: { opacity: 0, y: 40, transition: { duration: 0.4, ease: "easeIn" } },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-900 antialiased selection:bg-[#D49E2D] selection:text-[#0F1E36]">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <header className="relative min-h-[85vh] flex items-center justify-center bg-[#0F1E36] text-white overflow-hidden px-6 md:px-12 lg:px-24 py-16 lg:py-0">
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6 lg:col-span-7 order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block bg-white/10 backdrop-blur-md text-[#D49E2D] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/10"
            >
              Gandhinagar, Gujarat, India
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-black tracking-tight leading-none"
            >
              FENI Y. PATEL
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-slate-400 text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto lg:mx-0"
            >
              Co-Founder,{" "}
              <span className="text-[#D49E2D] font-medium">
                WebSankul Civil Engineering
              </span>
              <br />
              Founder,{" "}
              <span className="text-[#D49E2D] font-medium">
                Royal Square Real Estate
              </span>
            </motion.p>
            <motion.div variants={fadeInUp} className="pt-4">
              <blockquote className="border-l-2 border-[#D49E2D] pl-6 italic text-slate-300 text-lg md:text-xl font-serif max-w-3xl text-left">
                "Building Scalable Systems, Developing Landmark Infrastructure,
                Delivering High-Impact Results, and Creating Future-Ready
                Institutions."
              </blockquote>
            </motion.div>
            <motion.div variants={fadeInUp} className="pt-4">
              <Link
                href="/projects"
                className="inline-block bg-[#D49E2D] text-[#0F1E36] px-8 py-3.5 rounded-full text-sm font-bold shadow-lg hover:bg-white transition-colors duration-300"
              >
                Explore Enterprise Projects →
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center w-full"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-full lg:h-[480px] max-w-sm drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)]">
              <Image
                src="/main.png"
                alt="Feni Y. Patel Portrait"
                fill
                priority
                className="object-contain object-bottom select-none"
                sizes="384px"
              />
            </div>
          </motion.div>
        </div>
      </header>

      {/* 2. DYNAMIC IMPACT NUMBERS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={staggerContainer}
        className="bg-white border-b border-slate-200 py-16 px-6"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { value: "7000+", label: "Students Mentored" },
            { value: "1500+", label: "Active Cohorts Synchronously" },
            { value: "6x", label: "GPSC Prelims Cleared", highlighted: true },
            { value: "6", label: "Civil Engineering Books Authored" },
          ].map((stat, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="space-y-1">
              <span
                className={`text-4xl md:text-6xl font-black ${stat.highlighted ? "text-[#D49E2D]" : "text-[#0F1E36]"}`}
              >
                {stat.value}
              </span>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 3. STRATEGIC ARCHITECTURE STRENGTHS (Uses bg-[#F8FAFC] natively) */}
      <section className="max-w-6xl mx-auto py-24 px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-[#0F1E36] tracking-tight uppercase">
            Core Strengths
          </h2>
          <p className="text-slate-500 mt-2 text-lg">
            Driving institutional excellence and continuous educational growth through strategic vision, systematic execution, and result-oriented leadership.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <CapIcon />,
              title: "Large-Scale Management",
              desc: "Providing strategic leadership and administrative oversight for a dynamic community of 1,500+ active students, ensuring seamless coordination and operational excellence.",
            },
            {
              icon: <GrowthIcon />,
              title: "Result-Oriented Success Framework",
              desc: "Designing and executing strategic academic systems that enhance learning efficiency, optimize performance, and consistently deliver exceptional student results.",
            },
            {
              icon: <TargetIcon />,
              title: "Competitive Exam Leadership & Mentorship",
              desc: "Proven expertise in guiding aspirants for GATE, ESE, GPSC, GPCB, GPSSB, GSSSB, and other Civil Engineering competitive examinations with strategic, result-driven preparation methodologies.",
            },
            {
              icon: <EngineeringIcon />,
              title: "Civil Engineering Infrastructure",
              desc: "Transforming engineering concepts into resilient, sustainable, and high-performance infrastructure through technical excellence and practical innovation.",
            },
            {
              icon: <VideoIcon />,
              title: "Digital Brand Leadership",
              desc: "Driving brand growth through innovative content strategies, digital engagement, and high-performance media campaigns across diverse platforms.",
            },
            {
              icon: <RealEstateIcon />,
              title: "Real Estate Strategy & Development",
              desc: "Building high-potential real estate ventures through market insight, strategic planning, and value-centric development.",
            },
          ].map((strength, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px -15px rgba(15,30,54,0.08)",
                borderColor: "#0F1E36",
              }}
              className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-[#0F1E36]/5 transition-colors duration-300">
                  {strength.icon}
                </div>
                <h3 className="font-bold text-xl text-slate-800 tracking-tight group-hover:text-[#0F1E36] transition-colors">
                  {strength.title}
                </h3>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                  {strength.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. PHILOSOPHY AND VISION (Cleaned up bottom border for visual continuum) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={staggerContainer}
        className="bg-white py-24 px-6 md:px-12 w-full"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#0F1E36] tracking-tight uppercase">
              Education Philosophy
            </h2>
            <div className="space-y-8 text-center max-w-3xl mx-auto">
              <p className="text-slate-500 text-base md:text-lg leading-relaxed pt-2">
                Education must evolve beyond traditional teaching. I strongly
                believe in developing:
                <br />
                <span className="font-bold text-slate-700 tracking-wide">
                  Practical Knowledge, Creativity, Emotional Intelligence,
                  Leadership & Confidence
                </span>
              </p>

              <div className="relative py-6">
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-7xl font-serif text-[#D49E2D]/20 select-none pointer-events-none">
                  “
                </span>

                <blockquote className="text-2xl md:text-3.5xl font-black text-[#D49E2D] tracking-tight uppercase italic relative z-10 block leading-snug">
                  The goal is not just education,{" "}
                  <br className="hidden sm:inline" />
                  but transformation.
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 5. FINAL CLOSING SECTION (Updated to bg-[#F8FAFC] and dropped top border line) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={staggerContainer}
        className="bg-[#F8FAFC] py-24 px-6 md:px-12 lg:px-16 w-full"
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div variants={fadeInUp} className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-black text-[#0F1E36] tracking-tight uppercase">
              Institution Building Vision
            </h2>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto pt-2"
          >
            Driven by the belief that true leadership is measured by{" "}
            <span className="text-[#0F1E36] font-black">impact, not position</span>, 
            I am committed to building, scaling, and transforming institutions into high-performing, 
            result-oriented, and nationally recognized centers of excellence that create sustainable growth 
            and remain future-ready.
          </motion.p>
        </div>
      </motion.section>
      
    </div>
  );
}