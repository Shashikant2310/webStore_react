import Hero from "../components/Home/Hero";
import Products from "../components/Home/Products";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import Category from "../components/Home/Category";
import Contact from "../components/Home/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts type="feature products" />
      <Category />
      <Products />
      <Contact />
    </div>
  );
};

export default Home;
