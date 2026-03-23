import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <NavBar />
        <Home />
      </div>
    },
    {
      path: "/about",
      element: (
        <div>
          <NavBar />
          <About />
        </div>
      ),
    },
    {
      path: "/contact",
      element: (
        <div>
          <NavBar />
          <Contact />
        </div>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
