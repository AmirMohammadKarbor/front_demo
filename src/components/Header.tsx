import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="background-gradient relative w-full bg-transparent py-2">
      <img
        src="src/assets/images/logo.png"
        alt="CodeArea Logo"
        className="hidden md:block w-18 h-18 object-contain absolute left-10 top-1/2 transform -translate-y-1/2 mt-5"
      />

      <div
        className="
          flex flex-col md:flex-row items-center justify-center
          gap-5 md:gap-3
          mt-10 md:mt-0
          md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2
          text-center
        "
      >
        <nav className="bg-white/90 backdrop-blur-md px-10 md:px-20 py-3 md:py-5 rounded-full shadow-lg shadow-purple-500/50 flex items-center justify-center gap-6 md:gap-10 text-black font-medium">
          <a href="#contact" className="hover:text-blue-600 transition">
            پل ارتباطی
          </a>
          <a href="#team" className="hover:text-blue-600 transition">
            تیم ما
          </a>
          <a href="#specialities" className="hover:text-blue-600 transition">
            تخصص ما
          </a>
        </nav>

        <Link
          to="/hiring"
          className="px-6 py-3 rounded-full font-medium text-brand-gradient bg-white/90 hover:from-cyan-500 hover:to-blue-600 transition-all shadow-md"
        >
          موقعیت‌های شغلی
        </Link>
      </div>
    </header>
  );
};

export default Header;
