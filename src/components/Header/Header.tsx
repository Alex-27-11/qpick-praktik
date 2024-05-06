import React, { useState } from "react";
import "./Header.scss";
import heartImg from "../../assets/images/Header/Heart.svg";
import basket from "../../assets/images/Header/Basket.svg";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

const Header: React.FC = () => {
  const [heart, setHeart] = useState(0);
  const { Count } = useAppSelector((state) => state.qpick);

  const heartClick = () => {
    setHeart(heart + 1);
  };

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__inner">
          <Link to="/" className="header__logo-link">
            QPICK
          </Link>
          <div className="header__activity">
            <a href="#" className="header__heart" onClick={heartClick}>
              <img
                src={heartImg}
                alt="heartImg"
                className="header__heart-img"
              />
              {heart >= 1 ? <p className="header__heart-count">{heart}</p> : ""}
            </a>
            <Link to="/basket" className="header__basket">
              <img src={basket} alt="basket" className="header__basket-img" />
              {Count >= 1 ? (
                <p className="header__basket-count">{Count}</p>
              ) : (
                ""
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
