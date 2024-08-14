interface Props {
  title: string;
  text: string;
}

const SkillBox = ({ title, text }: Props) => {
  return (
    <div className=" bg-gray-100 p-5 rounded-2xl">
      <h1 className="text-3xl font-mono">{title}</h1>
      <p className="text-justify text-base mt-1 ">{text}</p>
    </div>
  );
};

export default SkillBox;
