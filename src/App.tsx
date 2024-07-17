/** App.
 *
 * @description
 * Main component for entire application. Holds all funcitonality.
 */

import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "./Router";
import Navbar from "./components/Navbar";
import { useUserStore } from "./states/stores";

export default function App() {
  const { user, token, setUser, fetchUser } = useUserStore();

  useEffect(() => {
    if (token) fetchUser();
  }, [token]);

  useEffect(() => {
    token
      ? localStorage.setItem("token", token)
      : localStorage.removeItem("token");
  }, [token]);

  return (
    <main className="bg-[#141550] min-h-screen">
      <BrowserRouter>
        {user.isLoggedIn && <Navbar />}
        <Router />
      </BrowserRouter>
    </main>
  );
}
