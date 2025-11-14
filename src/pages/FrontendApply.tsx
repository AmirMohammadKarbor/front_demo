import React, { useRef } from "react";

function FrontendApply() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  
    const API_URL = import.meta.env.VITE_API_URL_RESUME || "https://httpbin.org/post";
  
    const handleButtonClick = () => {
      fileInputRef.current?.click();
    };
  
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;
  
      console.log("📂 فایل انتخاب‌شده:", file.name);
      console.log("🌐 آدرس API:", API_URL);
  
      try {
        const formData = new FormData();
        formData.append("resume", file);
  
        const response = await fetch(API_URL, {
          method: "POST",
          body: formData,
        });
  
        if (!response.ok) {
          throw new Error("❌ خطا در آپلود فایل");
        }
  
        const result = await response.json();
        console.log("✅ آپلود موفق:", result);
        alert("رزومه با موفقیت ارسال شد ✅");
      } catch (error) {
        console.error("⚠️ خطا در ارسال فایل:", error);
        alert("ارسال فایل با مشکل مواجه شد ❌");
      }
    };

  return (
    <div
      dir="rtl"
      className="min-h-screen text-white flex flex-col px-90 py-5 font-persian background-gradient"
    >
      <header className="flex justify-between items-center  py-8 border-b border-white mb-10">
        <div className="flex item-center ">
        <img src="/images/icons-person.png"className="w-[45px] h-[45px]"/>
        <h1 className="text-3xl font-bold text-white text-right mt-4">
          استخدام توسعه‌دهنده فرانت‌اند
        </h1>
        </div>

        <button
        onClick={() => history.back()}
        > 
          <img src="/images/leftLogo.png" alt="back" className="back-btn" />
        </button>
      </header>

      <div className="px-5">
      <section className="max-w-2xl mb-10 ">
        <h2 className="text-2xl font-extrabold mb-4">مهارت‌های مورد نیاز</h2>
        <div className="px-5">
        <p className="text-gray-300 leading-8">
             • تسلط کامل بر React.js
        </p>
        <p className="text-gray-300 leading-8">
             • آشنایی با TypeScript
        </p>
        <p className="text-gray-300 leading-8">
             • تجربه در State Management (Redux یا Zustand)
        </p>
        <p className="text-gray-300 leading-8">
             • مهارت در HTML/CSS و Tailwind یا Styled Components
        </p>
        <p className="text-gray-300 leading-8">
             • تجربه کار با REST API / GraphQL
        </p>
        <p className="text-gray-300 leading-8">
             • آشنایی با Responsive & Pixel-Perfect Implementation
        </p>
        <p className="text-gray-300 leading-8">
             • تسلط روی Git و مدیریت پروژه با تیم
        </p>
        </div>
      </section>

      <section className="max-w-2xl mb-10">
        <h2 className="text-2xl font-extrabold mb-4">مسئولیت‌ها</h2>
        <div className="px-5">
        <p className="text-gray-300 leading-8">
             • پیاده‌سازی رابط‌ کاربری از روی طراحی‌های UI/UX
        </p>
        <p className="text-gray-300 leading-8">
             • توسعه کامپوننت‌های قابل استفاده مجدد و ساختار‌مند

        </p>
        <p className="text-gray-300 leading-8">
             • همکاری با بک‌اند برای اتصال سرویس‌ها و API

        </p>
        <p className="text-gray-300 leading-8">
             • بهینه‌سازی عملکرد و سرعت صفحات
        </p>
         <p className="text-gray-300 leading-8">
             • بررسی، تست و رفع باگ‌ها
        </p>
        </div>
      </section>

      <section className="max-w-2xl mb-10">
        <h2 className="text-2xl font-extrabold mb-4">مهارت‌های تدریجی</h2>
        <div className="px-5">
        <p className="text-gray-300 leading-8">
             • تجربه با Next.js

        </p>
        <p className="text-gray-300 leading-8">
             • آشنایی با اصول UX و طراحی کامپوننتی
        </p>
        <p className="text-gray-300 leading-8">
             • توانایی کار با WebSocket / real-time apps
        </p>
        <p className="text-gray-300 leading-8">
             • تجربه در unit testing (Jest / RTL)
        </p>
        </div>
      </section>

      <section className="max-w-2xl mb-16">
        <h2 className="text-2xl font-extrabold mb-4">درباره ما</h2>
        <div className="px-5">
        <p className="text-gray-300 leading-8 text-justify">
          تیم <span className="font-semibold text-white">CodeArea</span> مجموعه‌ای از طراحان،
          توسعه‌دهندگان و متخصصان فناوری است که با هدف ایجاد راه‌حل‌های دیجیتال خلاقانه و هوشمند
          تشکیل شده است. ما روی پروژه‌هایی کار می‌کنیم که مرز بین طراحی و فناوری را از بین می‌برند.
        </p>
        </div>
      </section>

      <section className="max-w-2xl mb-10">
        <h2 className="text-2xl font-extrabold mb-4">حقوق و شرایط مالی</h2>
        <div className="px-5">
        <p className="text-gray-300 leading-8">
            پروژه‌ای، حدود ۴۰ میلیون تومان در ماه<br/>(با امکان تبدیل به همکاری بلندمدت در صورت عملکرد مناسب)

        </p>
        </div>
      </section>
      </div>
      <div className="max-w-full flex flex-col items-center justify-center my-20">
        <button
        onClick={handleButtonClick}
        className="flex items-center gap-x-2 px-6 py-5 bg-white text-black rounded-full hover:bg-black hover:text-white transition-all shadow-md hover:shadow-blue-500/50"
        >
        <img src="/images/icons-upload.png" alt="upload" className="w-6 h-6" />
        <span>آپلود رزومه</span>
        </button>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
          className="hidden"
        />
      </div>
    </div>
  );
}

export default FrontendApply;
