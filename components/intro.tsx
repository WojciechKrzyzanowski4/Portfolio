"use client"

import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";


export default function Intro() {
  return (
    <section className='pt-80 mb-40'>
      
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl text-center font-medium !leading-[1.5] max-w-[55rem] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I am Wojtek.</span> I am a{" "}
        <span className="font-bold">full-stack developer</span> currently studying{" "}
        <span className="font-bold">Informatics</span>. I enjoy
        building <span className="italic"> apps</span>. My focus is{" "}
        <span className="font-bold italic">Spring Boot and React</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >

      <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
           
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="group-hover:translate-x-1 transition" />
        </Link>
       
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className=" group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
          href="https://github.com/WojciechKrzyzanowski4"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>

    </section>
  )
}
