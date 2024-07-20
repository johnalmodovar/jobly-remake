/** Register.
 *
 * @desciption
 * Page where users can register to application.
 */

import { Navigate } from "react-router-dom";

import { useUserStore } from "../../states/stores";
import hero from "../../assets/hero.jpg";
import RegisterForm from "../Form/Register";

export default function Register() {
  const { user } = useUserStore();

  return (
    <>
      {user.isLoggedIn ? (
        <Navigate to="/companies" replace={true} />
      ) : (
        <div
          className="
            p-2
            hero
            min-h-screen
          "
          style={{
            backgroundImage: `url(${hero})`,
          }}
        >
          <div
            className="
              bg-base-100
              card
              p-5
              min-h-full
              min-w-full
              md:m-5
              md:min-h-fit
              md:min-w-[65vw]
              lg:min-w-[50vw]
            "
          >
            <div
              className="
                flex
                items-center
                justify-center
              "
            >
              <h2
                className="
                  pt-5
                  text-4xl
                  card-title
                  text-center
                "
              >
                Register
              </h2>
            </div>
            <div
              className="
                flex
                justify-center
                items-center
                mt-6
              "
            >
              <div className="w-9/12 md:w-10/12 lg:w-11/12 h-px bg-gray-200 border-1 dark:bg-gray-700" />
            </div>
            <div className="card-body">
              <RegisterForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
