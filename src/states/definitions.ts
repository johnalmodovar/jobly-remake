/** Definitions for global states. */

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

export interface UserStoreI {
  user: userI;
  setUser: (user: userI) => void;
}
