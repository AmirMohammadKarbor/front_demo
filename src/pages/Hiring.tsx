import React from "react";
import { Link } from "react-router-dom";

const Hiring: React.FC = () => {
  return (
    <section className="min-h-screen background-gradient text-white flex flex-col items-center justify-center px-6 py-16">
      <h1 className="english text-5xl font-extrabold mb-8 text-center ">
        WE ARE <br/>
         <span className="text-7xl text-brand-gradient ">HIRING!</span>
      </h1>

      <div className="font-persian relative flex flex-col items-center justify-center mt-10">
        <div className="flex items-center justify-center gap-12 flex-wrap">

          
          <div className="backdrop-blur-md text-center text-white px-6 py-10 w-64 shadow-md bubble-bg rounded-[70px_70px_70px_0px] mb-64">
            <p>اگر فکر می‌کنی جای تو اینجاست <br/> منتظریم تا به ما ملحق شی!</p>
          </div>
          <img
            src="src/assets/images/hiring-people.png"
            alt="Team Hiring"
            className="w-[450px] object-contain rounded-[50px] "
          />
          <div className="background-textes backdrop-blur-md text-center text-white px-4 py-12 w-75 shadow-md bubble-bg rounded-[70px_70px_0px_70px] mb-64">
            <p>ما دنبال افراد خلاق و پرانرژی هستیم <br/> تا در کنار هم <br/>آینده دیجیتال رو بسازیم</p>
          </div>
          
        </div>

        <p className="mt-16 text-2xl font-medium text-center">
          همین حالا اقدام کن!
        </p>

        <Link
          to="/hiring/careers"
          className="mt-10 px-3 py-7 rounded-full font-bold text-xl text-white  bg-button-gradient transition-all shadow-lg "
        >
          به ما بپیوندید
        </Link>
      </div>
    </section>
  );
};

export default Hiring;
