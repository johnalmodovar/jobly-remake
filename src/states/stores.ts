/** Global state management and API calls. */

import { create } from "zustand";
import { jwtDecode } from "jwt-decode";

import {
  CompanyStoreI,
  JobStoreI,
  UserStoreI,
  TokenI,
  UserLoginI,
  UserRegisterI,
  EditProfileI,
} from "../types";

//TODO: after deploying backend, put URL here.
const BASE_URL = "http://localhost:3001";

export const useCompanyStore = create<CompanyStoreI>((set) => ({
  company: null,
  companies: [],
  fetchCompany: async (handle) => {
    const res = await fetch(`${BASE_URL}/companies/${handle}`);

    if (!res.ok) {
      console.error("API Error:", res.statusText, res.status);
      const { error } = await res.json();
      throw Array.isArray(error) ? error : [error];
    }

    const data = await res.json();
    set({ company: data.company });
  },
  fetchCompanies: async () => {
    const res = await fetch(`${BASE_URL}/companies`);

    if (!res.ok) {
      console.error("API Error:", res.statusText, res.status);
      const { error } = await res.json();
      throw Array.isArray(error) ? error : [error];
    }

    const data = await res.json();
    set({ companies: data.companies });
  },
}));

export const useJobStore = create<JobStoreI>((set) => ({
  jobs: [],
  fetchJobs: async () => {
    const res = await fetch(`${BASE_URL}/jobs`);

    if (!res.ok) {
      console.error("API Error:", res.statusText, res.status);
      const { error } = await res.json();
      throw Array.isArray(error) ? error : [error];
    }

    const data = await res.json();
    set({ jobs: data.jobs });
  },
}));

export const useUserStore = create<UserStoreI>((set, get) => ({
  user: {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    isAdmin: false,
    likes: [],
    isLoggedIn: false,
  },
  token: localStorage.getItem("token"),
  setUser: (userData) => set({ user: { ...userData, isLoggedIn: true } }),
  fetchUser: async () => {
    const token = get().token;

    if (token) {
      const { username } = jwtDecode<TokenI>(token);
      const res = await fetch(`${BASE_URL}/users/${username}`);

      if (!res.ok) {
        console.error("API Error:", res.statusText, res.status);
        const { error } = await res.json();
        throw Array.isArray(error) ? error : [error];
      }

      const userData = await res.json();
      set({ user: { ...userData.user, isLoggedIn: true } });
    }
  },
  login: async ({ username, password }: UserLoginI) => {
    const body = {
      username,
      password,
    };
    const metaData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    const res = await fetch(`${BASE_URL}/auth/login`, metaData);

    if (!res.ok) {
      console.error("API Error:", res.statusText, res.status);
      const { error } = await res.json();
      throw Array.isArray(error) ? error : [error];
    }

    const data = await res.json();
    set({ token: data.token });
  },
  register: async ({
    email,
    username,
    password,
    firstName,
    lastName,
  }: UserRegisterI) => {
    const body = {
      email,
      username,
      password,
      firstName,
      lastName,
    };
    const metaData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    const res = await fetch(`${BASE_URL}/auth/register`, metaData);

    if (!res.ok) {
      console.error("API Error:", res.statusText, res.status);
      const { error } = await res.json();
      throw Array.isArray(error) ? error : [error];
    }

    const data = await res.json();
    set({ token: data.token });
  },
  logout: () => {
    set({
      user: {
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        likes: [],
        isAdmin: false,
        isLoggedIn: false,
      },
    });
    set({ token: null });
  },
  editProfile: async ({
    firstName,
    lastName,
    email,
    username,
  }: EditProfileI) => {
    const body = {
      firstName,
      lastName,
      email,
    };
    const metaData = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    const res = await fetch(`${BASE_URL}/users/${username}`, metaData);

    if (!res.ok) {
      console.error("API Error:", res.statusText, res.status);
      const { error } = await res.json();
      throw Array.isArray(error) ? error : [error];
    }

    const data = await res.json();
    set({ user: { ...data, isLoggedIn: true } });
  },
  likeJob: async (jobId, username) => {
    const user = get().user;
    const body = {};
    const metaData = {
      method: "POST",
      headers: {
        "Content-Type": "applications/json",
      },
      body: JSON.stringify(body),
    };

    const res = await fetch(
      `${BASE_URL}/users/${username}/jobs/${jobId}`,
      metaData
    );

    if (!res.ok) {
      console.error("API Error:", res.statusText, res.status);
      const { error } = await res.json();
      throw Array.isArray(error) ? error : [error];
    }

    const jobData = await res.json();
    set({ user: { ...user, likes: [...user.likes, jobData.jobId] } });
  },
  unlikeJob: async (jobId, username) => {
    const user = get().user;
    const body = {};
    const metaData = {
      method: "DELETE",
      headers: {
        "Content-Type": "applications/json",
      },
      body: JSON.stringify(body),
    };

    const res = await fetch(
      `${BASE_URL}/users/${username}/jobs/${jobId}`,
      metaData
    );

    if (!res.ok) {
      console.error("API Error:", res.statusText, res.status);
      const { error } = await res.json();
      throw Array.isArray(error) ? error : [error];
    }

    const jobData = await res.json();
    set({
      user: { ...user, likes: user.likes.filter((id) => id !== jobData.jobId) },
    });
  },
}));
