import { Suspense } from "react";
import TechnologySection from "./Components/Technology/TechnologySection";
import type { DataType } from "./Type/Type";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

const techDataPromise = async (): Promise<DataType[]> => {
  const response = await fetch("/technology.json");
  const data = response.json();
  return data;
};

function App() {
  return<div className=" shadow-2xl max-w-7xl mx-auto">
    <Navbar />
    <Hero />
    <div>
      <Suspense
        fallback={
          <svg
            className="mr-3 size-5 animate-spin ..."
            viewBox="0 0 24 24"
          ></svg>
        }
      >
        <TechnologySection techDataPromise={techDataPromise()} />
      </Suspense>
    </div>
  </div>;
}

export default App;
