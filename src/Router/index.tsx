/** Router.
 *
 * @description
 * Router for entire application.
 */

import { Route, Routes } from "react-router-dom";

import Homepage from "../containers/Homepage";
import { routerData } from "./constants";
import { useUserStore } from "../states/stores";

export default function Router() {
  const { user } = useUserStore();

  return (
    <Routes>
      <Route path="*" element={<p>Not Found Placeholder.</p>} />
      {user.isLoggedIn ? (
        <>
          {routerData.map(({ path, title, element }) => (
            <Route key={title} path={`/${path}`} element={element} />
          ))}
        </>
      ) : (
        <Route path="/" element={<Homepage />} />
      )}
    </Routes>
  );
}
