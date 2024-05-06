import React from "react";
import "./Card.scss";
import Star from "../../assets/images/Body/Star.svg";
import { BasketItem, HeadPhonesItem } from "../../models/models";
import { useActions } from "../../hooks/actions";

const Card: React.FC<HeadPhonesItem> = ({
  img,
  title,
  price,
  rate,
  id,
  oldPrice,
}) => {
  const { addHeadPhone, plusTotalPrice, computedCount } = useActions();

  const addToBasket = (
    event: React.MouseEvent<HTMLButtonElement>,
    cardData: BasketItem
  ) => {
    event.preventDefault();
    addHeadPhone(cardData);
    plusTotalPrice(price);
    computedCount(1);
  };

  return (
    <div className="card">
      <div className="card__inner">
        <div className="card__imgBox">
          <img src={img} alt="img" className="card__img" />
        </div>
        <div className="card__content">
          <div className="card__contentLeft">
            <h2 className="card__title">{title}</h2>
            <div className="card__ratingBox">
              <img src={Star} alt="Star" className="card__ratingImg" />
              <p className="card__rating">{rate}</p>
            </div>
          </div>
          <div className="card__contentRight">
            <div className="card__priceBox">
              <p className="card__price">{price} ₽</p>
              {oldPrice && <p className="card__oldPrice">{oldPrice} ₽</p>}
            </div>
            <button
              className="card__buttonBuying"
              onClick={(e) => addToBasket(e, { img, title, price, id })}
            >
              Купить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
