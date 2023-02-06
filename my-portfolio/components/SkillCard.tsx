interface SkillCardProps {
  src: string;
  alt: string;
  text: string;
}

export default function SkillCard(props: SkillCardProps) {
  return (
    <div className="bg-slate-100 rounded-2xl shadow-skills-card w-52 h-56 flex flex-col items-center justify-center">
      <img src={props.src} alt={props.alt} className="w-32 hover:scale-110" />
      <p className="text-xl ">{props.text}</p>
    </div>
  );
}
