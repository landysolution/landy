"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Search, Sun, Moon } from "lucide-react";
import { FRONT_URL } from "@/lib/utils";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`relative p-2 fixed top-0 w-screen flex justify-between items-center transition-all duration-300 ${
        scrolled ? "bg-white/10 backdrop-blur-xl shadow-lg" : ""
      }`}
    >
      <div
        className="rounded-3xl items-center flex"
        onClick={() => setClicked((prev) => !prev)}
      >
        <Search size={30} className="text-black dark:text-white" />
        {/* <input className={`${clicked ? "flex" : "hidden"} outline-none bg-black fixed w-fit `} /> */}
      </div>

      <a href={FRONT_URL} className="relative w-1/3 h-10 ">
        <Image src="/landy.svg" alt="logo" fill className="object-contain" />
      </a>

      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-2 rounded-full bg-white/20 dark:bg-black/20 transition-colors"
      >
        {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
};

export default Header;
