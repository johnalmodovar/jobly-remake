/** App.
 *
 * @description
 * Main component for entire application. Holds all funcitonality.
 */

// import { useState } from 'react'

import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
