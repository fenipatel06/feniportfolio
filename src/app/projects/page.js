"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

// Image import matching your local folder structure
import webSankulPhoto from "./WebSankul.png";
import webSankulPhoto1 from "./webSankulPhoto1.jpg";
import webSankulPhoto2 from "./webSankulPhoto2.jpg";
import projectTruss from "./projectTrusss.jpeg";
import projectSchool from "./projectSchool.jpeg";
import projectTransmission from "./projectTransmission.jpeg";
import projectg2 from "./projectg2.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-24 w-full text-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-24">
        {/* HEADER BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-b border-slate-200 pb-10"
        >
          <span className="text-[#D49E2D] text-xs font-bold uppercase tracking-widest">
            Enterprise & Infrastructure
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-[#0F1E36] tracking-tight uppercase mt-2">
            Projects & Experience
          </h1>
        </motion.div>

        {/* SECTION 1: VENTURES */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-[#0F1E36] tracking-wide uppercase">
            Corporate Foundershop
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            className="w-full"
          >
            {/* Widescreen Premium WebSankul Card */}
            <motion.div
              variants={fadeInUp}
              className="w-full bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group grid grid-cols-1 lg:grid-cols-12 gap-10 p-6 md:p-10"
            >
              {/* Full-Width Transparent Logo Strip */}
              <div className="lg:col-span-12 flex justify-center lg:justify-start pt-2">
                <div className="relative w-80 h-30">
                  <Image
                    src={webSankulPhoto}
                    alt="WebSankul Brand Logo"
                    fill
                    className="object-contain object-left"
                    sizes="200px"
                    priority
                  />
                </div>
              </div>

              {/* Text Framework & Metrics */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                <div className="space-y-3">
                  <span className="text-[#D49E2D] text-xs font-bold uppercase tracking-widest block">
                    Educational Institution
                  </span>
                  <h3 className="text-3xl font-black text-slate-800 tracking-tight leading-tight">
                    WebSankul Civil Engineering
                  </h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                    Co-founded and scaled a dominant technical coaching
                    platform. Supervised the creation of rigorous training
                    ecosystems, resulting in over 7,000 students mentored and
                    1,500+ active students.
                  </p>
                </div>

                {/* Micro-Metrics Display */}
                <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-black text-[#0F1E36]">7,000+</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Students Trained
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#0F1E36]">1,500+</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Active Sync Members
                    </p>
                  </div>
                </div>
              </div>

              {/* Showcase Image Twin Column */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-[300px] lg:min-h-[380px]">
                <div className="relative w-full h-64 sm:h-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
                  <Image
                    src={webSankulPhoto1}
                    alt="WebSankul Core Platform Showcase"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-102"
                    sizes="(max-w-1024px) 100vw, 400px"
                  />
                </div>

                <div className="relative w-full h-64 sm:h-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
                  <Image
                    src={webSankulPhoto2}
                    alt="WebSankul Operational Environment"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-102"
                    sizes="(max-w-1024px) 100vw, 400px"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* SECTION 2: TECHNICAL CASE STUDIES */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-[#0F1E36] tracking-wide uppercase">
            Engineering Blueprints
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Case Study One */}
            <motion.div
              variants={fadeInUp}
              className="bg-[#0F1E36] text-white rounded-3xl overflow-hidden shadow-lg group flex flex-col justify-between"
            >
              <div className="relative w-full h-56 bg-slate-900 overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity">
                <Image
                  src={projectTruss}
                  alt="Industrial Roof Truss Design"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">
                  Industrial Roof Truss Design
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Engineered and optimized the complete industrial roof truss
                  system through detailed structural analysis, manual design
                  calculations, and Excel-based automation for enhanced accuracy
                  and efficiency.{" "}
                </p>
              </div>
            </motion.div>

            {/* Case Study Two */}
            <motion.div
              variants={fadeInUp}
              className="bg-[#0F1E36] text-white rounded-3xl overflow-hidden shadow-lg group flex flex-col justify-between"
            >
              <div className="relative w-full h-56 bg-slate-900 overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity">
                <Image
                  src={projectSchool}
                  alt="Structural Audit Practice"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">
                  Structural Audit of Existing School Building{" "}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Conducted a comprehensive structural health assessment using
                  Non-Destructive Testing (NDT), crack mapping, reinforcement
                  detection, and stability evaluation to assess structural
                  safety and serviceability.{" "}
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Case Study One */}
            <motion.div
              variants={fadeInUp}
              className="bg-[#0F1E36] text-white rounded-3xl overflow-hidden shadow-lg group flex flex-col justify-between"
            >
              <div className="relative w-full h-56 bg-slate-900 overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity">
                <Image
                  src={projectg2}
                  alt="Industrial Roof Truss Design"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">
                  G+2 RCC Residential Building Design{" "}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Designed the complete RCC structural framework, including
                  slabs, beams, columns, and foundations, ensuring structural
                  stability, safety, and compliance with applicable design
                  standards.{" "}
                </p>
              </div>
            </motion.div>

            {/* Case Study Two */}
            <motion.div
              variants={fadeInUp}
              className="bg-[#0F1E36] text-white rounded-3xl overflow-hidden shadow-lg group flex flex-col justify-between"
            >
              <div className="relative w-full h-56 bg-slate-900 overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity">
                <Image
                  src={projectTransmission}
                  alt="Structural Audit Practice"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">
                  Translucent Concrete Innovation{" "}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Developed and implemented translucent concrete technology
                  using embedded optical fibers, enabling natural light
                  transmission while maintaining structural performance and
                  architectural aesthetics.{" "}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* SECTION 3: INDUSTRIAL EXPOSURE */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-[#0F1E36] tracking-wide uppercase">
            Industrial Exposure
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Internship Card One */}
            <motion.div
              variants={fadeInUp}
              className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                  <div>
                    {/* <span className="text-[#D49E2D] text-xs font-bold uppercase tracking-widest block mb-1">
                      Site & Project Management Intern
                    </span> */}
                    <h3 className="text-xl font-black text-slate-800 tracking-tight">
                      Kalathia Engineering & Construction Ltd.{" "}
                    </h3>
                  </div>
                  {/* <span className="text-xs font-semibold text-slate-400 bg-slate-50 border border-slate-200/60 px-3 py-1 rounded-full self-start sm:self-center">
                    Duration Block
                  </span> */}
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Execution of RE walls, deck slabs, crash barriers, concrete
                  testing, and site engineering calculations.{" "}
                </p>
              </div>
            </motion.div>

            {/* Internship Card Two */}
            <motion.div
              variants={fadeInUp}
              className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                  <div>
                    {/* <span className="text-[#D49E2D] text-xs font-bold uppercase tracking-widest block mb-1">
                      Structural Estimation Intern
                    </span> */}
                    <h3 className="text-xl font-black text-slate-800 tracking-tight">
                      B.N. Precast Pvt. Ltd.{" "}
                    </h3>
                  </div>
                  {/* <span className="text-xs font-semibold text-slate-400 bg-slate-50 border border-slate-200/60 px-3 py-1 rounded-full self-start sm:self-center">
                    Duration Block
                  </span> */}
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  End-to-end exposure to precast construction, from production
                  and quality control to installation.{" "}
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Internship Card Three */}
            <motion.div
              variants={fadeInUp}
              className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                  <div>
                    {/* <span className="text-[#D49E2D] text-xs font-bold uppercase tracking-widest block mb-1">
                      Site & Project Management Intern
                    </span> */}
                    <h3 className="text-xl font-black text-slate-800 tracking-tight">
                      Repair, Rehabilitation & Retrofitting of Structures{" "}
                    </h3>
                  </div>
                  {/* <span className="text-xs font-semibold text-slate-400 bg-slate-50 border border-slate-200/60 px-3 py-1 rounded-full self-start sm:self-center">
                    Duration Block
                  </span> */}
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  6-month certification in structural assessment, strengthening,
                  rehabilitation, and retrofitting techniques at NFSU.{" "}
                </p>{" "}
              </div>
            </motion.div>

            {/* Internship Card Four */}
            <motion.div
              variants={fadeInUp}
              className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                  <div>
                    {/* <span className="text-[#D49E2D] text-xs font-bold uppercase tracking-widest block mb-1">
                      Structural Estimation Intern
                    </span> */}
                    <h3 className="text-xl font-black text-slate-800 tracking-tight">
                      Structural Detailing{" "}
                    </h3>
                  </div>
                  {/* <span className="text-xs font-semibold text-slate-400 bg-slate-50 border border-slate-200/60 px-3 py-1 rounded-full self-start sm:self-center">
                    Duration Block
                  </span> */}
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Specialized training in RCC & steel detailing, reinforcement
                  drawings, BBS, and construction documentation.
                </p>{" "}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
