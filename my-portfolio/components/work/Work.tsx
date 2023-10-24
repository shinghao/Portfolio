import HighlightedText from "./HighlightedText";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import SkillCard from "../SkillCard";

export default function Work() {
  const SERL_SKILL_LIST = ["csharp", "unity", "angularjs", "javascript"];
  const GOVTECH_SKILL_LIST = [
    "javascript",
    "typescript",
    "angularjs",
    "nodejs",
    "awslambda",
  ];
  return (
    <section className="m-auto w-10/12 5xl:w-9/12 py-20" id="work">
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center lg:w-max">
          Work Experience
        </h2>
      </AnimationOnScroll>
      <div>
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
              className=" lg:row-start-2 
        lg:flex lg:flex-row lg:items-center lg:justify-between lg:pr-8"
            >
              <h4>Software Developer (Contract)</h4>
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
                Built the front-end of MRx, a
                <HighlightedText text="web client" />
                on Windows Store
              </li>
              <li>
                Conducted regular
                <HighlightedText text="product demos" />
                for clients
              </li>
              <li>
                Independently exhibited booth at SEMICON 2022 Penang, acquiring
                new international business leads
              </li>
            </ul>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
          <ul className="my-4 xl:my-0 gap-4 max-w-max flex flex-wrap justify-center">
            {SERL_SKILL_LIST.map((skill, index) => (
              <li key={index}>
                <SkillCard skill={skill}></SkillCard>
              </li>
            ))}
          </ul>
        </AnimationOnScroll>
      </div>
      <div className="my-20">
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
          <div className="lg:grid auto-rows-min lg:mt-8">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold lg:row-start-1">
              Government Technology Agency
            </h3>
            <div
              className="  lg:row-start-2 
        lg:flex lg:flex-row lg:items-center lg:justify-between lg:pr-8"
            >
              <h4 className="">Full-Stack Software Engineer Intern</h4>
              <p className="lg:row-start-2">July 23 - Dec 23</p>
            </div>

            <ul className="my-4 list-disc mx-6 lg:mx-12 space-y-3 lg:row-start-3">
              <li>
                Collaborated in a team to enhance & develop the
                <HighlightedText text="Singpass API Portal" />, a public facing
                shopfront for Singpass API products used by thousands of
                businesses and developers
              </li>
              <li>
                Integrated an external system into the portal, involving the
                development of new endpoints and a webhook
              </li>
              <li>
                Successfully resolved numerous time-sensitive
                <HighlightedText
                  text="production issues
                & vulnerabilities "
                />
                raised by clients and stakeholders
              </li>
            </ul>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
          <ul className="my-4 xl:my-0 gap-4 max-w-max flex flex-wrap justify-center">
            {GOVTECH_SKILL_LIST.map((skill, index) => (
              <li key={index}>
                <SkillCard skill={skill}></SkillCard>
              </li>
            ))}
          </ul>
        </AnimationOnScroll>
      </div>
    </section>
  );
}
