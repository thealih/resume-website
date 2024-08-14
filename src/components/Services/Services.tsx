import { FC } from "react";
import ServicesBox from "./ServisesBox/ServisesBox";

const Services: FC = () => {
  return (
    <div className="w-full mt-20">
      <h1 className="text-center text-4xl font-mono">چه خدماتی ارائه میدهم</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 mt-10 md:gap-x-20 lg:grid-cols-6">
        <ServicesBox
          title="Next JS"
          text="توانایی نوشتن برنامه با نکست و app router و برقراری ارتباط با پایگاه داده برنامه"
          icon="next"
        />
        <ServicesBox
          title="React JS"
          text="تسلط کامل به ریکت و ریداکس و پیاده سازی طرح های فیگما به کد های ریکتی"
          icon="react"
        />
        <ServicesBox
          title="TypeScript"
          text="نوشتن کد ها به زبان تایپ اسکریپت و پیاده کردن مفهموم استفاده از type ها در کد های برنامه"
          icon="typescript"
        />
        <ServicesBox
          title="JavaScript"
          text="توانایی کامل در جاوا اسکریت و پیاده سازی و گرفتن اطلاعات از backend و استفاده در داخل سایت"
          icon="javascript"
        />
        <ServicesBox
          title="Tailwind"
          text="استایل دهی کد ها با استفاده از تیلویند"
          icon="tailwind"
        />
        <ServicesBox
          title="Bootstrap"
          text="استایل دهی کد ها با استفاده از بوت استرپ"
          icon="bootstrap"
        />
      </div>
    </div>
  );
};

export default Services;
