import React from "react";
import { motion } from "framer-motion";

interface ExpertiseItem {
  title: string;
  description: string;
}

const expertiseData: ExpertiseItem[] = [
  {
    title: "امنیت سایبری",
    description: "محافظت از داده‌ها و سیستم‌ها با راهکارهای امنیتی پیشرفته.",
  },
  {
    title: "طراحی وب",
    description: "طراحی سایت‌های مدرن، سریع و کاربردی.",
  },
  {
    title: "سرویس‌های مبتنی بر ابر",
    description: "ارائه سرویس‌های ابری ایمن و مقیاس‌پذیر.",
  },
  {
    title: "سیستم‌های هوشمند",
    description: "توسعه سیستم‌های هوشمند مبتنی بر هوش مصنوعی.",
  },
];

const ExpertiseSection: React.FC = () => {
  return (
    <section
      id="specialities"
      className="min-h-screen background-gradient flex flex-col items-center justify-center  p-8"
    >
      <h2 className="text-4xl font-extrabold mb-20 text-brand-gradient text-transparent">
        تخصص ما
      </h2>

      <div className="flex flex-col items-center gap-9 ">
        <ExpertiseCard
          item={expertiseData[0]}
          animation={{ y: -100, opacity: 20 }}
          delay={0.1}
        />

        <div className="flex flex-col md:flex-row gap-73">
          <ExpertiseCard
            item={expertiseData[1]}
            animation={{ x: 150, opacity: 0 }}
            delay={0.1}
          />

          <ExpertiseCard
            item={expertiseData[2]}
            animation={{ x: -150, opacity: 0 }}
            delay={0.1}
          />
        </div>

        <ExpertiseCard
          item={expertiseData[3]}
          animation={{ y: 100, opacity: 0 }}
          delay={0.1}
        />
      </div>
    </section>
  );
};

interface CardProps {
  item: ExpertiseItem;
  animation: { x?: number; y?: number; opacity?: number };
  delay?: number;
}

const ExpertiseCard: React.FC<CardProps> = ({ item, animation, delay = 0 }) => {
  return (
    <motion.div
      initial={animation}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      transition={{
         type: "tween",
         ease: "easeInOut",
         duration: 1,
         delay,
      }}
      viewport={{ once: true, amount: 0.3 }} // وقتی ۲۰٪ کارت دیده شد، شروع کنه
      className="relative backdrop-blur-lg bg-white/10 border border-white/10 rounded-4xl shadow-lg text-center p-8 w-80 transition transform hover:scale-105 shadow-[0_0_25px_#a855f7] hover:bg-white/20"
    >
      {/* افکت درخشان بنفش */}
      <div className="absolute inset-0 rounded-[900px] bubble-bg opacity-70 blur-md -z-10" />
      <h3 className="text-2xl font-semibold mb-6">{item.title}</h3>
      <p className="text-gray-200 text-sm leading-relaxed">{item.description}</p>
    </motion.div>
  );
};

export default ExpertiseSection;
