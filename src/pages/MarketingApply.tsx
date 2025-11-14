import React, { useRef } from "react";

function MarketingApply() {
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
          استخدام متخصص بازاریابی دیجیتال
        </h1>
        </div>
        <button
        onClick={() => history.back()}
        > 
          <img src="/images/leftLogo.png" alt="back" className="back-btn" />
        </button>
      </header>
      <div className="px-5">
      <section className="max-w-2xl mb-10">
        <h2 className="text-xl font-extrabold mb-4">مهارت‌های مورد نیاز</h2>
        <div className="px-5">
        <p className="text-gray-300 leading-8">
             • تسلط بر تدوین و اجرای استراتژی دیجیتال مارکتینگ
        </p>
        <p className="text-gray-300 leading-8">
             • آشنایی کامل با SEO و تولید محتوا

        </p>
        <p className="text-gray-300 leading-8">
             • توانایی اجرای کمپین‌های تبلیغاتی در Google Ads و Meta Ads
        </p>
        <p className="text-gray-300 leading-8">
             • تجربه در بازاریابی شبکه‌های اجتماعی
        </p>
        <p className="text-gray-300 leading-8">
             • توانایی تحلیل داده با ابزارهایی مثل Google Analytics و Search Console
        </p>
        <p className="text-gray-300 leading-8">
             • آشنایی با اصول Brand Positioning و Marketing Funnel
        </p>
        <p className="text-gray-300 leading-8">
             • توانایی برنامه‌ریزی، گزارش‌نویسی و ارائه نتایج
        </p>
        </div>
      </section>

      <section className="max-w-2xl mb-10">
        <h2 className="text-xl font-extrabold mb-4">مسئولیت‌ها</h2>
        <div className="px-5">
        <p className="text-gray-300 leading-8">
             • برنامه‌ریزی و اجرای کمپین‌های دیجیتال
        </p>
        <p className="text-gray-300 leading-8">
             • مدیریت شبکه‌های اجتماعی برند
        </p>
        <p className="text-gray-300 leading-8">
             • تدوین تقویم محتوایی و استراتژی رشد
        </p>
        <p className="text-gray-300 leading-8">
             • تحلیل عملکرد کمپین‌ها و ارائه گزارش
        </p>
        <p className="text-gray-300 leading-8">
             • پیشنهاد و اجرای راهکارهای بهینه‌سازی (Optimization)

        </p>
        <p className="text-gray-300 leading-8">
             • همکاری با تیم طراحی برای تولید محتواهای بصری و تبلیغاتی
        </p>
        </div>
      </section>

      <section className="max-w-2xl mb-10">
        <h2 className="text-xl font-extrabold mb-4">مهارت‌های تدریجی</h2>
        <div className="px-5">
        <p className="text-gray-300 leading-8">
             • تجربه در Email Marketing و اتوماسیون مارکتینگ
        </p>
        <p className="text-gray-300 leading-8">
             • آشنایی با ابزارهای طراحی محتوای ساده (Canva یا مشابه)
        </p>
        <p className="text-gray-300 leading-8">
             • توانایی مدیریت بودجه تبلیغاتی
        </p>
        <p className="text-gray-300 leading-8">
             • مهارت در Copywriting / Writing Ads & Captions
        </p>
        </div>
      </section>

      <section className="max-w-2xl mb-16">
        <h2 className="text-xl font-extrabold mb-4">درباره ما</h2>
        <div className="px-5">
        <p className="text-gray-300 leading-8 text-justify">
          تیم <span className="font-semibold text-white">CodeArea</span> مجموعه‌ای از طراحان،
          توسعه‌دهندگان و متخصصان فناوری است که با هدف ایجاد راه‌حل‌های دیجیتال خلاقانه و هوشمند
          تشکیل شده است. ما روی پروژه‌هایی کار می‌کنیم که مرز بین طراحی و فناوری را از بین می‌برند.
        </p>
        </div>
      </section>

      <section className="max-w-2xl mb-10">
        <h2 className="text-xl font-extrabold mb-4">حقوق و شرایط مالی</h2>
        <div className="px-5">
        <p className="text-gray-300 leading-8">
            به صورت پروژه ای (شروع از  ۱۵میلیون تومان به ازای هر پروژه بر اساس سطح مهارت )
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

export default MarketingApply;
