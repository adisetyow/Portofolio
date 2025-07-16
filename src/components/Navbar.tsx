import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { navLinks } from "../data";
import { Menu, X, Code } from "lucide-react";

const Navbar: React.FC = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Set active section based on scroll position
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        scrolled
          ? "bg-background-secondary/90 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      } fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Code size={28} className="text-accent-primary" />
          <span className="text-xl font-bold tracking-tight">
            Porto<span className="text-accent-primary">folio</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                className={`${
                  active === link.id
                    ? "text-accent-primary"
                    : "text-text-secondary hover:text-text-primary"
                } cursor-pointer transition-colors duration-300 text-sm font-medium`}
                onClick={() => setActive(link.id)}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex">
          <button
            type="button"
            className="text-text-primary"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu */}
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-background-secondary/95 backdrop-blur-sm absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl shadow-lg`}
          >
            <ul className="flex flex-col gap-4 items-start">
              {navLinks.map((link) => (
                <li key={link.id} className="w-full">
                  <Link
                    to={link.id}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    className={`${
                      active === link.id
                        ? "text-accent-primary"
                        : "text-text-secondary hover:text-text-primary"
                    } block py-2 cursor-pointer transition-colors duration-300 text-sm font-medium`}
                    onClick={() => {
                      setActive(link.id);
                      setToggle(false);
                    }}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
