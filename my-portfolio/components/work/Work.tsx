import SkillIcon from "../SkillIcon";
import HighlightedText from "./HighlightedText";
import Image from "next/image";

export default function Work() {
  return (
    <section className="min-h-screen px-16 lg:px-[12.8rem] lg:py-40" id="work">
      <h2 className="text-4xl lg:text-5xl font-bold pb-6 lg:pb-16">
        Work Experience
      </h2>
      <div className="lg:grid lg:grid-cols-10 lg:gap-8">
        <div className="col-span-7">
          <h3 className="text-2xl lg:text-4xl font-bold">Serl.io</h3>
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <p className="text-xl lg:text-3xl">Software Developer (Contract)</p>
            <p className="lg:text-xl">May 22 - Nov 22</p>
          </div>
          <ul className="my-8 list-disc mx-6 lg:mx-12 ">
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
        <div className="w-60 h-60 m-auto mb-6 lg:mb-0 lg:w-[30rem] lg:h-[30rem] lg:self-end">
          <img
            src="boy-using-hololens.png"
            alt="Avatar of boy using macbook"
            className="rounded-full"
          />
        </div>
      </div>
      <ul className="grid grid-flow-col max-w-max gap-6 lg:gap-12 dark:bg-gray-400 p-4 rounded-xl">
        <SkillIcon skillName="c#" />
        <SkillIcon skillName="unity" />
        <SkillIcon skillName="javascript" />
        <SkillIcon skillName="html" />
        <SkillIcon skillName="css" />
      </ul>
    </section>
  );
}
