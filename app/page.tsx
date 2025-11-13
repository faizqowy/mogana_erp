"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import HeroComponent from "@/components/HeroComponent";
import ContactUs from "@/components/ContactUs";
import NavbarComponent from "@/components/NavbarComponent"
import Footer from "@/components/Footer";
import Image from "next/image";

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
        
        <section className="bg-gray-300 min-h-screen p-24 flex items-center justify-center gap-12">
          <div className="mt-12 mx-auto text-justify w-1/2">
            <h2 className="text-4xl font-bold mb-6" id="about-us">About Us</h2>
            <p className="text-lg leading-relaxed text-gray-900">
              Mogana ERP is dedicated to providing top-notch business management solutions that streamline operations and enhance productivity. Our team of experts works tirelessly to deliver innovative features and exceptional support to help your business thrive in a competitive market.
            </p>
          </div>
          <div className="w-1/2 p-10">
            <Image 
              src="/img/Hero.jpg" 
              alt="About Us Image" 
              width={1080} 
              height={720} 
              className="object-cover w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </section>

        <section className={"bg-gray-300 min-h-screen p-24"}>
          <h2 className="text-4xl font-bold text-center" id="services">Services</h2>
          <div className="grid grid-cols-3 gap-16 mt-12 px-7 mx-auto" >

            {/* Card 1 */}
            <div className="bg-gray-900/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <Image 
                  src="/img/Hero.jpg" 
                  alt="Service 1" 
                  width={1080} 
                  height={720} 
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">Service 1</h3>
                <p className="text-gray-200 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis enim ut posuere ullamcorper.
                </p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className=" bg-gray-900/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <Image 
                  src="/img/Hero.jpg" 
                  alt="Service 1" 
                  width={1080} 
                  height={720} 
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">Service 1</h3>
                <p className="text-gray-200 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis enim ut posuere ullamcorper.
                </p>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className=" bg-gray-900/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <Image 
                  src="/img/Hero.jpg" 
                  alt="Service 1" 
                  width={1080} 
                  height={720} 
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">Service 1</h3>
                <p className="text-gray-200 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis enim ut posuere ullamcorper.
                </p>
              </div>
            </div>


          </div>
        </section>
        <section className="bg-gray-200 min-h-screen">
          <ContactUs />
        </section>
        <section className="bg-gray-200">
          <Footer/>
        </section>        
      </div>
    </div>
  );
}
