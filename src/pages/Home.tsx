// src/pages/Home.tsx
import { useState } from "react";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import ExpertiseSection from "../components/ExpertiseSection";
import ContactBridge from "../components/ContactBridge";
import Footer from "../components/Footer";

function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <div className="min-h-screen">
        {showContent && <Header />}

        <LandingPage onShowContent={() => setShowContent(true)} />
      
      </div>
      <ExpertiseSection />
      <ContactBridge />
      <Footer />
    </>
  );
}

export default Home;
