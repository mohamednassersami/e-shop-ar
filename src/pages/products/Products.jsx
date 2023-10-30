import "./products.css";
import ProductList from "./ProductList";
import ProductSidebar from "./ProductSidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../redux/apiCalls/productApiCall";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  const [filterItem, setFilterItem] = useState("all");
  const [sortItem, setSortItem] = useState("select");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter Product
  const filteredProduct = products.filter((product) =>
    filterItem === "laptop"
      ? product.isLaptop === true
      : filterItem === "mobile"
      ? product.isLaptop === false
      : product
  );

  // Sort Product
  const sortedProductList =
    sortItem === "low"
      ? filteredProduct.sort((a, b) => a.price - b.price)
      : sortItem === "high"
      ? filteredProduct.sort((a, b) => b.price - a.price)
      : filteredProduct.sort((a, b) => (a.title > b.title ? 1 : -1));

  return (
    <div className="products">
      <ProductSidebar
        filterItem={filterItem}
        setFilterItem={setFilterItem}
        sortItem={sortItem}
        setSortItem={setSortItem}
      />
      <ProductList products={sortedProductList} />
    </div>
  );
};

export default Products;
