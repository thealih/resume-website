import React from 'react';
import Image from "next/image";

function WorkSection({src, width, height, desc, point, title, date}:
                     {
                         src: string,
                         width: number,
                         height: number,
                         desc: string,
                         title?: string,
                         date: string,
                         point: string[]
                     }) {
    return (
        <>
            <div className="flex items-center gap-x-4">
                <Image src={src} width={width} height={height} alt="لوگو"/>
                {
                    title ? <div className="font-bold text-3xl md:text-4xl leading-normal"> {title}  </div> : null
                }
            </div>

            <div className="text-gray-700 font-bold">📍{date}</div>
            <p className="text-2xl text-gray-400 mt-8 text-justify leading-loose">
                {desc}
            </p>
            {
                point?.length > 0 && (
                    <div>
                        <div className="font-bold">
                            نکات کلیدی :
                        </div>
                        <ul className="list-disc mt-6 space-y-2 text-xl text-gray-600 mr-8">
                            {point.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </>
    );
}

export default WorkSection;