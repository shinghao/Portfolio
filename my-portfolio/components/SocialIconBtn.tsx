import React from "react";

interface IconBtnProps {
  link: string;
  icon: any;
}

export default function SocialIconBtn(prop: IconBtnProps) {
  return (
    <li>
      <div className="flex p-2 border-2 rounded-lg dark:hover:border-gray-400 border-transparent hover:border-gray-400 hover:bg-gray-300 dark:hover:bg-gray-500">
        <a
          href={prop.link}
          target="_blank"
          rel="noreferrer"
          className="text-icon-button 
          ease-in 
          duration-100"
        >
          {React.createElement(prop.icon)}
        </a>
      </div>
    </li>
  );
}
