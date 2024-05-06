import React from "react";
import "./Basket.scss";
import { useAppSelector } from "../../hooks/redux";
import BasketCard from "../../components/BasketCard/BasketCard";

const Basket: React.FC = () => {
  const { basketCards } = useAppSelector((state) => state.qpick);
  const { totalPrice } = useAppSelector((state) => state.qpick);

  return (
    <section className="basket">
      <div className="basket__container container">
        <div className="basket__inner">
          <h2 className="basket__title">Корзина</h2>
          <div className="basket__body">
            <div className="basket__list">
              {basketCards.map((card) => (
                <BasketCard key={card.id} {...card} />
              ))}
            </div>
            <div className="basket__gap"></div>
            <div className="basket__total">
              <div className="basket__total-count">
                <span className="basket__total-text">ИТОГО</span>
                <span className="basket__total-price">₽ {totalPrice}</span>
              </div>
              <button className="basket__total-button">
                Перейти к оформлению
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Basket;
