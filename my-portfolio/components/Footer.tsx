import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import SocialIconBtn from "./SocialIconBtn";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center pb-20">
      <hr className="h-px my-16 bg-gray-200 w-5/6 " />
      <ul className="flex flex-row gap-12 pb-8">
        <SocialIconBtn link="https://github.com/shinghao" icon={FaGithub} />
        <SocialIconBtn
          link="https://www.linkedin.com/in/sohshinghao"
          icon={FaLinkedin}
        />
        <SocialIconBtn link="Resume_SohShingHao.pdf" icon={FaFileAlt} />
      </ul>
      <a
        href="mailto:sohshinghao@gmail.com"
        className="text-xl pb-16 cursor-pointer hover:underline-offset-4 hover:underline decoration-1"
      >
        sohshinghao@gmail.com
      </a>
      <p className="text-lg">Designed & Built by Soh Shing Hao</p>
    </footer>
  );
}
