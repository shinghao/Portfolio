import { Link } from "react-scroll";

interface HeaderLinkProps {
  linkTo: string;
}

export default function NavbarLinkBtn(prop: HeaderLinkProps) {
  return (
    <li>
      <Link
        to={prop.linkTo}
        spy={true}
        offset={-20}
        smooth={true}
        duration={500}
        className="cursor-pointer 
        capitalize 
        px-3 
        relative 
        ease-in 
        after:block after:content-[''] 
        after:absolute 
        after:h-0.5 
        after:w-0 
        after:bg-primary-btn-blue 
        after:-bottom-2 
        after:transition-all 
        after:ease-in 
        duration-300 
        hover:after:w-full 
        hover:text-primary-btn-blue
        "
        activeClass="active"
      >
        {prop.linkTo}
      </Link>
    </li>
  );
}
