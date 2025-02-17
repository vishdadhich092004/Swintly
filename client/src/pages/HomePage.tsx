import Hero from "@/components/Hero";
import { BackgroundBeams } from "@/components/ui/background-beams";

function HomePage() {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <BackgroundBeams className="opacity-70" />
    </div>
  );
}

export default HomePage;
