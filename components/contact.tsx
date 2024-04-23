"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import {motion} from 'framer-motion'
import { sendEmail } from '@/email/sendEmail'

export default function Contact() {
  return (
    <motion.section id="contact" className='scroll-mt-28 mb-[20rem]'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
        <SectionHeading>Contact Me</SectionHeading>
        <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:spider.wojciech@gmail.com">
          spider.wojciech@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async(formData) => {await sendEmail(formData);}}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack transition-all bg-gray-100"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 transition-all bg-gray-100" 
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button type="submit"
        className=" group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full flex 
        focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer items-center justify-center gap-2">
            Send<FaPaperPlane className="text-xs transition-all group-hover:translate-x-1 group-hover:-translate-y-1"/></button>
      </form>
    </motion.section>
  )
}
