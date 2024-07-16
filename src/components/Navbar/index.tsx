/** Navbar.
 *
 * @definition
 * Navbar of entire application.
 *
 * Props:
 * - logout: function that logs users out. (App)
 *
 * Local State:
 * - toggleMenu: state that tracks when users click on hamburger menu.
 *
 */

import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { links } from "./constants";
import { useAuthStore } from "../../states/stores";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { logout } = useAuthStore();

  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav
      className="
        navbar
        bg-white
        shadow-md
        text-primary-content
        rounded-md
      "
    >
      <div className="flex-1">
        <p className="text-xl pl-2">Jobly</p>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {links.map(({ label, href }) => (
            <li>
              <NavLink
                aria-label={`Go to ${label} page`}
                className="
                  group
                  text-black
                  mr-2
                "
                key={`${label}`}
                to={href}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <details>
              <summary>Profile</summary>
              <ul className="bg-white rounded-t-none">
                <li>
                  <a>Likes</a>
                </li>
                <li>
                  <Link to="/" onClick={logout}>
                    Logout
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </nav>
  );
}
