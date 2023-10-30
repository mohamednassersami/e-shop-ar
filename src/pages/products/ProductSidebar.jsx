import ProductFilterBox from "./ProductFilterBox";
import ProductSortBox from "./ProductSortBox";

const ProductSidebar = ({
  filterItem,
  setFilterItem,
  sortItem,
  setSortItem,
}) => {
  return (
    <div className="product-sidebar">
      <div className="sidebar-item">
        <h4 className="product-sidebar-title">فلتر حسب السعر</h4>
        <ProductSortBox sortItem={sortItem} setSortItem={setSortItem} />
      </div>
      <div className="sidebar-item">
        <h4 className="product-sidebar-title">ترتیب حسب السلعه</h4>
        <ProductFilterBox
          filterItem={filterItem}
          setFilterItem={setFilterItem}
        />
      </div>
    </div>
  );
};

export default ProductSidebar;
