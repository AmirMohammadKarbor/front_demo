import { useState } from "react";

interface LandingPageProps {
  onShowContent: () => void;
}

export default function LandingPage({ onShowContent }: LandingPageProps){
  const [showContent, setShowContent] = useState(false);

  const handleShow = () => {
    if (!showContent) {
      setShowContent(true);
      onShowContent(); 
    }
  };

  return (
    <div
      onMouseMove={handleShow}
      className="w-full h-screen background-gradient  flex items-center justify-center text-white transition-all duration-700"
    >
      {!showContent ? (
        <div className="flex flex-col items-center justify-center">
          <img
            src="src/assets/images/logo.png"
            alt="CodeArea Logo"
            className="w-1/10 h-1/10"
          />
        </div>
      ) : (
        <div className="flex min-h-screen items-center justify-center text-center">
          <img
            src="src/assets/images/laptop.png"
            alt="Laptop"
            className="w-1/2 max-w-sm "
          />
          <div className="w-1/2 text-center px-30">
            <h2 className="text-4xl font-bold text-brand-gradient mb-4">
              CodeArea چیه؟
            </h2>
            <p className="text-white leading-relaxed text-xl">
              ما با عشق به تکنولوژی و تمرکز بر جزئیات پروژه‌هایی می‌سازیم که مرز بین خلاقیت و
              فناوری رو از بین می‌برن. تیم ما باور داره هر خط کد می‌تونه تغییری ایجاد کنه —
              تغییری که تجربه‌ی دیجیتال رو هوشمندتر، زیباتر و مؤثرتر می‌کنه.
            </p>
            
          </div>
        </div>
      )}
    </div>
  );
}

 