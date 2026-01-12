import Hero from "@/components/Home/Hero";
import ValueProposition from "@/components/Home/ValueProposition";
import Services from "@/components/Home/Services";
import Stats from "@/components/Home/Stats";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main>
      <Hero />
      <ValueProposition />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Toaster />
    </main>
  );
}
