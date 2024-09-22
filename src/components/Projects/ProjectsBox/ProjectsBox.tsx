import Image from "next/image";

interface Props {
  title: string;
  desc: string;
  img?: any;
}

const ProjectsBox = ({ title, desc, img }: Props) => {
  return (
    <div className=" bg-blue-950 p-10">
      <h2 className="text-white text-2xl text-right max-sm:text-center leading-normal">
        {title}
      </h2>

      <p className="text-gray-300 text-lg pt-5 text-right">{desc}</p>
      {img && (
        <div className="mt-10 flex justify-center items-center max-sm:text-center">
          <Image src={img} alt="logo" width={150} height={100} />
        </div>
      )}
    </div>
  );
};

export default ProjectsBox;
