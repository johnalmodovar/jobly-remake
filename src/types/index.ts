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
  id: string;
  title: string;
  salary?: string;
  equity?: string;
  companyHandle: string;
  companyName: string;
}

export interface UserI {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  likes: Array<string>;
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

export interface UserRegisterI {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface EditProfileI {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
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

export interface AlertI {
  isError: boolean;
  message: string;
}

export interface NavbarI {
  filter?: (searchData: string) => void;
}

/** Store types/interfaces. */

export interface CompanyStoreI {
  company: CompanyI | null;
  companies: Array<CompanyI> | [];
  fetchCompany: (handle: string | undefined) => Promise<void>;
  fetchCompanies: (searchData?: string) => Promise<void>;
}

export interface JobStoreI {
  jobs: Array<JobI> | [];
  fetchJobs: (searchData?: string) => Promise<void>;
}

export interface UserStoreI {
  user: UserI;
  token: string | null;
  setUser: (userData: UserI) => void;
  fetchUser: () => Promise<void>;
  login: ({ username, password }: UserLoginI) => Promise<void>;
  register: ({
    email,
    username,
    password,
    firstName,
    lastName,
  }: UserRegisterI) => Promise<void>;
  logout: () => void;
  editProfile: ({
    firstName,
    lastName,
    email,
    username,
  }: EditProfileI) => Promise<void>;
  likeJob: (jobId: string, username: string) => Promise<void>;
  unlikeJob: (jobId: string, username: string) => Promise<void>;
}
