import { createFileRoute } from "@tanstack/react-router";
import TopUtilityBar from "@/components/TopUtilityBar";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import LeadershipSection from "@/components/LeadershipSection";
import QuickServices from "@/components/QuickServices";
import KpiSection from "@/components/KpiSection";
import AboutSection from "@/components/AboutSection";
import DepartmentsSection from "@/components/DepartmentsSection";
import DoctorsSection from "@/components/DoctorsSection";
import NoticesSection from "@/components/NoticesSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import AcademicsSection from "@/components/AcademicsSection";
import InfrastructureSection from "@/components/InfrastructureSection";
import LatestEventsSection from "@/components/LatestEventsSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AIIMS Gorakhpur – All India Institute of Medical Sciences" },
      { name: "description", content: "AIIMS Gorakhpur: Premier healthcare, medical education & research institute under Ministry of Health & Family Welfare, Govt. of India. 30+ departments, 550+ beds." },
      { property: "og:title", content: "AIIMS Gorakhpur – Excellence in Healthcare, Education & Research" },
      { property: "og:description", content: "Premier autonomous medical institute serving Eastern UP & Bihar. Book appointments, find doctors, explore departments." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen">
      <TopUtilityBar />
      <SiteHeader />
      <HeroSection />
      <LeadershipSection />
      <QuickServices />
      <AboutSection />
      <DepartmentsSection />
      <DoctorsSection />
      <NoticesSection />
      <FacilitiesSection />
      <AcademicsSection />
      <LatestEventsSection />
      <InfrastructureSection />
      <ContactSection />
      <SiteFooter />
    </div>
  );
}
