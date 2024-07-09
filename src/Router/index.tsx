/** Router.
 *
 * @description
 * Router for entire application.
 */

import { Route, Routes } from "react-router-dom";

import { RouterType } from "./definitions";
import { routerData } from "./constants";

export default function Router() {
  const routes = routerData.map(({ path, title, element }: RouterType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{routes}</Routes>;
}
