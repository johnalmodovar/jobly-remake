/** Definitions and data types used throughout application. */

/** Company and Job types/interfaces. */

export interface CompanyI {
  handle: string;
  name: string;
  description: string;
  numEmployees: string;
  logoUrl?: string;
  jobs?: Array<JobI>;
}

export interface JobI {
  id: number;
  title: string;
  salary?: string;
  equity?: string;
  companyHandle: string;
  companyName: string;
}

/** Component types/interfaces. */

export interface JobDetailsI {
  job: JobI;
}

export interface CompanyCardI {
  company: CompanyI;
}

/** API types/interfaces. */

export type endpointT = string;
export type dataT = {}; //TODO: FINISH WHEN WE FIND OUT WHAT IS INSIDE DATA.
export type methodT = "GET" | "POST" | "DELETE";
export type handleT = string | undefined;
export type searchTermT = string;
export type jobIdT = number;

export interface getCompanyI {
  res: string;
}
