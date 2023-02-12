import Image from "next/image";

interface SkillCardProps {
  src: string;
  text: string;
}

export default function SkillCard(props: SkillCardProps) {
  return (
    <li>
      <div
        className="bg-slate-100 dark:bg-gray-400 dark:font-bold rounded-xl dark:shadow-none shadow-skills-card flex flex-col items-center justify-center  
                  w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 "
      >
        <img
          src={props.src}
          alt=""
          className="w-12 sm:w-14 lg:w-20 hover:-translate-y-2 text-center"
        />
        <p className="text-sm sm:text-base md:text-lg lg:text-lg">
          {props.text}
        </p>
      </div>
    </li>
  );
}
