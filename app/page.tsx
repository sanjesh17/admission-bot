"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  GraduationCap,
  BookOpen,
  Award,
  Globe,
  FlaskRound as Flask,
  Building,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import AdmissionsSection from "@/components/AdmissionSection";
import OfficialPrograms from "@/components/OfficialPrograms";
import AlertSlider from "@/components/AlertSlider";
import withScrollFadeIn from "@/components/withScrollFadeIn";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <Navbar />
      <section className="relative h-[900px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

        {/* Center Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div
            className="backdrop-blur-md bg-white/10 px-4 py-2 rounded-full text-sm sm:text-lg tracking-wide text-white border border-white/20 mb-4 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Sathyabama Institute of Science and Technology
          </motion.div>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-7xl font-bold leading-tight mb-4 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Transforming Lives through Innovation
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-2xl drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Empowering students to build a brighter, research-driven future.
          </motion.p>
        </motion.div>

        {/* Scroll CTA */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <a
            href="#admissions"
            className="inline-flex items-center gap-2 px-5 py-2 bg-white text-[#831238] font-medium rounded-full shadow-lg hover:bg-[#831238] hover:text-white transition-all duration-900 text-sm animate-bounce"
          >
            ↓ Know More
          </a>
        </div>
      </section>

      <AlertSlider />

      <AdmissionsSection />

      <div className="relative h-40 overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-10"></div>
        <div className="animate-infinite-scroll whitespace-nowrap flex w-[200%]">
          <h1 className="font-inter text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-black/20 to-white flex-shrink-0">
            Admissions Open for 2025-26
          </h1>
          <h1 className="font-inter text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-black/20 to-white flex-shrink-0 ml-24">
            Admissions Open for 2025-26
          </h1>
        </div>
      </div>

      <OfficialPrograms />
    </div>
  );
}

export default withScrollFadeIn(Home);
