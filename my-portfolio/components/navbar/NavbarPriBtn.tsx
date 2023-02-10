export default function NavbarPriBtn() {
  const priBtnStyle = `
    w-btn-m 
    h-btn-primary 
    rounded-btn-primary 
    text-primary-text-light 
    font-bold 
    bg-gradient-to-r 
    from-primary-btn-blue 
    to-teal-500
    ease-in-out 
    transition-500
    hover:from-teal-500
    hover:to-primary-btn-blue`;

  return (
    <li>
      <a href="mailto:sohshinghao@gmail.com">
        <button
          className="w-btn-m 
    h-btn-primary 
    rounded-btn-primary 
    text-primary-text-light 
    font-bold 
    bg-gradient-to-r 
    from-primary-btn-blue 
    to-teal-500
    ease-in
    transition-colors
    duration-700
    hover:from-teal-500
    hover:to-primary-btn-blue"
        >
          Contact
        </button>
      </a>
    </li>
  );
}
