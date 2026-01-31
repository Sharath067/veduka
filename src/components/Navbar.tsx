import "./Navbar.css";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SearchOverlay from "./SearchOverlay";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about-us" },
    { name: "VENUES", path: "/venues" },
    { name: "OUR PROCESS", path: "/process" },
    { name: "SERVICES", path: "/services" },
    { name: "SWEET WORDS", path: "/sweet-words" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        {/* LOGO */}
        <div className="logo animate-logo">
          VEDUKA
          <span>weddings & celebrations</span>
        </div>

        {/* DESKTOP MENU */}
        <nav className="menu animate-menu">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMobileMenu(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT ICONS */}
        <div className="nav-icons">
          <div className="search" onClick={() => setOpenSearch(true)}>
            <FiSearch />
          </div>

          {/* HAMBURGER (MOBILE ONLY) */}
          <div
            className="hamburger"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <HiX /> : <HiOutlineMenuAlt3 />}
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${mobileMenu ? "open" : ""}`}>
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => setMobileMenu(false)}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      <SearchOverlay isOpen={openSearch} onClose={() => setOpenSearch(false)} />
    </>
  );
}
