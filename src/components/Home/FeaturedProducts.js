import React from "react";
import Cards from "./Cards";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image:
        "https://images.unsplash.com/photo-1614093302611-8efc4de12964?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
      image2:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      isNew: true,
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=300",
      image2:
        "https://images.pexels.com/photos/1390600/pexels-photo-1390600.jpeg?auto=compress&cs=tinysrgb&w=300",
      isNew: false,
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image:
        "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=300",
      image2:
        "https://images.pexels.com/photos/18747090/pexels-photo-18747090/free-photo-of-portrait-of-a-pretty-redhead-wearing-a-beret-standing-against-a-white-wall.jpeg?auto=compress&cs=tinysrgb&w=300",
      isNew: false,
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image:
        "https://images.pexels.com/photos/2693849/pexels-photo-2693849.jpeg?auto=compress&cs=tinysrgb&w=300",
      image2:
        "https://images.pexels.com/photos/18689504/pexels-photo-18689504/free-photo-of-female-model-wearing-white-pants-and-a-brown-jacket.jpeg?auto=compress&cs=tinysrgb&w=300",
      isNew: true,
    },
  ];
  return (
    <div className="mx-10 md:mx-48 my-12 md:my-24">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 ">
        <div className=" w-full md:w-2/5 text-2xl font-medium capitalize">
          <h2>{type}</h2>
        </div>
        <div className="w-3/5 hidden md:block text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:pl-24">
        {data.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
