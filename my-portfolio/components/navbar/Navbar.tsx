import { Link } from "react-scroll";
import NavbarLinkBtn from "./NavbarLinkBtn";
import SocialIconBtn from "../SocialIconBtn";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMoon,
  FaSun,
} from "react-icons/fa";

interface NavbarProps {
  handleDarkModeSwitch: Function;
  darkMode: boolean;
}

function Navbar(prop: NavbarProps) {
  return (
    <header
      role="banner"
      className="drop-shadow h-nav-bar-s sm:h-nav-bar fixed z-10  w-screen bg-primary-bg-light dark:bg-primary-bg-dark
    animate__animated animate__fadeInDownBig animate__delay-2s"
    >
      <div className="grid grid-flow-col lg:auto-cols-fr items-center h-full w-11/12 m-auto ">
        <div className="flex flex-row items-center gap-3">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="font-bold tracking-wider cursor-pointer lg:text-2xl"
          >
            <h1>Shing Hao</h1>
          </Link>
        </div>

        <nav
          role="navigation"
          className="m-auto justify-around w-full hidden navbar:flex"
        >
          <NavbarLinkBtn linkTo="about" />
          <NavbarLinkBtn linkTo="work" />
          <NavbarLinkBtn linkTo="portfolio" />
        </nav>

        <ul className="flex justify-end items-center md:gap-2 3xl:gap-4">
          <SocialIconBtn link="https://github.com/shinghao" icon={FaGithub} />
          <SocialIconBtn
            link="https://www.linkedin.com/in/sohshinghao"
            icon={FaLinkedin}
          />
          <SocialIconBtn
            link="mailto:sohshinghao@gmail.com"
            icon={FaEnvelope}
          />
          <button className="p-2 border-2 rounded-xl hover:border-gray-400 dark:hover:border-gray-400 border-transparent hover:bg-gray-300 dark:hover:bg-gray-500">
            {prop.darkMode ? (
              <FaSun
                className="text-yellow-500 text-icon-button "
                onClick={() => prop.handleDarkModeSwitch()}
              ></FaSun>
            ) : (
              <FaMoon
                className="text-icon-button "
                onClick={() => prop.handleDarkModeSwitch()}
              ></FaMoon>
            )}
          </button>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
