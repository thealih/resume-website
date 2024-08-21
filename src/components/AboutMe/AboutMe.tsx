import { FC } from "react";
import Skillsbar from "../Skillsbar/Skillsbar";

const AboutMe: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div className="w-full sm:pl-6 lg:px-20 ">
        <h1 className="max-sm:text-center text-4xl font-mono leading-snug sm:mb-10">
          درباره من
        </h1>
        <ul className="text-2xl text-gray-400 mt-4 text-justify leading-loose">
          <li className="font-mono">علی هاشمی</li>
          <li>متولد: 1381</li>
          <li>تحصیلات: دانش‌آموخته رشته کامپیوتر</li>
          <li>تخصص: برنامه‌نویس فرانت‌اند</li>
        </ul>

        <p className="text-2xl text-gray-400 mt-4 text-justify leading-relaxed">
          من علی هاشمی هستم، دانش‌آموخته رشته کامپیوتر با تخصص در برنامه‌نویسی
          فرانت‌اند. در طول حدود دو سال گذشته، به عنوان یک فریلنسر در پروژه‌های
          مختلف مشغول به کار بوده‌ام. به دلیل مشغولیت‌های تحصیلی، توانایی کار به
          صورت تمام‌وقت برایم فراهم نبود. اکنون با پایان تحصیلاتم، آماده ورود به
          بازار کار هستم و با اشتیاق به دنبال شروع فعالیت حرفه‌ای خود و ارتقای
          مهارت‌هایم در این مسیر می‌باشم.
        </p>
        <h1 className="max-sm:text-center text-4xl font-mono leading-snug my-10 ">
          چرا انتخاب من :)
        </h1>
        <p className="text-2xl text-gray-400 mt-4 text-justify leading-relaxed">
          من به طور کامل به React مسلط هستم و تجربه کار با Next.js را نیز دارم.
          این توانایی‌ها به من این امکان را می‌دهد که رابط‌های کاربری کارآمد و
          زیبا را طراحی و پیاده‌سازی کنم و در پروژه‌های توسعه وب نقش مؤثری ایفا
          کنم.
        </p>
      </div>
      <div className="w-full md:ml-40 lg:pr-40 hidden md:block particles">
        <Skillsbar title="Next JS" progress={70} />
        <Skillsbar title="React JS" progress={90} />
        <Skillsbar title="Type script" progress={70} />
        <Skillsbar title="Java script" progress={95} />
      </div>
    </div>
  );
};

export default AboutMe;
