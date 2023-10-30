import HeaderBanner from "../../components/header-banner/HeaderBanner";
import Category from "../../components/category/Category";
import SpecialOffers from "../../components/special-offers/SpecialOffers";
import HeadingTitle from "../../components/heading-title/HeadingTitle";
import Slider from "../../components/slider/Slider";
import Brands from "../../components/brands/Brands";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/apiCalls/productApiCall";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const laptops = products.filter((product) => product.isLaptop === true);
  const mobiles = products.filter((product) => product.isLaptop === false);
  return (
    <>
      <HeaderBanner />
      <Category />
      <SpecialOffers />
      <HeadingTitle title="الجديد من اللابتوبات" />
      <Slider products={laptops} />
      <HeadingTitle title="الجديد من الموبايلات" />
      <Slider products={mobiles} />
      <HeadingTitle title="تسوق حسب المارك" />
      <Brands />
    </>
  );
};

export default Home;
