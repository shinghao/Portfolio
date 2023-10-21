import Image from "next/image";

export default function SkillCard(props: { src: string; text: string }) {
  return (
    <div
      className="bg-slate-100 dark:bg-gray-400 rounded-xl dark:shadow-none 
                  shadow-skills-card flex flex-col items-center justify-center
                  w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 "
    >
      <Image
        src={props.src}
        alt={props.text}
        width={96}
        height={96}
        className="w-12 sm:w-14 lg:w-20 hover:-translate-y-2 text-center"
      />
      <p className="text-sm sm:text-base md:text-lg lg:text-lg">{props.text}</p>
    </div>
  );
}
