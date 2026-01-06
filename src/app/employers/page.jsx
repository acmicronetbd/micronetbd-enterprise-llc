import PageHero from "@/components/common/PageHero";
import EmployersIntro from "@/components/employers/EmployersIntro";
import WhatSetsUsApart from "@/components/employers/WhatSetsUsApart";
import EmployersCTA from "@/components/employers/EmployersCTA";

export default function EmployersPage() {
  return (
    <>
      <PageHero
        title="Find Certified Salesforce Talent Fast"
        subtitle="For Employers"
      />

      <EmployersIntro />
      <WhatSetsUsApart />
      <EmployersCTA />
    </>
  );
}
