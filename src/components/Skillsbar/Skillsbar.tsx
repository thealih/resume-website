interface Props {
  title: string;
  progress: number;
}

const Skillbar = ({ title, progress }: Props) => {
  return (
    <div className="bg-gray-100 rounded-xl  p-5 sm:px-10 mt-10 ">
      <div className="flex justify-between text-lg">
        <p>{title}</p>
        <p>% {progress}</p>
      </div>
      <div className="">
        <progress
          value={`${progress}`}
          max="100"
          className="w-full text-base rounded-xl "
        ></progress>
      </div>
    </div>
  );
};

export default Skillbar;
