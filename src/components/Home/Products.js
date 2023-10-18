import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Products = () => {
  const data = useLoaderData();
  const ProductsData = data.data;
  console.log(ProductsData);
  return (
    <div>
      <div className=" relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12 md:-mt-24 mx-auto px-8">
        {ProductsData.map((item) => (
          <div
            key={item._id}
            class="group my-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-300 hover:shadow-lg duration-300 bg-white shadow-md"
          >
            <Link class="mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
              <img
                class="h-full w-full object-cover"
                src={item.image}
                alt="product image"
              />
            </Link>
            <div class="mt-4 px-5 pb-5">
              <a href="#">
                <h5 class="text-xl tracking-tight text-slate-900">
                  {item.title}
                </h5>
              </a>
              <div class="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span class="text-2xl font-semibold text-slate-900">
                    ${item.price}
                  </span>
                  <span class="text-sm text-slate-900 line-through">
                    ${item.oldPrice}
                  </span>
                </p>
              </div>
              <a
                href="#"
                class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to cart
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
