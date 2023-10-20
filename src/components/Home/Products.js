import React, { useEffect, useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/webstoreSlice";

const Products = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setProducts(data.data);
  }, [data]);
  return (
    <div>
      <div className=" relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12 md:-mt-24 mx-auto px-8">
        {products.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

function ProductsCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const _id = product.title;
  const isString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = isString(_id);
  console.log(rootId);
  function handleDetails() {
    navigate(`product/${rootId}`, {
      state: {
        item: product,
      },
    });
  }
  return (
    <div className="group my-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-300 hover:shadow-lg duration-300 bg-white shadow-md">
      <div
        onClick={handleDetails}
        className="mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
      >
        <img
          className="h-full w-full object-cover"
          src={product.image}
          alt="product"
        />
      </div>
      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl tracking-tight text-slate-900">
          {product.title}
        </h5>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-2xl font-semibold text-slate-900">
              ${product.price}
            </span>
            <span className="text-sm text-slate-900 line-through">
              ${product.oldPrice}
            </span>
          </p>
        </div>
        <button
          onClick={() =>
            dispatch(
              addToCart({
                id: product._id,
                title: product.title,
                img_url: product.image,
                price: product.price,
                quantity: 1,
              })
            )
          }
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Products;
