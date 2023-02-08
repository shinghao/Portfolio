import SkillIcon from "../SkillIcon";
import HighlightedText from "./HighlightedText";

export default function Work() {
  return (
    <section className="min-h-screen px-[12.8rem] py-40" id="work">
      <h2 className="text-5xl font-bold pb-16">Work Experience</h2>
      <div className="grid grid-cols-10 gap-8">
        <div className="col-span-7">
          <h3 className="text-4xl font-bold">Serl.io</h3>
          <div className="flex justify-between">
            <p className="text-4xl">Software Developer (Contract)</p>
            <p className="text-xl">May 22 - Nov 22</p>
          </div>
          <ul className="my-8 list-disc mx-12">
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
        <div className="w-[30rem] h-[30rem] self-end">
          <img
            src="boy-using-hololens.PNG"
            alt="Avatar of boy using macbook"
            className="rounded-full"
          />
        </div>
      </div>
      <ul className="grid grid-flow-col max-w-max gap-12 dark:bg-gray-400 p-4 rounded-xl">
        <SkillIcon skillName="c#" />
        <SkillIcon skillName="unity" />
        <SkillIcon skillName="javascript" />
        <SkillIcon skillName="html" />
        <SkillIcon skillName="css" />
      </ul>
    </section>
  );
}
