import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/webstoreSlice";

const Product = () => {
  const [details, setDetails] = useState({});
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    setDetails(location.state.item);
  }, []);
  return (
    <div>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={details.image}
                  alt="Product"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4 flex justify-center items-center">
              <div className="px-4 flex flex-col gap-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {details.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {details.description}
                </p>
                <div className="mr-4 mb-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Price:
                  </span>
                  <span className="text-gray-600 text-xl font-medium dark:text-gray-300">
                    ${details.price}
                  </span>
                </div>
                <div>
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: details._id,
                          title: details.title,
                          img_url: details.image,
                          price: details.price,
                          quantity: 1,
                        })
                      )
                    }
                    className="bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
