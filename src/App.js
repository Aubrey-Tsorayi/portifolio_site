import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/nav.component";
import Home from "./components/home.componet";
import Footer from "./components/footer.componet";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42"
      />
    </svg>
  );

  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
      />
    </svg>
  );

  const upArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      className="fill-white dark:fill-stone-900"
    >
      <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM7.994 9.422 10 6.938l2.01 2.484 2.008 2.484h-8.03z" />
    </svg>
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed p-1 z-10 right-20 top-4 bg-stone-700 text-lg rounded-md dark:bg-white"
      >
        {theme === "dark" ? sun : moon}
      </button>
      <button
        type="button"
        onClick={scrollToTop}
        className="fixed p-2 bg-stone-900 dark:bg-white rounded-md animate-bounce left-5 bottom-4"
      >
        {upArrow}
      </button>
      <div className="App bg-white text-stone-900 dark:bg-stone-900 dark:text-stone-300">
        <div className="max-w-5xl w-11/12 mx-auto">
          <Navbar />
          <Home />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
