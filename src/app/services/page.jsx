import PageHero from "@/components/common/PageHero"
import AISolutions from "@/components/services/AISolutions"
import ContractToHire from "@/components/services/ContractToHire"
import FullTimePlacement from "@/components/services/FullTimePlacement"
import ManagedStaffing from "@/components/services/ManagedStaffing"
import PlacementProcess from "@/components/services/PlacementProcess"
import RolesWePlace from "@/components/services/RolesWePlace"


export const metadata = {
  title: 'Services | Micronetbd Enterprise LLC',
  description:
    'Salesforce full-time placement, managed staffing, and contract-to-hire services.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Salesforce Staffing Services"
        subtitle="Flexible hiring solutions built for growing Salesforce teams"
      />

      <div className="pt-16">
        <FullTimePlacement />
        <RolesWePlace/>
        <PlacementProcess />
        <ManagedStaffing />
        <ContractToHire />
        <AISolutions />
      </div>
    </>
  )
}
