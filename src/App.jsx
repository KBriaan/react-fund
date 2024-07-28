import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import OurVision from "./components/OurVision/OurVision";
import OverviewCounter from "./components/OverviewCounter/OverviewCounter";

export default function App() {
  return (
    <>
    <main className="overflow-x-hidden dark:bg-gray-900 bg-white">
      <Navbar/>
      <Hero/>
      <OverviewCounter/>
      <OurVision/>
    </main>
    </>
  )
}