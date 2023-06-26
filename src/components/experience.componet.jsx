import ExperienceItem from "./experienceitem";
import experience from "../data/experience";

const Experience = () => {
  return (
    <div className="grid grid-rows-1 items-center justify-center">
      <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {experience.map((job) => (
        <ExperienceItem
          imgUrl={job.imgUrl}
          company={job.company}
          position={job.position}
          duration={job.duration}
          tasks={job.tasks}
        />
      ))}
      </div>
    </div>
  );
};

export default Experience;
