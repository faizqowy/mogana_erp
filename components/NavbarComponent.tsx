"use client";
import { useEffect, useState } from "react";

export default function NavbarComponent(){ 
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [atTop, setAtTop] = useState(true)
    const [currentPage, setCurrentPage] = useState("home")

    const handleNavClick = (id: string) => {
        setCurrentPage(id)
        console.log(currentPage)
        const element = document.querySelector(id)        
        if (element) {
          const yOffset = -64 // navbar height
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset
          window.scrollTo({ top: y, behavior: "smooth" })
        }
    }

    useEffect(() => {
      const handleScroll = () => {
        const currentY = window.scrollY

        // Check if user is at the top
        setAtTop(currentY <= 10)

        // Hide when scrolling down
        if (currentY > lastScrollY && currentY > 80) {
          setHidden(true)
        } else {
          setHidden(false)
        }

        setLastScrollY(currentY)
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY]);

    return (
         <nav
          className={`fixed top-0 left-0 w-full h-16 flex items-center justify-between px-8 z-50 text-white transition-all duration-300
          ${hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}
          ${atTop ? "bg-transparent" : "bg-gray-900/50 backdrop-blur-md shadow-md"}`}
        >
            <div className="text-white text-2xl font-bold">
              <h3>Mogana ERP</h3>
            </div>
            <ul className="flex space-x-6 text-white">
                <li className={`${currentPage === "home" ? "text-gray-400" : ""} hover:text-gray-400 cursor-pointer`}>
                    <a href="/">Home</a>
                </li>
                <li className={`${currentPage === "#services" ? "text-gray-400" : ""} hover:text-gray-400 cursor-pointer`} onClick={() => handleNavClick("#services")}>Services</li>
                <li className={`${currentPage === "#contact" ? "text-gray-400" : ""} hover:text-gray-400 cursor-pointer`} onClick={() => handleNavClick("#contact")}>Contact</li>
                <li className={`${currentPage === "#myhealth" ? "text-gray-400" : ""} hover:text-gray-400 cursor-pointer`} onClick={() => handleNavClick("#myhealth")}>My Health</li>
            </ul>
        </nav>
    );
}