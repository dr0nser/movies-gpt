import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

const Footer: React.FunctionComponent = (): JSX.Element => {
  return (
    <footer className="bg-black text-gray-50 flex items-center justify-between px-20 pb-10">
      <div className="text-xl">
        Created by{" "}
        <a
          className="text-decoration-none text-red-600 hover:underline"
          href="https://github.com/whyucode"
          target="_blank"
        >
          @whyucode
        </a>
      </div>
      <div className="flex items-center space-x-6 text-3xl">
        <a
          className="text-gray-50 hover:text-[#0077B5]"
          href="https://www.linkedin.com/in/souvikdasdev/"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a
          className="text-gray-50 "
          href="https://github.com/whyucode"
          target="_blank"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
