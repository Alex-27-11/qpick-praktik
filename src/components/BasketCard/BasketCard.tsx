import React, { useState } from "react";
import "./BasketCard.scss";
import Plus from "../../assets/images/Basket/+.svg";
import Minus from "../../assets/images/Basket/-.svg";
import Delete from "../../assets/images/Basket/Del.svg";
import { BasketItem } from "../../models/models";
import { useActions } from "../../hooks/actions";

const BasketCard: React.FC<BasketItem> = ({ img, title, price, id }) => {
  const { removeHeadPhone, minusTotalPrice, plusTotalPrice, computedCount } =
    useActions();

  const [count, setCount] = useState(1);
  const initialPrice = price;

  const handleMinusClick = () => {
    if (count > 1) {
      setCount(count - 1);
      minusTotalPrice(initialPrice);
    }
  };

  const handlePlusClick = () => {
    setCount(count + 1);
    plusTotalPrice(initialPrice);
  };

  const removeFromBasket = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    event.preventDefault();
    removeHeadPhone(id);
    minusTotalPrice(initialPrice * count);
    computedCount(-1);
  };

  return (
    <div className="basketCard">
      <div className="basketCard__inner">
        <div className="basketCard__leftColumn">
          <div className="basketCard__imgBox">
            <img src={img} alt="Img" className="basketCard__img" />
          </div>
          <div className="basketCard__contBox">
            <button
              className="basketCard__buttonMinus"
              onClick={handleMinusClick}
            >
              <img src={Minus} alt="Minus" className="basketCard__imgMinus" />
            </button>
            <p className="basketCard__count">{count}</p>
            <button
              className="basketCard__buttonPlus"
              onClick={handlePlusClick}
            >
              <img src={Plus} alt="Plus" className="basketCard__imgPlus" />
            </button>
          </div>
        </div>
        <div className="basketCard__midColumn">
          <h2 className="basketCard__title">{title}</h2>
          <p className="basketCard__price">{initialPrice} ₽</p>
        </div>
        <div className="basketCard__rightColumn">
          <button
            className="basketCard__buttonDelete"
            onClick={(e) => removeFromBasket(e, id)}
          >
            <img src={Delete} alt="" className="basketCard__imgDelete" />
          </button>
          <p className="basketCard__total">{count * initialPrice} ₽</p>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
