import Image from "next/image";
import { FC, lazy } from "react";
import iranLearn from "/public/Image/Screenshot 2024-08-18 161603.png";
import Link from "next/link";
import Btn from "@/ui/btn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "iran learn",
  description: "This site describe iran learn website",
};

const IranLearn: FC = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-mono leading-snug bg-blue-950 text-white py-8  mb-10">
        سایت ایران لرن{" "}
      </h1>
      <div className=" flex justify-center">
        <div className="py-10 px-3 md:p-10 lg:mx-10 text-gray-600 container">
          <div className="lg:flex justify-between lg:flex-row-reverse gap-x-10">
            <div className="lg:w-1/2">
              <Image
                src={iranLearn.src}
                alt="iranlearn-image"
                width={1896}
                height={867}
                className="border-gray-400 border-2 border-solid rounded-xl shadow-xl"
              ></Image>
            </div>

            <ul className="mx-5 space-y-6 lg:w-1/2 max-lg:border-t-2 border-solid border-blue-950 max-lg:mt-10">
              <li className="">
                <h1 className="text-right w-fit text-4xl font-mono leading-snug  text-black py-8 ">
                  مقدمه معرفی پروژه
                </h1>
              </li>
              <li>
                <span className="font-mono text-black"> عنوان پروژه : </span>
                وبسایت خرید دوره های آموزشی
              </li>
              <li>
                <span className="font-mono text-black">آدرس وبسایت : </span>
                <Link
                  href={"https://iranlearned.ir/"}
                  className="text-gray-500"
                  target="_blank"
                >
                  www.irenlearned.ir
                </Link>
              </li>
              <li className="text-justify">
                <span className="font-mono text-black">توضیحات : </span>
                این پروژه یک فروشگاه آنلاین برای خرید محصولات دیجیتال است. هدف
                از این وبسایت، ایجاد تجربه کاربری ساده و راحت برای مشتریان است
                تا بتوانند به آسانی محصولات مورد نیاز خود را جستجو و خریداری
                کنند. نقش من در این پروژه توسعه کامل بخش فرانت‌اند با استفاده از
                React و طراحی رابط کاربری بود.
              </li>
              <li>
                {" "}
                <div className="my-10 text-center flex max-md:flex-col justify-center items-center md:justify-between sm:gap-y-5 md:gap-x-20">
                  <Btn
                    title=" مشاهده کد های Frontend"
                    href="https://github.com/thealih/Forntend-iranlearn"
                    blank={true}
                  />
                  <Btn
                    title="  مشاهده کد های Backend"
                    href="https://github.com/thealih/Backend-Irenlearn"
                    blank={true}
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className="max-lg:border-t-2 border-solid border-blue-950 max-md:mt-10">
            <h1 className="text-right w-fit text-4xl font-mono leading-snug  text-black py-8 rounded-3xl">
              نحوه مشاهده پروژه
            </h1>
            <ul className="space-y-10 mx-5 text-justify">
              <li>
                1. برای دیدن این پروژه ابتدا باید کد Backend رو از این
                <Link
                  href={"https://github.com/thealih/Backend-Irenlearn"}
                  className="text-sky-600"
                  target="_blank"
                >
                  {" "}
                  لینک گیت هاب{" "}
                </Link>
                دانلود کنید.
              </li>
              <li>
                2. پس از دانلود و خارج کردن از حالت زیپ حالا پروژه رو داخل CMD
                اجرا میکنیم.
              </li>
              <li>
                3. حالا دستور npm install رو اجرا میکنیم تا dependency های پروژه
                را نصب کنیم (مطمئن شوید nodejs داخل سیستم شما نصب بوده برای نصب
                فایل های npm)
              </li>
              <li>
                4. حالا به
                <Link
                  href={"https://iranlearned.ir/"}
                  className="text-sky-600"
                  target="_blank"
                >
                  {" "}
                  لینک آنلاین{" "}
                </Link>
                سایت مراجعه کنید و بخش های مختلف را مشاهده کنید :)
              </li>
              <li>** در صورت نصب نداشتن MongoDB آن را نیز نصب کنید. **</li>
            </ul>
          </div>
          <div className="max-lg:border-t-2 border-solid border-blue-950 max-md:mt-10">
            <h1 className="text-right w-fit text-4xl font-mono leading-snug  text-black py-8 ">
              قابلیت ها و ویژگی ها
            </h1>
            <ul className="mx-3 space-y-10">
              <li className="text-justify">
                <span className="font-mono text-black">صفحه اصلی :</span>
                <p className="inline">
                  {" "}
                  داخل بخش صفحه اصلی سایت اسلایدرها و بنرهای تبلیغاتی و لیست
                  محصولات فروش و قسمتی از مقاله ها و در قسمت footer نیز راه های
                  ارتباطی و لینک ها مفید نحوه عضویت داخل خبرنامه گذاشته شده است.
                </p>
              </li>
              <li className="text-justify">
                <span className="font-mono text-black">
                  صفحه ورود و عضویت :
                </span>
                <p className="inline">
                  {" "}
                  پیاده سازی فرم با اعتبار سنجی سمت کلاینت و ذخیره دیتای کاربر
                  با استفاده از api های backend داخل دیتابیس و فرایند
                  Authentication و Authorization کاربر در داخل سایت
                </p>
              </li>
              <li className="text-justify">
                <span className="font-mono text-black">صفحه دوره ها :</span>
                <p className="inline">
                  {" "}
                  این صفحه به صورت داینامیک طراحی شده طوری که با توجه به نیاز و
                  درخواست شما برای دوره ها با عنوان های مختلف محتوای این قسمت
                  بارگزاری میشود.
                </p>
              </li>
              <li className="text-justify">
                <span className="font-mono text-black">صفحه مقاله ها :</span>
                <p className="inline">
                  {" "}
                  این بخش نیز مقاله های داخل سایت که توسط نویسنده های سایت نوشته
                  شده رو به شما نمایش میدهد و شما همچنین با توجه به pageination
                  که پایین بخش طراحی شده میتوانید به محتوا با توجه به اولویت
                  بندی که خودتان انتخاب میکنید دسترسی پیدا کنید.
                </p>
              </li>
              <li className="text-justify">
                <span className="font-mono text-black">ریسپانسیو بودن :</span>
                <p className="inline">
                  {" "}
                  سایت مناسب با اندازه ی تمامی دیوایس ها است برای کاربران موبایل
                  navbar را به بخش پایین صفحه منتقل کردیم برای دسترسی راحت ترشان
                  و برای کاربران با اندازه صفحه نمایش هایی بزرگتر از 800px بخش
                  navbar در بالای سایت قرار دارد و همچنین یک topbar نیز به
                  کاربران با اندازه صفحه نمایش بزرگتر نشان میدهد که اشاره به
                  تستی بودن پروژه دارد.
                </p>
              </li>
              <li className="text-justify">
                <span className="font-mono text-black">پنل کاربران :</span>
                <p className="inline">
                  {" "}
                  پیاده سازی پنل کاربری طوری که کاربر تمامی خرید های خود و
                  ویرایش اطلاعات کاربری و مدیریت تیکت ها خود را میتواند در آن
                  بخش انجام دهد.
                </p>
              </li>
              <li className="text-justify">
                <span className="font-mono text-black">پنل مدیران :</span>
                <p className="inline">
                  {" "}
                  برای مدیران و ادمین های سایت نیز پنل جدایی طراحی شده که
                  کاربران معمولی سایت توانایی دیدن این بخش را ندارند در صورتی که
                  نقش شما در دیتابیس ادمین تعریف شده باشد میتوانید به این بخش
                  دسترسی پیدا کنید.
                </p>
              </li>
              <li className="text-justify leading-loose">
                <span className="font-mono text-black">
                  تکنولوژی های استفاده شده :
                </span>
                <p className="">HTML5، CSS3، JavaScript ES6</p>
                <p className="">برای ساخت رابط کاربری تعاملی: React.js</p>
                <p className="">برای استایل دهی: Tailwind و Bootstrap</p>
                <p className="flex flex-row-reverse justify-end gap-x-2">
                  <span> Axios </span> <span>برای ارتباط API :</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="max-lg:border-t-2 border-solid border-blue-950 max-md:mt-10">
            <h1 className="text-right w-fit text-4xl font-mono leading-snug  text-black py-8 ">
              روند توسعه و چالش ها
            </h1>
            <p className="mx-5 text-justify">
              اصلی ترین چالشی که برای خودم طراحی کرده بودم استفاده از api ها
              داخل کد های برنامه بود و تعاملی کردن ارتباط فرانت و بک با یکدیگر
              سپس بخش های احراز هویت بیشتر هدفم از زدن این پروژه سنجش خودم بود
              برای طراحی سایت های فروش محصولات بود. به علت بالا بودن هزینه سرور
              ها متاسفانه نتوانستم هم بک و هم فرانت رو در کنار هم آنلاین کنم تا
              شما به طور یک پکیج کامل مشاهده کنید سایت رو در حال حاضر برای دیدن
              سایت شما باید کد های بک اند را طبق آموزش داخل سایت انجام دهید تا
              تمام ویژگی ها رو ببینید.
            </p>
            <p className="mx-5 text-justify mt-10">
              استفاده تیلویند و بوت استرپ در کنار هم قطعا کار منطقی نیست هدف از
              این کار این بود به مخاطبان نشون داده شود که به هر دو مسلط هستم و
              تفاوتی در استفاده این تکنولوژی برام نداره.
            </p>
          </div>
          <div className="max-lg:border-t-2 border-solid border-blue-950 max-md:mt-10">
            <h1 className="text-right w-fit text-4xl font-mono leading-snug  text-black py-8 ">
              نتیجه گیری
            </h1>
            <p className="mx-5 text-justify">
              امیدوارم این پروژه نظر شما را جلب کرده باشم خوشحال میشم نظرتتون رو
              برام ایمیل کنید و یا در صورتی که دوست داشتید کد ها داخل گیت هابم
              گذاشته شده و در بهتر کردن این پروژه منو کمک کنید.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IranLearn;
