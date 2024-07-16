/** App.
 *
 * @description
 * Main component for entire application. Holds all funcitonality.
 */

import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "./Router";
import Navbar from "./components/Navbar";
import { useAuthStore } from "./states/stores";

export default function App() {
  const { user, token, setUser, fetchUser } = useAuthStore();

  useEffect(() => {
    token ? fetchUser() : setUser;
  }, [token]);

  useEffect(() => {
    token
      ? localStorage.setItem("token", token)
      : localStorage.removeItem("token");
  }, [token]);

  return (
    <main className="bg-[#141550] min-h-screen">
      {user.isLoggedIn && <Navbar />}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </main>
  );
}
