import Image from "next/image";

interface SkillCardProps {
  src: string;
  text: string;
}

export default function SkillCard(props: SkillCardProps) {
  return (
    <li>
      <div className="bg-slate-100 dark:bg-gray-400 dark:font-bold rounded-2xl dark:shadow-none shadow-skills-card w-52 h-56 flex flex-col items-center justify-center ">
        <Image
          src={props.src}
          alt=""
          className="w-32 hover:-translate-y-2 text-center"
        />
        <p className="text-xl">{props.text}</p>
      </div>
    </li>
  );
}
