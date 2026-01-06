import PageHero from "@/components/common/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactTaglines from "@/components/contact/ContactTaglines";

export const metadata = {
  title: "Contact Us | Micronetbd Enterprise LLC",
  description:
    "Get in touch with Micronetbd Enterprise LLC for your Salesforce staffing needs. Contact us for employers hiring or job seekers looking for opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let's Build Your Salesforce Team"
        subtitle="Your Salesforce Staffing Partner — The Right People. The Right Fit. Every Time."
      />

      <div className="bg-white">
        <ContactForm />
        <ContactFAQ />
        {/* <ContactTaglines /> */}
        <ContactInfo />
      </div>
    </>
  );
}
