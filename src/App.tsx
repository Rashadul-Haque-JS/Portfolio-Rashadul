import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="mx-auto max-w-5xl shadow-md h-full border sm:border-none md:border-none sm:rounded-lg md:rounded-lg pb-12">
      <Header />
      <Main />
    </div>
  );
}

export default App;
