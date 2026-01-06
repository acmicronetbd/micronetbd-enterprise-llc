import PageHero from "@/components/common/PageHero";
import JobSeekersIntro from "@/components/job-seekers/JobSeekersIntro";
import WhyWorkWithUs from "@/components/job-seekers/WhyWorkWithUs";
import RolesWeRecruit from "@/components/job-seekers/RolesWeRecruit";
import JobSeekersCTA from "@/components/job-seekers/JobSeekersCTA";

export default function JobSeekersPage() {
  return (
    <>
      <PageHero
        title="Advance Your Salesforce Career"
        subtitle="For Job Seekers"
      />

      <JobSeekersIntro />
      <WhyWorkWithUs />
      <RolesWeRecruit />
      <JobSeekersCTA />
    </>
  );
}
