import { Suspense, useState } from "react";
import TechnologySection from "./Components/Technology/TechnologySection";
import type { TechDataType } from "./Type/Type";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import YourStack from "./Components/YourStack/YourStack";
import { ToastContainer } from "react-toastify";

const techDataPromise = async (): Promise<TechDataType[]> => {
  const response = await fetch("/technology.json");
  const data = await response.json();
  return data;
};

function App() {
  
  const [addedToStack, setAddedToStack] = useState<TechDataType[]>([]);

  return (
    <div className=" max-w-7xl mx-auto px-4">
      <Navbar />
      <Hero />
      <ToastContainer/>
      <div>
        <div>
          <h2 className="text-4xl font-bold">
            Explore the
            <span className="bg-linear-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p>Pick one technology per category to build your ideal stack.</p>
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <Suspense
              fallback={
                <svg
                  className="mr-3 size-5 animate-spin ..."
                  viewBox="0 0 24 24"
                ></svg>
              }
            >
              <TechnologySection
                techDataPromise={techDataPromise()}
                addedToStack={addedToStack}
                setAddedToStack={setAddedToStack}
              />
            </Suspense>
          </div>
          <div className="col-span-1 mt-4">
            <YourStack addedToStack={addedToStack} 
            setAddedToStack={setAddedToStack}  />
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default App;
