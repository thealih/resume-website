interface Props {
  title: string;
  count: number;
}

import Image from "next/image";
import star from "/public/svgs/star.svg";
import starFill from "/public/svgs/star_fill.svg";

const SkillBox = ({ title, count }: Props) => {
  const starItems = [];
  const starFillItems = [];
  for (let index = 0; index < count; index++) {
    starFillItems.push(
      <Image
        key={1}
        width={20}
        height={20}
        src={starFill.src}
        alt="rating"
        className="course-box__star"
      />
    );
  }
  for (let index = 0; index < 5 - count; index++) {
    starItems.push(
      <Image
        width={20}
        height={20}
        src={star.src}
        alt="rating"
        className="course-box__star"
      />
    );
  }
  return (
    <div className=" bg-gray-100  rounded-2xl flex justify-between py-5 px-3">
      <h1 className="text-2xl">{title}</h1>
      <div className="course-box__rating flex ">
        {starItems}
        {starFillItems}
      </div>
    </div>
  );
};

export default SkillBox;
