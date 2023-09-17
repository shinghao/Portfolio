import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import SocialIconBtn from "./SocialIconBtn";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center pb-8">
      <hr className="h-px mb-8 w-5/6 border-gray-300 dark:border-gray-500" />
      <ul className="flex flex-row gap-2 pb-4 ">
        <SocialIconBtn link="https://github.com/shinghao" icon={FaGithub} />
        <SocialIconBtn
          link="https://www.linkedin.com/in/sohshinghao"
          icon={FaLinkedin}
        />
        <SocialIconBtn link="mailto:sohshinghao@gmail.com" icon={FaEnvelope} />
      </ul>
      <p className="text-[1rem]">Designed & Built by Soh Shing Hao</p>
    </footer>
  );
}
