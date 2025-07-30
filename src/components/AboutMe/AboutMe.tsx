import {FC} from "react";
import Logo30Book from "@/assets/Image/Logo_30book.png";
import LogoSharif from "@/assets/Image/logo_sharif.png";
import WorkSection from "@/components/WorkSection/WorkSection";

const AboutMe: FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="w-full sm:pl-6 lg:px-20">
                <h1 className="max-sm:text-center text-4xl font-mono leading-snug sm:mb-10">
                    درباره من
                </h1>
                <ul className="text-2xl text-gray-400 mt-4 text-justify leading-loose">
                    <li className="font-bold text-gray-500 text-3xl mb-6">علی هاشمی</li>
                    <li>متولد: 1381</li>
                    <li>تحصیلات: دانش‌آموخته رشته علوم کامپیوتر</li>
                    <li>تخصص: توسعه‌دهنده فول‌استک</li>
                </ul>

                <p className="text-2xl text-gray-400 mt-4 text-justify leading-loose">
                    من علی هاشمی هستم؛ دانش‌آموخته رشته علوم کامپیوتر با علاقه‌مندی جدی به توسعه نرم‌افزارهای وب.
                    سابقه کار حرفه‌ای در تیم فنی دانشگاه صنعتی شریف (ICTC) و همکاری با تیم سی‌بوک را دارم.
                    در این مسیر، با پیاده‌سازی پروژه‌های مبتنی بر <strong>ASP.NET Core Web API</strong> و همچنین
                    هماهنگی سامانه‌ها با SSO دانشگاه شریف، تجربه فنی قابل توجهی کسب کرده‌ام.
                </p>
                <h1 className="max-sm:text-center text-4xl font-mono leading-snug my-10 ">
                    چرا من :)
                </h1>
                <p className="text-2xl text-gray-400 mt-4 text-justify leading-loose">
                    در بخش بک‌اند، تمرکز من بر توسعه سیستم‌های مبتنی بر <strong>ASP.NET Core</strong> و معماری
                    Clean Architecture / MVC بوده است. چندین پروژه‌ی واقعی را با این تکنولوژی‌ها پیاده‌سازی کرده‌ام
                    که مستندات آن‌ها در گیت‌هابم قابل مشاهده است.
                </p>
                <p className="text-2xl text-gray-400 mt-4 text-justify leading-loose">
                    در سمت فرانت‌اند، با تکنولوژی‌های Blazor و Razor Pages تجربه عملی داشته‌ام
                    و به‌صورت کامل به React و Next.js مسلط هستم. این توانایی‌ها به من این امکان را می‌دهد
                    که رابط‌های کاربری مدرن، بهینه و تعاملی طراحی و پیاده‌سازی کنم.
                </p>
                <p className="text-2xl text-gray-400 mt-4 text-justify leading-loose">
                    هدف من توسعه نرم‌افزارهای باکیفیت، قابل نگهداری و مقیاس‌پذیر است، و همیشه در مسیر یادگیری و پیشرفت قدم برمی‌دارم.
                </p>
            </div>
            <div className="w-full md:ml-40 lg:pr-40 particles">
                <h1 className="max-sm:text-center text-4xl font-mono leading-snug my-10 ">
                    سابقه شغلی
                </h1>
                <div className="space-y-10">
                    <WorkSection
                        date=" تهران، ایران — 🗓️ از مهر 1403 تا اسفند 1403"
                        src={Logo30Book.src}
                        width={75}
                        height={35}
                        point={["توسعه رابط‌های کاربری با استفاده از Blazor و Razor Components",
                            "طراحی و پیاده‌سازی ساختار ماژولار بر پایه الگوی MVC",
                            "بهینه‌سازی عملکرد صفحات وب و تجربه کاربری (UX)",
                            "همکاری مؤثر با تیم طراحی و تحلیل کسب‌وکار جهت پیاده‌سازی نیازمندی‌های پروژه‌ها",
                            "کسب تجربه عملی در توسعه نرم‌افزارهای سریع، مقیاس‌پذیر و maintainable"
                        ]}
                        title={"سایت کتاب فروشی سی بوک"}
                        desc="در تیم فنی شرکت سی‌بوک، در نقش توسعه‌دهنده وب مشغول به فعالیت بودم و در طراحی و
               توسعه وب‌سایت‌های مدرن مشارکت داشتم. تمرکز اصلی من بر روی معماری MVC و پیاده‌سازی صفحات تعاملی با استفاده از Blazor Pages بود."/>
                    <WorkSection
                        date=" تهران، ایران — 🗓️ از فروردین 1404 تا اکنون"
                        src={LogoSharif.src}
                        title="دانشگاه صنعتی شریف - واحد ICTC"
                        width={80}
                        height={40}
                        desc="در نقش برنامه‌نویس Backend در تیم فناوری اطلاعات و ارتباطات دانشگاه صنعتی شریف،
              مسئول توسعه و نگهداری سرویس‌های دانشگاهی با استفاده از ASP.NET Core Web API بودم. در این موقعیت،
               مسئولیت طراحی، توسعه و بهینه‌سازی ماژول‌های مرتبط با مدیریت کاربران، سیستم‌های آموزشی و فرآیندهای داخلی دانشگاه را برعهده داشتم."
                        point={["پیاده‌سازی و یکپارچه‌سازی SSO (Single Sign-On) دانشگاه با سایر سرویس‌ها جهت احراز هویت متمرکز و امن",
                            "توسعه APIهای مقیاس‌پذیر با رعایت اصول Clean Architecture و رعایت استانداردهای RESTful",
                            "کار با سیستم‌های موجود دانشگاهی و اتصال آن‌ها به زیرساخت جدید",
                            "تجربه عملی با Git، SQL Server، Entity Framework Core، JWT و مدیریت نقش‌ها (Role-Based Access)",
                            "مشارکت در جلسات تحلیل نیازمندی‌ها، طراحی فنی و پیاده‌سازی DevOps اولیه برای پروژه‌های داخلی",
                        ]}
                    />
                </div>

            </div>
        </div>
    );
};

export default AboutMe;
