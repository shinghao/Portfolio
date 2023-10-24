import HighlightedText from "./HighlightedText";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import SkillCard from "../SkillCard";
import workData from "@/data/work";
import WorkCard from "./WorkCard";

export default function Work() {
  return (
    <section className="m-auto w-10/12 5xl:w-9/12 py-20" id="work">
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center lg:w-max mb-12">
          Work Experience
        </h2>
      </AnimationOnScroll>
      <div className="flex flex-col gap-20">
        {Object.keys(workData).map((company, index) => (
          <WorkCard key={index} {...workData[company]} />
        ))}
      </div>
    </section>
  );
}
