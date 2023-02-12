export default function NavbarPriBtn() {
  return (
    <li>
      <a href="mailto:sohshinghao@gmail.com">
        <button
          className="w-36 h-12 lg:w-[8.75rem] lg:h-[3.1rem]
                    lg:text-2xl
                    rounded-btn-primary 
                    text-primary-text-light font-bold 
                    bg-gradient-to-r from-primary-btn-blue to-teal-500
                    ease-in transition-colors duration-700
                    hover:from-teal-500 hover:to-primary-btn-blue
                    hidden
                    xsm:block"
        >
          Contact
        </button>
      </a>
    </li>
  );
}
