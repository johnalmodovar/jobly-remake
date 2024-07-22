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

import { useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

import SearchForm from "../../containers/Form/Search";
import { links, dropdownLinks } from "./constants";
import { useUserStore } from "../../states/stores";
import { NavbarI } from "../../types";

export default function Navbar({ filter }: NavbarI) {
  const { logout } = useUserStore();
  const drawerRef = useRef<HTMLInputElement>(null);

  const handleDrawerClick = () => {
    if (typeof drawerRef.current === "undefined") return;
    drawerRef.current?.click();
  };

  return (
    <nav
      className="
        navbar
        drawer
        drawer-end
        bg-white
        shadow-md
        text-primary-content
        rounded-box
        w-full
        z-10
      "
    >
      <div className="navbar-start">
        <p className="text-xl pl-2">Jobly</p>
      </div>
      <div className="navbar-center">
        {filter && <SearchForm filter={filter} />}
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
                key={`${label}-${uuidv4()}`}
                to={href}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <div
              className="
                dropdown
                dropdown-bottom
                dropdown-end
              "
            >
              <div tabIndex={0} role="button">
                Profile
              </div>
              <ul
                tabIndex={0}
                className="
                  dropdown-content
                  menu
                  bg-white
                  rounded-box
                  z-[1]
                  w-52
                  p-2
                  shadow-md
                "
              >
                {dropdownLinks.map(({ label, href }) => (
                  <li>
                    <Link
                      aria-label={`Go to ${label} page`}
                      className="text-black"
                      key={`${label}-${uuidv4()}`}
                      to={href}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    aria-label="Logout of account"
                    className="text-black"
                    key={`Logout-${uuidv4()}`}
                    to="/"
                    onClick={logout}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        {/* mobile sidebar. */}
        <input
          id="my-drawer-4"
          type="checkbox"
          className="drawer-toggle"
          ref={drawerRef}
        />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-4"
            className="
              drawer-button
              btn
              btn-ghost
              text-xl
              lg:hidden
            "
          >
            <AiOutlineMenu />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          />
          <ul
            className="
              menu
              bg-white
              text-black
              min-h-full
              w-80
              p-4
              rounded-l-box
            "
          >
            {/* Sidebar content here */}
            {links.map(({ label, href }) => (
              <li>
                <NavLink
                  aria-label={`Go to ${label} page`}
                  className="
                  group
                  text-black
                  mr-2
                "
                  key={`${label}-${uuidv4()}`}
                  to={href}
                  onClick={handleDrawerClick}
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
                        key={`${label}-${uuidv4()}`}
                        to={href}
                        onClick={handleDrawerClick}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      aria-label="Logout of account"
                      className="text-black"
                      key={`Logout-${uuidv4()}`}
                      to="/"
                      onClick={logout}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
