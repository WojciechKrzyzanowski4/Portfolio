"use client"

import React, { useRef } from 'react'
import SectionHeading from './section-heading'
import {projectsData} from '@/lib/data'
import Image from 'next/image';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion'


type ProjectProps = (typeof projectsData)[number];

export default function Project({title,description,tags, imageUrl}:ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["0 1", "1.33 1"]
    })

    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
    return (
        <motion.div
          ref={ref}
          style={{
            scale: scaleProgess,
            opacity: opacityProgess,
          }}
          className="group mb-3 md:mb-8 last:mb-0"
        >
          <section className="bg-gray-100 max-w-[60rem] border border-black/5 rounded-lg overflow-hidden md:pr-8 relative md:h-[20rem] hover:bg-gray-300 transition">
            <div className="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 md:max-w-[40%] flex flex-col h-full md:group-even:ml-[26rem]">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-gray-700 ">
                {description}
              </p>
              <ul className="flex flex-wrap mt-4 gap-2 md:mt-auto">
                {tags.map((tag, index) => (
                  <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full "
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
    
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={100}
              className="absolute hidden md:block top-8 -right-20 w-[28.25rem] rounded-t-lg shadow-2xl
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
    
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
    
            group-even:right-[initial] group-even:-left-20"
            />
          </section>
        </motion.div>
      );
    }

