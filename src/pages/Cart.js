import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increseQuantity,
  decreseQuantity,
  deleteItem,
  clearCart,
} from "../redux/webstoreSlice";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.webStore.productsData);
  useEffect(() => {
    let total = 0;
    productData.map((item) => {
      total += item.price * item.quantity;
      return setTotalPrice(total.toFixed(2));
    });
  }, [productData]);
  return (
    <div>
      <div className=" h-auto py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
          {productData.length > 0 ? (
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-3/4">
                <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left font-semibold">Product</th>
                        <th className="text-left font-semibold">Price</th>
                        <th className="text-left font-semibold">Quantity</th>
                        <th className="text-left font-semibold">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productData.map((item) => (
                        <tr key={item.id}>
                          <td className="py-4">
                            <div className="flex items-center">
                              <img
                                className="w-28 mr-4 object-cover"
                                src={item.img_url}
                                alt="Product"
                              />
                              <div>
                                <h2 className="font-semibold">{item.title}</h2>
                                <p
                                  onClick={() => dispatch(deleteItem(item.id))}
                                  className="text-sm cursor-pointer mt-3 hover:text-red-500"
                                >
                                  remove
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4">${item.price}</td>
                          <td className="py-4">
                            <div className="flex items-center">
                              <button
                                onClick={() =>
                                  dispatch(decreseQuantity(item.id))
                                }
                                className="border rounded-md py-2 px-4 mr-2"
                              >
                                -
                              </button>
                              <span className="text-center w-8">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  dispatch(increseQuantity(item.id))
                                }
                                className="border rounded-md py-2 px-4 ml-2"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="py-4">
                            ${(item.price * item.quantity).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                      {/* <!-- More product rows --> */}
                    </tbody>
                  </table>
                  <div className=" flex  justify-end">
                    <button
                      onClick={() => dispatch(clearCart())}
                      className="text-red-500 hover:text-white hover:bg-red-500 py-2 border border-red-500 px-4 duration-300 rounded-lg mt-4"
                    >
                      Clear cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:w-1/4">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-lg font-semibold mb-4">Summary</h2>
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>${totalPrice}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span>$0.00</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">${totalPrice}</span>
                  </div>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex my-28 justify-center items-center">
              <p className="text-3xl">No Products...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
