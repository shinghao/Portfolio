import { Link } from "react-scroll";
import NavbarLinkBtn from "./NavbarLinkBtn";
import SocialIconBtn from "../SocialIconBtn";
import NavbarPriBtn from "./NavbarPriBtn";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaCloudMoon } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";

interface NavbarProps {
  handleDarkModeSwitch: Function;
  darkMode: boolean;
}

function Navbar(prop: NavbarProps) {
  return (
    <nav className="drop-shadow h-nav-bar px-28 fixed z-10  w-screen bg-primary-bg-light dark:bg-primary-bg-dark">
      <div className="grid grid-cols-12 gap-8 items-center min-h-full">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="col-span-2 text-3xl font-bold tracking-wider cursor-pointer"
        >
          <h1>Shing Hao</h1>
        </Link>
        <button className="p-3 max-w-max border-2 rounded-xl hover:border-gray-200 dark:hover:border-gray-400 border-transparent hover:bg-gray-100 dark:hover:bg-gray-500">
          {prop.darkMode ? (
            <FaCloudSun
              className="text-yellow-500 text-icon-button "
              onClick={() => prop.handleDarkModeSwitch()}
            ></FaCloudSun>
          ) : (
            <FaCloudMoon
              onClick={() => prop.handleDarkModeSwitch()}
            ></FaCloudMoon>
          )}
        </button>
        <ul className="col-span-4 col-start-5 flex justify-around">
          <NavbarLinkBtn linkTo="about" />
          <NavbarLinkBtn linkTo="work" />
          <NavbarLinkBtn linkTo="portfolio" />
        </ul>
        <ul className="col-start-9 col-span-4 flex gap-4 justify-end items-center">
          <SocialIconBtn link="https://github.com/shinghao" icon={FaGithub} />
          <SocialIconBtn
            link="https://www.linkedin.com/in/sohshinghao"
            icon={FaLinkedin}
          />
          <SocialIconBtn link="Resume_SohShingHao.pdf" icon={FaFileAlt} />
          <NavbarPriBtn />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
