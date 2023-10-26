import React from "react";
import { Link } from "react-router-dom";
import "./cards.css";

const Cards = ({ item }) => {
  return (
    <div>
      <Link to={`/products/${item.id}`}>
        <div className="flex flex-col gap-4">
          <div className="img-box w-full h-[280px] overflow-hidden relative ">
            {item.isNew && (
              <span className=" absolute top-1 left-1 text-xs font-medium text-teal-500 bg-white px-1 py-[2px] z-10">
                New Season
              </span>
            )}
            <img
              className="img-one w-4/5 md:w-full h-full object-cover absolute z-[1]"
              src={item.image}
              alt="product"
            />
            <img
              className="img-two w-4/5  md:w-full h-full object-cover absolute"
              src={item.image2}
              alt="product"
            />
          </div>
          <p className="text-base font-medium">{item.title}</p>
          <div className="flex gap-2 -mt-2">
            <span className="text-gray-400 line-through">{item.price}</span>
            <p className="text-lg font-medium">${item.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Cards;
