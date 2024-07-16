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
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import SearchForm from "../../containers/Form/Search";
import { links, dropdownLinks } from "./constants";
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
        rounded-box
      "
    >
      <div className="navbar-start">
        <p className="text-xl pl-2">Jobly</p>
      </div>
      <div className="navbar-center">
        <SearchForm />
      </div>
      <div className="navbar-end">
        <ul
          className="
            lg:menu
            lg:menu-horizontal
            lg:px-2
            hidden
          "
        >
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
                {dropdownLinks.map(({ label, href }) => (
                  <li>
                    <Link
                      aria-label={`Go to ${label} page`}
                      className="text-black"
                      key={`${label}`}
                      to={href}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
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
