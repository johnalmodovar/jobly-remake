import { RouterType } from "./definitions";
import Homepage from "../containers/Homepage";
import CompanyList from "../containers/Company/CompanyList";
import CompanyPage from "../containers/Company/CompanyPage";

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
  {
    path: "/companies/:handle",
    title: "company page",
    element: <CompanyPage />,
  },
];
