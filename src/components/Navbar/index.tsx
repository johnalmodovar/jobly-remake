/** Navbar.
 *
 * @definition
 * Navbar of entire application.
 *
 * Props:
 * - logout: function that logs users out. (App)
 *
 * State:
 * - toggleMenu: state that tracks when users click on hamburger menu.
 */

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { links } from "./constants";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav
      className="
        bg-white
        fixed
        navbar
        opacity-90
        shadow-md
        top-0
        z-10
      "
    >
      <div className="navbar-start">
        <a className="text-black" href="#">
          Joblify
        </a>
      </div>
      <div className="navbar-center">
        <div
          className="
            gap-8
            hidden
            items-center
            lg:flex
          "
        >
          {links.map(({ label, href }) => (
            <a
              aria-label={`Go to ${label} section`}
              className="
                group
                inline-block
                text-black
                text-lg
              "
              key={`${label}-${uuidv4()}`}
              href={href}
            >
              {label}
              <div
                className="
                  bg-gray-700
                  duration-500
                  group-hover:w-full
                  h-[2px]
                  transition-all
                  w-0
                "
              />
            </a>
          ))}
        </div>
      </div>
      <div className="navbar-end">
        <div
          className="
            flex
            justify-end
            lg:hidden
            p-5
            text-3xl
          "
        >
          {toggleMenu ? (
            <button
              arial-label="close navigation bar menu"
              className="hover:text-gray-700 text-black"
              onClick={handleClick}
            >
              <AiOutlineClose />
            </button>
          ) : (
            <button
              arial-label="open navigation bar menu"
              className="hover:text-gray-700 text-black"
              onClick={handleClick}
            >
              <AiOutlineMenu />
            </button>
          )}
        </div>
        <div
          className={`
            bg-white
            bottom-0
            duration-500
            fixed
            lg:hidden
            overflow-y-auto
            pl-4
            py-24
            ${toggleMenu ? "left-0" : "left-[-100%]"}
            top-20
            w-full
          `}
        >
          {links.map(({ label, href }) => (
            <a
              aria-label={`Go to ${label} section`}
              className="
                block
                hover:bg-gray-700
                hover:rounded-xl
                hover:text-white
                hover:w-[98%]
                px-3
                py-7
                text-black
              "
              href={href}
              onClick={handleClick}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
