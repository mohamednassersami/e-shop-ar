const ProductSortBox = ({ sortItem, setSortItem }) => {
  return (
    <div className="product-sort-box">
      <div className="form-group">
        <input
          value={sortItem}
          onChange={(e) => setSortItem(e.target.id)}
          type="radio"
          name="sort"
          id="noSort"
        />
        <label htmlFor="noSort">بدون ترتیب</label>
      </div>
      <div className="form-group">
        <input
          value={sortItem}
          onChange={(e) => setSortItem(e.target.id)}
          type="radio"
          name="sort"
          id="low"
        />
        <label htmlFor="low"> من الأقل الی الأعلی</label>
      </div>
      <div className="form-group">
        <input
          value={sortItem}
          onChange={(e) => setSortItem(e.target.id)}
          type="radio"
          name="sort"
          id="high"
        />
        <label htmlFor="high"> من الأعلی الی الأقل</label>
      </div>
    </div>
  );
};

export default ProductSortBox;
