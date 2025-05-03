import CTA from "@/components/home/CTA";
import Hero from "@/components/home/hero";
import Recent from "@/components/home/recent";
import GAListener from "./GalListener";

export default function Home() {
  return (
    <main className="max-w-7xl space-y-6 lg:space-y-10 mx-auto p-4 lg:px-6">
      <GAListener />
      <Hero />
      <Recent />
      <CTA />
    </main>
  );
}
