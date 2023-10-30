const ProductFilterBox = ({ filterItem, setFilterItem, setCurrentPage }) => {
  return (
    <div className="product-filter">
      <div className="form-group">
        <input
          value={filterItem}
          onChange={(e) => {
            setFilterItem(e.target.id);
            setCurrentPage(1);
          }}
          type="radio"
          name="filter"
          id="all"
        />
        <label htmlFor="all">بدون فلتر</label>
      </div>
      <div className="form-group">
        <input
          value={filterItem}
          onChange={(e) => {
            setFilterItem(e.target.id);
            setCurrentPage(1);
          }}
          type="radio"
          name="filter"
          id="laptop"
        />
        <label htmlFor="laptop">لابتوب</label>
      </div>
      <div className="form-group">
        <input
          value={filterItem}
          onChange={(e) => {
            setFilterItem(e.target.id);
            setCurrentPage(1);
          }}
          type="radio"
          name="filter"
          id="mobile"
        />
        <label htmlFor="mobile">جوال</label>
      </div>
    </div>
  );
};

export default ProductFilterBox;
