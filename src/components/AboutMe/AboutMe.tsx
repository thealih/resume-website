import { FC } from "react";
import Skillsbar from "../Skillsbar/Skillsbar";
import Image from "next/image";
import Logo from "@/assets/Image/30book-logo.png";

const AboutMe: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div className="w-full sm:pl-6 lg:px-20">
        <h1 className="max-sm:text-center text-4xl font-mono leading-snug sm:mb-10">
          درباره من
        </h1>
        <ul className="text-2xl text-gray-400 mt-4 text-justify leading-loose">
          <li className="font-mono">علی هاشمی</li>
          <li>متولد: 1381</li>
          <li>تحصیلات: دانش‌آموخته رشته علوم کامپیوتر</li>
          <li>تخصص: برنامه‌نویس فرانت‌اند</li>
        </ul>

        <p className="text-2xl text-gray-400 mt-4 text-justify leading-relaxed">
          من علی هاشمی هستم، دانش‌آموخته رشته کامپیوتر با تخصص در برنامه‌نویسی
          وبسایت . تجربه کار با تکنولوژی های asp و c# در شرکت سی بوک رو داشتم.
          اکنون با پایان سال، آماده ورود به شرکت جدید و افزایش مهارت هایم هستم و
          با اشتیاق به دنبال شروع فعالیت حرفه‌ای خود و ارتقای مهارت‌هایم در این
          مسیر می‌باشم.
        </p>
        <h1 className="max-sm:text-center text-4xl font-mono leading-snug my-10 ">
          چرا انتخاب من :)
        </h1>
        <p className="text-2xl text-gray-400 mt-4 text-justify leading-relaxed">
          من در بخش بک اند با تکنولوژی های asp کار کردم و سایت هایی با معماری
          mvc داحل گیت هابم است.
        </p>
        <p className="text-2xl text-gray-400 mt-4 text-justify leading-relaxed">
          در سمت فرانت تجربه کار با blazor رو داشتم و و به طور کامل با razor
          page ها هم کار کردم.
        </p>
        <p className="text-2xl text-gray-400 mt-4 text-justify leading-relaxed">
          به طور کامل به React مسلط هستم و تجربه کار با Next.js را نیز دارم. این
          توانایی‌ها به من این امکان را می‌دهد که رابط‌های کاربری کارآمد و زیبا
          را طراحی و پیاده‌سازی کنم و در پروژه‌های توسعه وب نقش مؤثری ایفا کنم.
        </p>
      </div>
      <div className="w-full md:ml-40 lg:pr-40 particles">
        <h1 className="max-sm:text-center text-4xl font-mono leading-snug my-10 ">
          سابقه شغلی
        </h1>
        <Image src={Logo.src} width={200} height={100} alt="لوگو سی بوک" />
        <p className="text-2xl text-gray-400 mt-8 text-justify leading-relaxed">
          از مهرماه ۱۴۰۳ به تیم حرفه‌ای سی بوک پیوستم و در کنار این تیم توانمند،
          در زمینه طراحی و توسعه وب‌سایت‌ها فعالیت داشتم. تمرکزم بر معماری MVC و
          پیاده‌سازی Blazor Pages بوده است و در این مسیر، تجربه ارزشمندی در
          توسعه نرم‌افزارهای مدرن و بهینه کسب کرده‌ام.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
