import React from "react";

const Footer = () => {
  return (
    <div className=" mx-10 md:mx-48 mt-24 mb-5">
      <div className="flex flex-wrap md:flex-nowrap  justify-between gap-10 md:gap-28 text-sm font-normal leading-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-medium mb-3">Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-medium mb-3">Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="flex gap-4">
          <div>
            <h1 className="text-lg font-medium mb-3">About</h1>
            <span>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor
              sit
            </span>
          </div>
          <div>
            <h1 className="text-lg font-medium mb-3">Contact</h1>
            <span>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor
              sit
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-12">
        <div className="">
          <span className=" text-2xl font-bold text-blue-500 mr-1">
            web store
          </span>
          <span className="text-sm text-gray-700">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className=" flex justify-end">
          <img className=" h-12" src="/img/payment.png" alt="cards " />
        </div>
      </div>
    </div>
  );
};

export default Footer;
