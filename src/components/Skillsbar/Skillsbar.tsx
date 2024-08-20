import "./skills-bar.css";

interface Props {
  title: string;
  progress: number;
}

const Skillbar = ({ title, progress }: Props) => {
  return (
    <div className="bg-gray-100 rounded-xl  p-5 sm:px-10 mt-10 ">
      <div className="flex justify-between text-lg">
        <span>{title}</span>
        <span>% {progress}</span>
      </div>
      <div className="bg-white rounded-xl h-4 flex items-center mt-2 mb-5">
        <progress
          value={`${progress}`}
          max="100"
          className="w-full text-base rounded-xl progress-bar "
        ></progress>
      </div>
    </div>
  );
};

export default Skillbar;
