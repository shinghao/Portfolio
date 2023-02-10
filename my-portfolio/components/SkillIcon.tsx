import Image from "next/image";

interface workSkillProps {
  skillName: string;
}

const skills = [
  {
    skillName: "c#",
    src: "icons8-c-sharp-logo-96.PNG",
    text: "C#",
  },
  {
    skillName: "react",
    src: "icons8-react-native-96.PNG",
    text: "React",
  },
  {
    skillName: "unity",
    src: "icons8-unity-96.PNG",
    text: "Unity",
  },
  {
    skillName: "javascript",
    src: "icons8-javascript-96.PNG",
    text: "JavaScript",
  },
  {
    skillName: "html",
    src: "icons8-html-5-96.PNG",
    text: "HTML",
  },
  {
    skillName: "css",
    src: "icons8-css3-96.PNG",
    text: "CSS",
  },
  {
    skillName: "tailwind",
    src: "icons8-tailwindcss-96.PNG",
    text: "Tailwind CSS",
  },
];

export default function WorkSkill(prop: workSkillProps) {
  const workSkillStyle = `flex flex-col max-w-max items-center `;
  const skillObject = skills.find(
    (skill) => skill.skillName === prop.skillName
  );

  if (!skillObject) {
    return null;
  }

  return (
    <li className={workSkillStyle}>
      <Image src={skillObject.src} alt = "" className="w-24 " />
      <p className="text-xl">{skillObject.text}</p>
    </li>
  );
}
