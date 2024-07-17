/** Homepage.
 *
 * @description
 * Landing page for application.
 */

import { Navigate } from "react-router-dom";

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
                Jobly
              </h1>
              <p
                className="
                  py-6
                  text-2xl
                  text-white
                "
              >
                Find the perfect job that suits your skills!
              </p>
            </div>
            <div
              className="
                card
                bg-base-100
                w-full
                max-w-sm
                shrink-0
                shadow-2xl
              "
            >
              <LoginForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
