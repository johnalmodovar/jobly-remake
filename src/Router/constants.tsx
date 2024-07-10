import { RouterType } from "./definitions";
import Homepage from "../containers/Homepage";
import CompanyList from "../containers/Company/CompanyList";

export const routerData: RouterType[] = [
  {
    path: "",
    title: "home",
    element: <Homepage />,
  },
  {
    path: "/companies",
    title: "companies",
    element: <CompanyList />,
  },
];
