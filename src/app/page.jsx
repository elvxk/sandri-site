"use client";
import { useEffect, useState } from "react";
import elvxk from "./elvxk";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Navbar from "@/components/Navbar";
import SideNav from "@/components/SideNav";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

console.info(elvxk);
export default function Home() {
  const [projects, setProjects] = useState(null);
  const url = "http://api.sandri.my.id:3666";

  useEffect(() => {
    AOS.init();
    fetch(`${url}/projects?limit=6`, { method: "GET" })
      .then((res) => res.json())
      .then(({ data }) => {
        setProjects(data);
      });
  }, []);

  return (
    <>
      <SideNav />
      <Navbar />
      <Hero />
      <About />
      <Projects data={projects} />
      <Contact />
      <Footer />
    </>
  );
}
