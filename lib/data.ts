import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import imgOp from "@/public/imgOp.png";
import ccc from "@/public/ccc.png";
import hhic from '@/public/hhic.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "House Hold Income Manager",
    description:
      "I created an application that allows to control the home budget for a whole family",
    tags: ["Spring Boot", "Thymeleaf", "MySQL", "Bootstrap", "Spring Security"],
    imageUrl: hhic,
  },
  {
    title: "Car Rental Service",
    description:
      "This web application is car renatal service, complelted with security, admin funcionality and open authorization.",
    tags: ["Spring Boot", "React", "MySQL", "Tailwind", "Spring Security"],
    imageUrl: ccc,
  },
  {
    title: "Image Operators",
    description:
      "A simple .NET application implementing low level assembly code to perform the Sobel and Roberts operators.",
    tags: [".NET", "C#", "Assembly"],
    imageUrl: imgOp,
  },
] as const;

export const skillsData = [
  "C/C++",
  "Assembly",
  "Java",
  "Spring Boot",
  "Spring Security",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "Docker",
] as const;