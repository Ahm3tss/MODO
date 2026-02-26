import { Navigation } from "@/components/Navigation";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GlobalRails } from "@/components/GlobalRails";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalRails />
      <SmoothScroll />
      <Navigation />
      {children}
      <Footer />
      <WhatsAppButton />
    </>
  );
}
