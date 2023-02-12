import Image from "next/image";

interface workSkillProps {
  skillName: string;
}

const skills = [
  {
    skillName: "c#",
    src: "icons8-c-sharp-logo-96.png",
    text: "C#",
  },
  {
    skillName: "react",
    src: "icons8-react-native-96.png",
    text: "React",
  },
  {
    skillName: "unity",
    src: "icons8-unity-96.png",
    text: "Unity",
  },
  {
    skillName: "javascript",
    src: "icons8-javascript-96.png",
    text: "JavaScript",
  },
  {
    skillName: "html",
    src: "icons8-html-5-96.png",
    text: "HTML",
  },
  {
    skillName: "css",
    src: "icons8-css3-96.png",
    text: "CSS",
  },
  {
    skillName: "tailwind",
    src: "icons8-tailwindcss-96.png",
    text: "Tailwind CSS",
  },
];

export default function WorkSkill(prop: workSkillProps) {
  const skillObject = skills.find(
    (skill) => skill.skillName === prop.skillName
  );

  if (!skillObject) {
    return null;
  }

  return (
    <li className="flex flex-col max-w-max items-center justify-self-center">
      <img src={skillObject.src} alt="" className="w-12 lg:w-16 " />
      {/* <p className="text-xs lg:text-xl ">{skillObject.text}</p> */}
    </li>
  );
}
