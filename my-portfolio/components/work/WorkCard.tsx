import { AnimationOnScroll } from "react-animation-on-scroll";
import SkillCard from "../SkillCard";
import HighlightedText from "./HighlightedText";

interface WorkCardProps {
  company: string;
  jobTitle: string;
  date: string;
  content: Array<string>;
  skills: Array<string>;
}

const renderContentWithHighlights = (content: string) => {
  const regex = /{{(.*?)}}/g;
  return content.split(regex).map((words, index) => {
    if (index % 2 === 1) {
      return <HighlightedText key={index}>{words}</HighlightedText>;
    }
    return <span key={index}>{words}</span>;
  });
};

export default function WorkCard(props: WorkCardProps) {
  return (
    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
      <div className="lg:grid">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold lg:row-start-1">
          {props.company}
        </h3>

        <div className="lg:flex lg:flex-row lg:items-center lg:justify-between lg:pr-8">
          <h4>{props.jobTitle}</h4>
          <p className="lg:text-xl">{props.date}</p>
        </div>

        <ul className="my-8 list-disc mx-6 lg:mx-12 space-y-3">
          {props.content.map((item, index) => (
            <li key={index}>{renderContentWithHighlights(item)}</li>
          ))}
        </ul>

        <ul className="max-w-max flex flex-wrap gap-4 justify-center">
          {props.skills.map((skill, index) => (
            <li key={index}>
              <SkillCard skill={skill}></SkillCard>
            </li>
          ))}
        </ul>
      </div>
    </AnimationOnScroll>
  );
}
