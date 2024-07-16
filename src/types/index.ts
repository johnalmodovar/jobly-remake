/** Definitions.
 *
 * @description
 * data types and interfaces used throughout the application.
 *
 */

/** Data types/interfaces. */

export interface CompanyI {
  handle: string;
  name: string;
  description: string;
  numEmployees: string;
  logoUrl?: string;
  jobs: Array<JobI>;
}

export interface JobI {
  id: number;
  title: string;
  salary?: string;
  equity?: string;
  companyHandle: string;
  companyName: string;
}

export interface UserI {
  data: {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    isAdmin: boolean;
  } | null;
  isLoggedIn: boolean;
}

export interface TokenI {
  username: string;
  isAdmin: boolean;
}

export interface UserLoginI {
  username: string;
  password: string;
}

export interface RouterI {
  title: string;
  path: string;
  element: JSX.Element;
}

/** Component types/interfaces. */

export interface JobDetailsI {
  job: JobI;
}

export interface CompanyCardI {
  company: CompanyI;
}

export interface CardListI {
  jobs: Array<JobI>;
}

/** Store types/interfaces. */

export interface CompanyStoreI {
  company: CompanyI | null;
  companies: Array<CompanyI> | null;
  fetchCompany: (handle: string | undefined) => Promise<void>;
  fetchCompanies: () => Promise<void>;
}

export interface JobStoreI {
  jobs: Array<JobI> | null;
  fetchJobs: () => Promise<void>;
}

export interface AuthStoreI {
  user: UserI;
  token: string | null;
  setUser: (userData: UserI) => void;
  fetchUser: () => Promise<void>;
  login: ({ username, password }: UserLoginI) => Promise<void>;
  logout: () => void;
}
