import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Laptop from "@/components/model";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Intro/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  )
}
