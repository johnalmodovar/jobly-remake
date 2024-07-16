/** Global state management. */

import { create } from "zustand";
import { jwtDecode } from "jwt-decode";

import {
  CompanyStoreI,
  JobStoreI,
  AuthStoreI,
  TokenI,
  UserLoginI,
} from "../types";

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

export const useAuthStore = create<AuthStoreI>((set, get) => ({
  user: {
    data: null,
    isLoggedIn: false,
  },
  token: localStorage.getItem("token"),
  setUser: (userData) => set({ user: { ...userData, isLoggedIn: true } }),
  fetchUser: async () => {
    const token = get().token;

    if (token) {
      const { username } = jwtDecode<TokenI>(token);

      try {
        const res = await fetch(`${BASE_URL}/users/${username}`);
        const userData = await res.json();
        set({ user: { data: userData.data, isLoggedIn: true } });
      } catch (error) {
        console.error(error);
      }
    }
  },
  login: async ({ username, password }: UserLoginI) => {
    const body = {
      username: username,
      password: password,
    };
    const metaData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    const res = await fetch(`${BASE_URL}/auth/login`, metaData);
    const data = await res.json();
    set({ token: data.token });
  },
  logout: () => {
    set({ user: { data: null, isLoggedIn: false } });
    set({ token: null });
  },
}));
