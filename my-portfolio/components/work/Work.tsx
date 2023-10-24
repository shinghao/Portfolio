import SkillIcon from "../SkillIcon";
import HighlightedText from "./HighlightedText";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import SkillCard from "../SkillCard";

export default function Work() {
  const SERL_SKILL_LIST = ["csharp", "unity", "angularjs", "javascript"];
  return (
    <section className="m-auto w-10/12 5xl:w-9/12 py-20" id="work">
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center lg:w-max">
          Work Experience
        </h2>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
        <div className="lg:grid auto-rows-min lg:mt-8">
          <div
            className="my-8 m-auto w-44 h-44 md:w-52 md:h-52 lg:w-[23vw] lg:h-[23vw] max-w-[300px] max-h-[300px]
          lg:col-start-3 lg:row-start-2 lg:row-span-2 lg:justify-self-center"
          >
            <img
              src="boy-using-hololens.png"
              alt="Avatar of boy using vr glasses"
              className="rounded-full"
            />
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold lg:row-start-1">
            Serl.io
          </h3>
          <div
            className=" lg:text-4xl lg:row-start-2 
        lg:flex lg:flex-row lg:items-center lg:justify-between lg:pr-8"
          >
            <h4 className="text-xl md:text-3xl">
              Software Developer (Contract)
            </h4>
            <p className="lg:row-start-2 lg:text-xl">May 22 - Nov 22</p>
          </div>

          <ul className="my-4 list-disc mx-6 lg:mx-12 space-y-3 lg:row-start-3">
            <li>
              Developed multiple end-to-end
              <HighlightedText text="Mixed Reality" />
              applications for the
              <HighlightedText text="Microsoft Hololens 2" />
            </li>
            <li>
              Worked on
              <HighlightedText text="web console" />
              applications
            </li>
            <li>
              Conducted regular
              <HighlightedText text="product demos" />
              for clients
            </li>
            <li>
              Hosted booth solo at Semicon 2022 in Penang, where I generated
              business leads from international clients
            </li>
          </ul>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
        <ul className="mt-4 xl:mt-0 gap-4 max-w-max flex flex-wrap justify-center">
          {SERL_SKILL_LIST.map((skill, index) => (
            <li key={index}>
              <SkillCard skill={skill}></SkillCard>
            </li>
          ))}
        </ul>
      </AnimationOnScroll>
    </section>
  );
}
