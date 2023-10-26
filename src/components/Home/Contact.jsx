import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGoogle,
} from "react-icons/ai";
import { BiLogoPinterest } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="text-white p-4 bg-contactBg my-12">
      <div className="flex flex-col md:flex-row justify-between items-center w-4/5 gap-4 md:gap-0 md:w-3/5 mx-auto">
        <h3 className="text-lg font-medium ">BE IN TOUCH WITH US:</h3>
        <div className="flex items-center">
          <input
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm focus:ring-blue-500 focus:border-blue-500 block p-[7px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            required
          />
          <button
            type="button"
            class="text-white hover:bg-[#24292F] bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium text-sm px-4 py-2 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
          >
            JOIN US
          </button>
        </div>
        <div className="flex text-2xl gap-2 cursor-pointer">
          <AiFillFacebook />
          <AiOutlineInstagram />
          <AiOutlineTwitter />
          <AiOutlineGoogle />
          <BiLogoPinterest />
        </div>
      </div>
    </div>
  );
};

export default Contact;
