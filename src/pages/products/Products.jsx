import "./products.css";
import ProductList from "./ProductList";
import ProductSidebar from "./ProductSidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../redux/apiCalls/productApiCall";
import Pagination from "./Pagination";

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

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  const PRODUCT_PER_PAGE = 3;
  const pages = Math.ceil(sortedProductList.length / PRODUCT_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCT_PER_PAGE;
  const finalIndex = currentPage * PRODUCT_PER_PAGE;

  const orderedProducts = sortedProductList.slice(startIndex, finalIndex);

  return (
    <>
      <div className="products">
        <ProductSidebar
          filterItem={filterItem}
          setFilterItem={setFilterItem}
          sortItem={sortItem}
          setSortItem={setSortItem}
          setCurrentPage={setCurrentPage}
        />
        <ProductList products={orderedProducts} />
      </div>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Products;
