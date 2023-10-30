import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { specialOffers } from "../../data/special-offers";
import "./special-offers-page.css";
import Rating from "../../components/rating/Rating";
import ProductDescription from "../single-product/ProductDescription";
import { addToCart } from "../../redux/apiCalls/cartApiCall";
import { useDispatch } from "react-redux";

const SpecialOffersPage = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const { id } = useParams();
  const product = specialOffers.find((product) => product.id === +id);
  const { images, title, rating, reviews, price, discount } = product;

  const calculateDiscount = price - (discount * price) / 100;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Add To Cart Handler
  const addToCartHandler = () => {
    const newItem = {
      id,
      quantity,
      price,
      title,
      image: images[0],
    };
    dispatch(addToCart(newItem));
  };

  return (
    <>
      <div className="special-offer-page">
        <div className="special-offer-page-img-wrapper">
          <img
            src={images[imageIndex]}
            alt={title}
            className="special-offer-page-img"
          />
          <div className="special-offer-page-select-img">
            {images.map((source, index) => (
              <img
                key={index}
                src={source}
                alt={title}
                className="select-img"
                onClick={() => setImageIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="special-offer-page-info">
          <h3 className="special-offer-page-title">{title}</h3>
          <Rating rating={rating} reviews={reviews} />
          <div className="special-offer-page-price">
            <b className="special-offer-price-item">{price}</b>
            <b className="special-offer-final-price-item">
              {calculateDiscount}
            </b>
          </div>
          <div className="special-offer-page-add-to-cart">
            <div>الكميه</div>
            <input
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              type="number"
              min="1"
              max="10"
            />
            <button onClick={addToCartHandler} className="add-to-cart-btn">
              اضافه الي سلة التسوق
            </button>
          </div>
        </div>
      </div>
      <ProductDescription />
    </>
  );
};

export default SpecialOffersPage;
