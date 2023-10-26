import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { productData } from "./api/api";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import Product from "./components/Home/Product";
import Products from "./components/Home/Products";

const Layer = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layer />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: productData,
        },
        {
          path: "/products",
          element: <Products />,
          loader: productData,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
  ]);
  return (
    <div className="bg-gray-50 font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}
