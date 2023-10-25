import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import HeaderBanner from "./components/header-banner/HeaderBanner";
import Category from "./components/category/Category";
import SpecialOffers from "./components/special-offers/SpecialOffers";
import HeadingTitle from "./components/heading-title/HeadingTitle";
import Slider from "./components/slider/Slider";
import Brands from "./components/brands/Brands";
import { products } from "./data/products";
import Footer from "./components/footer/Footer";

function App() {
  const laptops = products.filter((product) => product.isLaptop === true);
  const mobiles = products.filter((product) => product.isLaptop === false);
  return (
    <BrowserRouter>
      <Header />
      <HeaderBanner />
      <Category />
      <SpecialOffers />
      <HeadingTitle title="الجديد من اللابتوبات" />
      <Slider products={laptops} />
      <HeadingTitle title="الجديد من الموبايلات" />
      <Slider products={mobiles} />
      <HeadingTitle title="تسوق حسب المارك" />
      <Brands />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
