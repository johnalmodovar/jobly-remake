/** Global state management. */

import { create } from "zustand";
// import { jwtDecode } from "jwt-decode";

import { CompanyStoreI, JobStoreI } from "../utils/definitions";

//TODO: after deploying backend, put URL here.
const BASE_URL = "http://localhost:3001";

export const useCompanyStore = create<CompanyStoreI>((set) => ({
  company: null,
  companies: null,
  fetchCompany: async (handle) => {
    const res = await fetch(`${BASE_URL}/companies/${handle}`);
    const data = await res.json();
    set({ company: data.company });
  },
  fetchCompanies: async () => {
    const res = await fetch(`${BASE_URL}/companies`);
    const data = await res.json();
    set({ companies: data.companies });
  },
}));

export const useJobStore = create<JobStoreI>((set) => ({
  jobs: null,
  fetchJobs: async () => {
    const res = await fetch(`${BASE_URL}/jobs`);
    const data = await res.json();
    set({ jobs: data.jobs });
  },
}));

// export const useUserStore = create<UserStoreI>()((set) => ({
//   user: {
//     data: null,
//     isLoggedIn: false,
//   },
//   setUser: (user: userI) => set({ user: user }),
// }));
