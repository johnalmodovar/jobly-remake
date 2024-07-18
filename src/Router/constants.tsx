import { RouterI } from "../types";

import CompanyList from "../containers/Company/CompanyList";
import CompanyPage from "../containers/Company/CompanyPage";
import JobList from "../containers/Job/JobList";
import SettingsPage from "../containers/UserProfile/SettingsPage";
import JobLikes from "../containers/UserProfile/JobLikes";

export const routerData: RouterI[] = [
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
  {
    path: "/jobs",
    title: "jobs",
    element: <JobList />,
  },
  {
    path: "/settings",
    title: "settings",
    element: <SettingsPage />,
  },
  {
    path: "/likes",
    title: "likes",
    element: <JobLikes />,
  },
];
