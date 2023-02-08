export default function NavbarPriBtn() {
  const priBtnStyle = `
    w-btn-m 
    h-btn-primary 
    rounded-btn-primary 
    text-primary-text-light 
    font-bold 
    bg-gradient-to-r 
    from-primary-btn-blue 
    to-teal-500`;

  return (
    <li>
      <a href="mailto:sohshinghao@gmail.com">
        <button className={priBtnStyle}>Contact</button>
      </a>
    </li>
  );
}
