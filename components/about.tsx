"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";


export default function About() {

  return (
    <motion.section
      className="max-w-[45rem] text-center leading-8 mb-[20rem] scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        <span className="italic">When I am not coding</span>, I enjoy playing
        video games, watching movies, and all types of sports.   {" "}
        <span className="font-medium"></span>

      </p>
    </motion.section>
  );
}