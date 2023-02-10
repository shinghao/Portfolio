import React from "react";

interface IconBtnProps {
  link: string;
  icon: any;
}

export default function SocialIconBtn(prop: IconBtnProps) {
  const navIconBtnStyle = `
  
  `;

  return (
    <li>
      <div className="flex p-3 border-2 rounded-xl dark:hover:border-gray-400 border-transparent hover:border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-500">
        <a
          href={prop.link}
          target="_blank"
          rel="noreferrer"
          className="text-icon-button 
          ease-in 
          duration-100
        dark:hover:text-primary-text-light"
        >
          {React.createElement(prop.icon)}
        </a>
      </div>
    </li>
  );
}
