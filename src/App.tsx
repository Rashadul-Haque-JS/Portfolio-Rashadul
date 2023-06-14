import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mx-auto max-w-5xl shadow-md h-full bg-white rounded-lg overflow-hidden mt-8 sm:mt-0">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
