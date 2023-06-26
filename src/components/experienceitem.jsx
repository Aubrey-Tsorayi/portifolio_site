import { useState } from "react";

const ExperienceItem = ({ imgUrl, company, position, duration, tasks }) => {
    const [click, setClick] = useState(false);

  const reviewCard = () => {
    if (click === false) {
      setClick(true);
    } else {
      setClick(false);
    }
  };


    return (
    <div className="grid grid-rows-1 items-center justify-center ">
      <div
        onClick={reviewCard}
        className="rounded p-2 m-2 border border-black shadow-inner hover:shadow-xl hover:cursor-pointer"
      >
        <div className="flex justify-center items-center">
        <img src={imgUrl} alt="logo" className="object-scale-down w-20 h-20"/>
        </div>
        <h2 className="text-xl underline font-bold">{company}</h2>
        <p className="italic font-semibold">{position}</p>
        <h4 className=" text-base font-semibold">{duration}</h4>
        {tasks.map((item) => (
          <ul className={click === false ? "hidden" : "list-disc list-inside"}>
            <li className="m-0 p-0">
              {item}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ExperienceItem;
