"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import HeroComponent from "@/components/HeroComponent";
import NavbarComponent from "@/components/NavbarComponent"

export default function HomePage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollSmoother);
      
      ScrollSmoother.get()?.kill();

      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.4,
        effects: true,

      });
    }
  }, []);

  return (
    <div id="smooth-wrapper">
      <NavbarComponent />
      <div id="smooth-content">
        <HeroComponent />
        <section data-speed={0.9} className={"bg-gray-300 min-h-screen"}>
          <h2 style={{ padding: "2rem" }}>Scroll Down for More</h2>
        </section>
        <section data-speed={0.9} className={"bg-gray-500 min-h-screen"}>
          <h2 style={{ padding: "2rem" }}>End of the Page</h2>
        </section>
      </div>
    </div>
  );
}
