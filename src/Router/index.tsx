/** Router.
 *
 * @description
 * Router for entire application.
 */

import { Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Homepage from "../containers/Homepage";
import { routerData } from "./constants";
import { useUserStore } from "../states/stores";
import Register from "../containers/Register";
import RouteError from "../components/RouteError";

export default function Router() {
  const { user } = useUserStore();

  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<RouteError />} />
      {user.isLoggedIn ? (
        <>
          {routerData.map(({ path, title, element }) => (
            <Route
              key={`${title}-${uuidv4()}`}
              path={`/${path}`}
              element={element}
            />
          ))}
        </>
      ) : (
        <Route path="/" element={<Homepage />} />
      )}
    </Routes>
  );
}
