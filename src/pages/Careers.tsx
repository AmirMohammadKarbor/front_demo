import JobCard from "../components/JobCard";
import Footer from "../components/Footer";

export default function Careers() {
  return (
    <>
      <div className="font-persian min-h-screen flex flex-col items-center text-center p-8 background-gradient relative">
        <button
          onClick={() => history.back()}
          className=" text-8xl mb-4 self-start text-white absolute top-10 left-70 hover:cursor-pointer"
        >
          <img src="/images/leftLogo.png" alt="back" className="back-btn"/>
        </button>

        <h1 className="text-5xl font-extrabold text-white mb-7">به تیم ما بپیوندید</h1>
        <p className="text-white mb-18 text-2xl">
          ما در <span className="text-white font-semibold">CodeArea</span> به دنبال افراد بااستعداد و پرانرژی هستیم تا در کنار هم آینده‌ی دنیای دیجیتال را بسازیم.
        </p>

        <JobCard title="طراح UI/UX" salary="25,000,000" link="/hiring/careers/ui-ux" />
        <JobCard title="توسعه‌دهنده فرانت‌اند" salary="40,000,000" link="/hiring/careers/frontend" />
        <JobCard title="متخصص بازاریابی دیجیتال" salary="15,000,000" link="/hiring/careers/marketing" />
        <JobCard title=" توسعه دهنده Flutter" salary="40,000,000" link="/hiring/careers/flutter" />
      </div>
    </>
  );
}
