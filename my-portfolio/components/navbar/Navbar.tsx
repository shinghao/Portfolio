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
    <nav className="drop-shadow h-nav-bar  fixed z-10  w-screen bg-primary-bg-light dark:bg-primary-bg-dark">
      <div className="grid grid-flow-col lg:auto-cols-fr items-center min-h-full w-11/12 m-auto">
        <div className="flex flex-row gap-2 items-center">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="font-bold tracking-wider cursor-pointer
                      lg:text-3xl "
          >
            <h1>Shing Hao</h1>
          </Link>
          <button className="xxm:p-3 lg:m-3 max-w-max border-2 rounded-xl hover:border-gray-200 dark:hover:border-gray-400 border-transparent hover:bg-gray-100 dark:hover:bg-gray-500">
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
        </div>

        <ul className="m-auto justify-around w-full hidden navbar:flex">
          <NavbarLinkBtn linkTo="about" />
          <NavbarLinkBtn linkTo="work" />
          <NavbarLinkBtn linkTo="portfolio" />
        </ul>

        <ul className="flex justify-end items-center 2xl:gap-2 3xl:gap-4">
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
