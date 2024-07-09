import { RouterType } from "./definitions";
import Homepage from "../containers/Homepage";

export const routerData: RouterType[] = [
  {
    path: "",
    title: "Home",
    element: <Homepage />,
  },
];
