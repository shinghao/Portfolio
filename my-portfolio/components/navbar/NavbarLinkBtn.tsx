import { Link } from "react-scroll";

interface HeaderLinkProps {
  linkTo: string;
}

export default function NavbarLinkBtn(prop: HeaderLinkProps) {
  const navbarLinkBtn = `
  cursor-pointer 
  capitalize 
  px-4 
  relative 
  ease-in 
  duration-300
  after:block after:content-[''] 
  after:absolute 
  after:h-1 
  after:w-0 
  after:bg-primary-btn-blue 
  after:-bottom-3 
  after:transition-all 
  after:ease-in 
  duration-300 
  hover:after:w-full 
  hover:text-primary-btn-blue  
  `;

  return (
    <li>
      <Link
        to={prop.linkTo}
        spy={true}
        offset={-20}
        smooth={true}
        duration={500}
        className={navbarLinkBtn}
        activeClass="active"
      >
        {prop.linkTo}
      </Link>
    </li>
  );
}
