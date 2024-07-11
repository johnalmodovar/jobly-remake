/** Definitions and data types used throughout application. */

export interface CompanyI {
  company: {
    handle: string;
    name: string;
    description: string;
    numEmployees: string;
    logoUrl: string;
  };
}

export interface JobI {
  job: {
    id: number;
    title: string;
    salary?: string;
    equity?: string;
    companyHandle: string;
    companyName: string;
  };
}
