import { FC } from "react";
import Skillbar from "../Skillsbar/Skillsbar";

const AboutMe: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div className="w-full sm:pl-6 lg:px-20">
        <h1 className="max-sm:text-center text-4xl font-mono leading-snug sm:mb-10">
          درباره من
        </h1>
        <p className="text-2xl text-gray-400 mt-4 text-justify">
          من علی هاشمی هستم دانش آموخته رشته کامپیوتر برنامه نویس فرانت اند
        </p>
        <p className="text-2xl text-gray-400 mt-4 text-justify">
          در حدود دو سال به صورت فرلنسر کار کردم ولی به علت مشغول به تحصیل بودن
          توانایی کار به صورت تمام وقت برایم محیا نبود حال حاضر با پایان
          تحصیلاتم شرایط ورود به بازار کار را دارا می باشم. و شوق ورود هر چه
          سریع تر به بازار کار و ادامه دادن این مسیر به صورت حرفه ای تر برای
          ارتقای مهارت هایی شخصی خودم را دارم.
        </p>
        <h1 className="max-sm:text-center text-4xl font-mono leading-snug sm:mb-10 mt-10">
          چرا انتخاب من :)
        </h1>
        <p className="text-2xl text-gray-400 mt-4 text-justify">
          عاشق یادگیری و میل به پیشرفت خودم و تیمی که باهاشون کار میکنم ، داشتن
          تعهد و وجدان کاری ، جسارت قبول کردن چالش های جدید و وقف دادن با شرایط
          سخت شاید حائز اهمیت ترین نکات شخصیتی من میشه.
        </p>
      </div>
      <div className="w-full md:ml-40 lg:pr-40">
        <Skillbar title="Next JS" progress={60} />
        <Skillbar title="React JS" progress={80} />
        <Skillbar title="Type script" progress={70} />
        <Skillbar title="Java script" progress={85} />
      </div>
    </div>
  );
};

export default AboutMe;
