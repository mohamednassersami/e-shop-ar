import { specialOffers } from "../../data/special-offers";
import Offer from "./Offer";
import "./special-offers.css";

const SpecialOffers = () => {
  return (
    <div className="special-offers">
      <h1 className="special-offers-title">
        عروض کبیره للیوم
        <span className="special-offers-icon-wrapper">
          <i className="bi bi-stopwatch"></i>ل 24 ساعه بس
        </span>
      </h1>
      <div className="special-offers-wrapper">
        {specialOffers.map((offer) => (
          <Offer key={offer.id} offer={offer} />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
