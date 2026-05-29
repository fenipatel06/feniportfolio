"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

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
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

// Updated dataset including direct public asset paths for the book cover posters
const bookData = [
  {
    id: 1,
    title: "GPSC Civil Engineering Previous Year Questions Book",
    category: "Core Reference",
    image: "/book1.jpeg", // Store your book covers in /public/books/
    scope:
      "Compiled a dedicated collection of 2400+ solved previous year questions along with 11 latest GPSC exam papers for targeted GPSC preparation.",
  },
  {
    id: 2,
    title: "Civil Engineering Class-3 Question Practice Book",
    category: "Core Reference",
    image: "/book2.jpeg",
    scope:
      "Published a practice-oriented resource with 5000+ exam-focused questions and answer keys, aligned with the latest examination pattern and complete syllabus coverage.",
  },
  {
    id: 3,
    title: "A.M.C. Question Practice Book",
    category: "Academic Guide",
    image: "/book3.jpeg",
    scope:
      "Developed a specialized practice book containing 2000+ questions with answer keys for AMC technical recruitment examinations, including ATS, AE, and Additional City Engineer posts.",
  },
  {
    id: 4,
    title: "A.M.C. Estate Department",
    category: "Field Manual",
    image: "/book4.jpeg",
    scope:
      "Theory & Question Practice Book (Vol. 1 & 2) – Authored a comprehensive theory and practice resource designed for AMC Estate Department recruitment examinations, covering Estate Officer and Inspector-level positions.",
  },
  {
    id: 5,
    title: "Class-3 Civil Engineering Previous Year Questions Book",
    category: "GPSC Strategy",
    image: "/book5.jpeg",
    scope:
      "Authored a structured question bank containing 4700+ solved questions and 59+ previous exam papers with detailed solutions for Civil Engineering competitive examinations.",
  },
  {
    id: 6,
    title: "GPSC Civil Engineering Previous Year Questions Book",
    category: "Quick Reference",
    image: "/book6.jpeg",
    scope:
      "Developed a comprehensive reference book featuring 7200+ solved questions, 40+ exam papers, and coverage of all 18 Civil Engineering subjects for competitive exam preparation.",
  },
];

export default function Books() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-24 w-full text-slate-900">
      {/* Container max-width expanded to 7xl for visual consistency across your layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-20">
        {/* HEADER BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-b border-slate-200 pb-10"
        >
          <span className="text-[#D49E2D] text-xs font-bold uppercase tracking-widest">
            Published Civil Engineering Books{" "}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-[#0F1E36] tracking-tight uppercase mt-2">
            Authored Publications
          </h1>
          <p className="text-slate-500 mt-2 text-lg">
            Authored and published Civil Engineering competitive exam books
            featuring 20,000+ practice questions and 100+ previous exam papers
            for GPSC, GSSSB, AMC, UPSC-ESE, SSC-JE, RRB-JE, and other government
            examinations.
          </p>
        </motion.div>

        {/* PUBLICATIONS CARDS GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {bookData.map((book) => (
            <motion.div
              key={book.id}
              variants={fadeInUp}
              whileHover={{
                y: -8,
                boxShadow: "0 30px 60px -15px rgba(15,30,54,0.1)",
              }}
              className="bg-white border border-slate-200 p-6 rounded-3xl flex flex-col justify-between transition-all duration-500 relative overflow-hidden group"
            >
              {/* Premium Top Line Accent */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0F1E36] to-[#D49E2D] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* 1. FRONT POSTER CONTAINER FRAME */}
                <div className="relative w-full h-80 bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden mb-6 shadow-xs group-hover:border-slate-200/80 transition-colors duration-500">
                  <Image
                    src={book.image}
                    alt={`${book.title} Front Cover Poster`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                    priority={book.id <= 3} // Optimizes loading for the first row of books
                  />
                </div>

                {/* 2. TEXT STRUCTURAL CONTENT */}
                <div className="space-y-2">
                  {/* <span className="text-[10px] font-bold text-[#D49E2D] uppercase tracking-widest block">
                    {book.category}
                  </span> */}
                  <h3 className="text-xl font-black text-slate-800 tracking-tight leading-snug group-hover:text-[#0F1E36] transition-colors duration-300">
                    {book.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed pt-2">
                    {book.scope}
                  </p>
                </div>
              </div>

              {/* 3. CARD FOOTER META LINE */}
              {/* <div className="pt-6 mt-6 border-t border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                ISBN Reference Active / WebSankul Press
              </div> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
