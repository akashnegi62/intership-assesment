"use client";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed top-4 left-0 right-0 z-[100] mx-auto transition-all ease-in duration-300 px-6 py-4 ${
        scrolled
          ? "bg-white shadow-lg rounded-xl lg:rounded-full mt-4 w-[50%]"
          : "bg-transparent w-[90%]"
      }`}
    >
      <div className="flex justify-around items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-black rounded-sm" />
          <span className="font-medium text-xl lg:text-3xl lg:font-semibold font-[Amer]">
            BRAND
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 font-[fig] lg:text-lg">
          <a
            href="#features"
            className="text-black hover:text-white hover:bg-black transition-all duration-400 ease-in px-4 py-1 rounded-full"
          >
            Feature
          </a>
          <a
            href="#pricing"
            className="text-black hover:text-white hover:bg-black transition-all duration-400 ease-in px-3 py-2 rounded-full"
          >
            Pricing
          </a>
          <a
            href="#footer"
            className="text-black hover:text-white hover:bg-black transition-all duration-400 ease-in px-3 py-1 rounded-full"
          >
            Contact
          </a>
        </div>

        {/* Desktop Button */}
        <button
          className="hidden md:block ml-4 px-4 py-2 rounded-lg border border-gray-400 shadow-sm font-semibold
          hover:bg-black hover:text-white hover:border-0 transition-all duration-400"
        >
          Book a call
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? (
              <HiX className="text-2xl" />
            ) : (
              <HiMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full px-4 z-40">
          <div className="bg-white rounded-2xl shadow-2xl p-6 space-y-4 w-full max-w-sm mx-auto">
            {[
              { name: "Features", href: "#features" },
              { name: "Pricing", href: "#pricing" },
              { name: "Contact", href: "#footer" },
            ].map((item, id) => (
              <a
                key={id}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700 text-lg font-medium hover:bg-black hover:text-white px-4 py-2 rounded-md transition-all"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => setMenuOpen(false)}
              className="w-full px-4 py-3 text-lg rounded-xl border border-gray-300 shadow-md font-semibold hover:bg-black hover:text-white transition-all"
            >
              Book a call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
