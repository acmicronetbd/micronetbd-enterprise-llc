import PageHero from "@/components/common/PageHero";
import Mission from "@/components/about/Mission";
import Values from "@/components/about/Values";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Dedicated to Salesforce Talent Excellence"
      />

      <div className="pt-16">
        <Mission />
        <Values />
      </div>
    </>
  );
}
