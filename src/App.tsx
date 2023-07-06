import React, { useEffect, useState } from "react";
import ReactGA from 'react-ga';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_MEASUREMENT_ID!);
      ReactGA.pageview(window.location.pathname + window.location.search);
      console.log("GA initialized ", process.env.REACT_APP_GOOGLE_ANALYTICS_MEASUREMENT_ID!);
      
    }

    const handleScroll = () => {
      if (window.pageYOffset > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mx-auto w-3/4 sm:w-full md:w-full lg:w-full shadow-lg h-full bg-white rounded-lg overflow-hidden mt-0 sm:mt-0 md:mt-0 lg:mt-0">
      <Header />
      <Main />
      <Footer />

      {showButton && (
        <button
          className="fixed bottom-4 right-4 bg-[#002536] hover:bg-[#0C334A] text-white px-4 py-2 rounded-full shadow"
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 17a1 1 0 01-1-1V5.414l-3.293 3.293a1 1 0 11-1.414-1.414l5-5a.997.997 0 011.414 0l5 5a1 1 0 01-1.414 1.414L11 5.414V16a1 1 0 01-1 1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;
