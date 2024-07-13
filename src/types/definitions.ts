/** Definitions.
 *
 * @description
 * data types and interfaces used throughout the application.
 *
 */

/** Company and Job types/interfaces. */

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

export interface userI {
  data: {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    isAdmin: boolean;
  } | null;
  isLoggedIn: boolean;
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

/** API types/interfaces. */

export type endpointT = string;
export type dataT = {}; //TODO: FINISH WHEN WE FIND OUT WHAT IS INSIDE DATA.
export type methodT = "GET" | "POST" | "DELETE";
export type searchTermT = string;
export type jobIdT = number;

export interface getCompanyI {
  res: string;
}

/** State store types/interfaces. */
export type handleT = string | undefined;

export interface CompanyStoreI {
  company: CompanyI | null;
  companies: Array<CompanyI> | null;
  fetchCompany: (handle: handleT) => Promise<void>;
  fetchCompanies: () => Promise<void>;
}

export interface JobStoreI {
  jobs: Array<JobI> | null;
  fetchJobs: () => Promise<void>;
}
