/** Homepage.
 *
 * @description
 * Landing page for application.
 */

import { Link, Navigate } from "react-router-dom";

import { useUserStore } from "../../states/stores";
import hero from "../../assets/hero.jpg";
import LoginForm from "../Form/Login";

export default function Homepage() {
  const { user } = useUserStore();

  return (
    <>
      {user.isLoggedIn ? (
        <Navigate to="/companies" replace={true} />
      ) : (
        <div
          className="
            hero
            min-h-screen
          "
          style={{
            backgroundImage: `url(${hero})`,
          }}
        >
          <div
            className="
              hero-content
              flex-col
              md:flex-row
            "
          >
            <div
              className="
                text-center
                mx-10
                md:text-left
              "
            >
              <h1
                className="
                  text-5xl
                  font-bold
                  text-white
                "
              >
                Welcome to Jobly!
              </h1>
              <p
                className="
                  py-6
                  text-2xl
                  text-white
                "
              >
                Find the perfect job that suits your skills.
              </p>
            </div>
            <div
              className="
                card
                flex
                bg-base-100
                w-full
                max-w-sm
                shrink-0
                shadow-2xl
              "
            >
              <div className="card-body">
                <LoginForm />
                <div
                  className="
                    flex
                    justify-center
                    items-center
                    my-4
                  "
                >
                  <div className="w-60 h-px bg-gray-200 border-1 dark:bg-gray-700" />
                </div>
                <div
                  className="
                    flex
                    justify-center
                    items-center
                  "
                >
                  <Link
                    className="
                      btn
                      btn-primary
                      w-[320px]
                    "
                    to="/register"
                  >
                    Create Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
