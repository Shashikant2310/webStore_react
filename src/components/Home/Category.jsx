import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <div className="grid grid-cols-1  md:grid-cols-4 gap-2 uppercase mx-2 my-12 md:my-48">
        <div className=" flex justify-center items-center h-[250px] bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D')]">
          <button className="text-sm font-medium hover:bg-blue-500 hover:text-white duration-300 bg-white py-2 px-4 cursor-pointer">
            <Link to="/products">SALE</Link>
          </button>
        </div>
        <div className="flex justify-center items-center h-[250px] md:h-auto md:row-span-2 bg-[url('https://images.unsplash.com/photo-1513094735237-8f2714d57c13?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZhc2hpb24lMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D')]">
          <button className="text-sm font-medium hover:bg-blue-500 hover:text-white duration-300 bg-white py-2 px-4 cursor-pointer">
            <Link to="/products">New Season</Link>
          </button>
        </div>
        <div className="flex justify-center items-center h-[250px] bg-[url('https://images.unsplash.com/photo-1575939238474-c8ada13b2724?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhc2hpb24lMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D')]">
          <button className="text-sm font-medium hover:bg-blue-500 hover:text-white duration-300 bg-white py-2 px-4 cursor-pointer">
            <Link to="/products">Men</Link>
          </button>
        </div>
        <div className="flex justify-center items-center h-[250px] bg-[url('https://images.unsplash.com/photo-1502163140606-888448ae8cfe?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGZhc2hpb24lMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D')]">
          <button className="text-sm font-medium hover:bg-blue-500 hover:text-white duration-300 bg-white py-2 px-4 cursor-pointer">
            <Link to="/products">Accessores</Link>
          </button>
        </div>
        <div className="flex justify-center items-center h-[250px] bg-[url('https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGZhc2hpb24lMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D')]">
          <button className="text-sm font-medium hover:bg-blue-500 hover:text-white duration-300 bg-white py-2 px-4 cursor-pointer">
            <Link to="/products">Women</Link>
          </button>
        </div>
        <div className="flex justify-center items-center md:col-span-2 h-[250px] bg-[url('https://img.freepik.com/premium-vector/new-year-super-shoe-sale-facebook-cover-banner-design_220809-291.jpg')]">
          <button className="text-sm font-medium hover:bg-blue-500 hover:text-white duration-300 bg-white py-2 px-4 cursor-pointer">
            <Link to="/products">Shoes</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
