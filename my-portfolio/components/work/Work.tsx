import { AnimationOnScroll } from "react-animation-on-scroll";
import workData from "@/data/work";
import WorkCard from "./WorkCard";
import SectionHeader from "../SectionHeader";

export default function Work() {
  return (
    <section className="m-auto w-10/12 5xl:w-9/12 py-20" id="work">
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
        <SectionHeader>Work Experience</SectionHeader>
      </AnimationOnScroll>
      <div className="flex flex-col gap-20">
        {Object.keys(workData).map((company, index) => (
          <WorkCard key={index} {...workData[company]} />
        ))}
      </div>
    </section>
  );
}
