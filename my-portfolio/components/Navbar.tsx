import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaCloudMoon } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";

function Navbar() {
  const navIconBtnStyle = `text-icon-button hover:text-primary-btn-blue hover:scale-110`;
  const navBtnStyle = ` px-4 relative after:block after:content-[''] after:absolute after:h-1 after:w-0 after:bg-primary-btn-blue after:-bottom-3 after:transition-all after:ease-in duration-300 hover:after:w-full hover:text-primary-btn-blue ease-in duration-300`;
  return (
    <nav className="drop-shadow h-nav-bar px-28 fixed z-10 bg-primary-bg-light w-screen">
      <div className="grid grid-cols-12 gap-8 items-center min-h-full">
        <h1 className="col-span-2 text-4xl font-bold tracking-wider">
          Shing Hao
        </h1>
        <ul className="col-span-4 col-start-5 flex justify-around">
          <li>
            <a href="" className={navBtnStyle}>
              About
            </a>
          </li>
          <li>
            <a href="" className={navBtnStyle}>
              Work
            </a>
          </li>
          <li>
            <a href="" className={navBtnStyle}>
              Projects
            </a>
          </li>
        </ul>
        <ul className="col-start-9 col-span-4 flex gap-8 justify-end items-center">
          <li>
            <a href="https://github.com/shinghao" target="_blank">
              <FaGithub className={navIconBtnStyle} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sohshinghao/" target="_blank">
              <FaLinkedin className={navIconBtnStyle} />
            </a>
          </li>
          <li>
            <a href="Resume_SohShingHao.pdf" target="_blank">
              <FaFileAlt className={navIconBtnStyle} />
            </a>
          </li>
          <li>
            <a href="mailto:sohshinghao@gmail.com">
              <button className="w-btn-m h-btn-primary rounded-btn-primary hover:shadow-skills-card text-primary-text-light font-bold bg-gradient-to-r from-primary-btn-blue to-teal-500">
                Contact
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
