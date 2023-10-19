import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { productData } from "./api/api";
import Cart from "./pages/Cart";

const Layer = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layer />}>
        <Route index element={<Home />} loader={productData} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    )
  );
  return (
    <div className=" bg-gray-50">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
