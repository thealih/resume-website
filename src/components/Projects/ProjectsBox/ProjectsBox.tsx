import Image from "next/image";

interface Props {
  title: string;
  desc: string;
  img?: any;
}

const ProjectsBox = ({ title, desc, img }: Props) => {
  return (
    <div className=" h-80 bg-blue-950 pt-10 px-10">
      <h2 className="text-white text-2xl text-right max-sm:text-center">
        {title}
      </h2>

      <p className="text-gray-300 text-lg pt-5 text-justify">{desc}</p>
      {img && (
        <div className="mt-10 flex justify-center items-center max-sm:text-center">
          <Image src={img} alt="logo" width={150} height={100} />
        </div>
      )}
    </div>
  );
};

export default ProjectsBox;
