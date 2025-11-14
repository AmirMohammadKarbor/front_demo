import { FC } from "react";
import { Link } from "react-router-dom";

interface JobCardProps {
  title: string;
  salary: string;
  link: string; 
}

const JobCard: FC<JobCardProps> = ({ title, salary, link }) => {
  return (
    <div className="font-persian bubble-bg w-[682px] h-[190px] rounded-2xl p-6 shadow-md w-full max-w-xl mx-auto mb-6 flex justify-between items-center border-white border-r-3">
      <div className="text-right">
        <h2 className="text-white text-2xl font-bold mb-2">{title}</h2>
        <p className="text-white text-base">قرارداد: پاره وقت</p>
        <p className="text-white text-base mt-1">حقوق: {salary} تومان در ماه</p>
      </div>
      <Link
        to={link}
        className="bg-white text-black font-semibold px-4 py-3 rounded-full transition hover:bg-black hover:text-white hover:cursor-pointer"
      >
        ارسال رزومه
      </Link>
    </div>
  );
};

export default JobCard;
