import CallToAction from "./components/sections/CallToAction";
import CoreInitiatives from "./components/sections/CoreInitiatives";
import GovernanceFinance from "./components/sections/GovernanceFinance";
import HeroSection from "./components/sections/Hero";
import ImpactScalability from "./components/sections/ImpactScalability";
import ProblemStatement from "./components/sections/ProblemSolution";
import SolutionFramework from "./components/sections/SolutionFramework";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden">
     <HeroSection/>
     <ProblemStatement/>
     <SolutionFramework/>
     <CoreInitiatives/>
     <ImpactScalability/>
     <GovernanceFinance/>
     <CallToAction/>
    </main>
  );
}