import MainSection from "../../components/main-section.jsx";

import PackagesSection from "../../components/packages-section";
import WeddingSection from "../../components/portfolio-section";
import ScrollSpy from "../../components/scrollspy";
import SocialProofSection from "../../components/social-proof-section";
import VendorsSection from "../../components/vendor-section.jsx";

export default function Home() {
  return (
    <>
      <ScrollSpy />

      <section id="home">
        <MainSection />
        <SocialProofSection />
      </section>

      <section id="weddings">
        <WeddingSection />
      </section>

      <section id="packages">
        <PackagesSection />
      </section>
      <section id="vendors">
        <VendorsSection />
      </section>
    </>
  );
}
