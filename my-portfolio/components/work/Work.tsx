import SkillIcon from "../SkillIcon";
import HighlightedText from "./HighlightedText";
import Image from "next/image";

export default function Work() {
  return (
    <section className="min-h-screen m-auto w-10/12 5xl:w-9/12 py-20" id="work">
      <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl w-max">
        Work Experience
      </h2>
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
          <h4 className="text-xl md:text-3xl">Software Developer (Contract)</h4>
          <p className="lg:row-start-2 lg:text-xl">May 22 - Nov 22</p>
        </div>

        <ul
          className="mt-4 list-disc mx-6 lg:mx-12 space-y-3 
        lg:row-start-3"
        >
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
      <ul
        className="dark:bg-gray-400 rounded-xl grid grid-flow-col
                      max-w-md lg:max-w-fit
                      p-4 my-4
                      gap-2 lg:gap-4 "
      >
        <SkillIcon skillName="c#" />
        <SkillIcon skillName="unity" />
        <SkillIcon skillName="javascript" />
        <SkillIcon skillName="html" />
        <SkillIcon skillName="css" />
      </ul>
    </section>
  );
}
