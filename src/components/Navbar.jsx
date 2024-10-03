import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import Testimonial1 from "../assets/Testimonial1.png";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const navlinks = [
    {
      label: "collection",
      link: "#",
    },
    {
      label: "Men",
      link: "#",
    },
    {
      label: "About",
      link: "#",
    },
    {
      label: "Contact",
      link: "#",
    },
  ];
  return (
    <main>
      <nav className="flex items-center justify-between py-6 px-8 lg:mx-24 ">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/*Menu*/}
            <AiOutlineMenu
              onClick={() => setSideMenuOpen(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            {/* Logo */}
            <a href="/" className="text-4xl font-mono">
              Logo
            </a>
          </section>
          {navlinks.map((d, i) => (
            <a
              key={i}
              href={d.link}
              className="text-gray-400 hover:text-black hidden lg:block"
            >
              {d.label}
            </a>
          ))}
        </div>

        {/*------------------ Sidebar Mobile menu-------- */}
        <div
          className={`fixed h-full w-screen lg:hidden bg-black/5 top-0 right-0 backdrop-blur-sm -translate-x-full transition-all duration-75,  ${
            sideMenuOpen && "translate-x-0"
          }`}
        >
          <section className="text-black bg-white flex flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56">
            <IoCloseSharp
              onClick={() => setSideMenuOpen(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />
            {navlinks.map((d, i) => (
              <a key={i} href={d.link} className="font-bold">
                {d.label}
              </a>
            ))}
          </section>
        </div>

        <section className="flex items-center gap-4">
          {/*Cart*/}
          <BsCart className="text-3xl" />

          {/* Avtar */}

          <img src={Testimonial1} className="w-8" />
        </section>
      </nav>
      <hr />
    </main>
  );
};

export default Navbar;
