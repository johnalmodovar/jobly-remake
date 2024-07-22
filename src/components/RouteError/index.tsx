/** RouteError.
 *
 * @description
 * Page that loads in when there is a route error or user is unauthorized.
 *
 * TODO: Add img and make it look better.
 */

import { useUserStore } from "../../states/stores";
import hero from "../../assets/hero.jpg";

export default function RouteError() {
  const { user } = useUserStore();

  return (
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
          bg-white
          card
          min-w-[30vw]
          min-h-[30vh]
        "
      >
        <div
          className="
            flex
            items-center
            justify-center
            card-body
            p-10
          "
        >
          {user.isLoggedIn && (
            <>
              <h2
                className="
                  text-4xl
                  card-title
                  text-center
                  text-black
                "
              >
                Sorry.
              </h2>
              <p
                className="
                  text-black
                  text-lg
                "
              >
                Hello World
              </p>
            </>
          )}
          <h2
            className="
              text-4xl
              card-title
              text-center
              text-black
            "
          >
            Sorry.
          </h2>
          <p
            className="
              text-black
              text-lg
            "
          >
            This page is unavailable.
          </p>
        </div>
      </div>
    </div>
  );
}
