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
                <h1 className="text-right w-fit text-4xl font-mono leading-snug  text-black py-8 rounded-3xl ">
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
          <div className=" max-lg:border-t-2 border-solid border-blue-950 max-md:mt-10">
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
              <li>** در صورت نصب نداشتن MongoDB آن را نیز نصب کنید.**</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default IranLearn;
