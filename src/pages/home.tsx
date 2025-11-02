import Header from "@/components/header";
import Hero from "@/components/hero";
import BenefitsAndProcess from "@/components/benefits-and-process";

import PricingSection from "@/components/pricing-section";
import StatisticsSection from "@/components/statistics-section";

import MedicationOptions from "@/components/medication-options";
import TrustIndicators from "@/components/trust-indicators";
import HowItWorks from "@/components/how-it-works";

import PatientResults from "@/components/patient-results";

import FAQ from "@/components/faq";

import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-medical-bg">
      <Header />
      <Hero />
      <BenefitsAndProcess />

      <PricingSection />
      <StatisticsSection />

      <MedicationOptions />
      <TrustIndicators />
      <HowItWorks />

      <PatientResults />

      <FAQ />
      <Footer />
    </div>
  );
}
