import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import Lang from "../../assets/images/Footer/Lang.svg";
import VK from "../../assets/images/Footer/VK.svg";
import Telegram from "../../assets/images/Footer/Telegram.svg";
import Whatsapp from "../../assets/images/Footer/Whatsapp.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__inner">
          <div className="footer__columnLogo">
            <Link to="/" className="footer__logo">
              QPICK
            </Link>
          </div>
          <div className="footer__columnMenu">
            <a href="#" className="footer__columnMenu-item">
              Избранное
            </a>
            <Link to="/basket" className="footer__columnMenu-item">
              Корзина
            </Link>
            <a href="#" className="footer__columnMenu-item">
              Контакты
            </a>
          </div>
          <div className="footer__columnLangs">
            <a href="#" className="footer__service">
              Условия сервиса
            </a>
            <div className="footer__langs">
              <button className="footer__langs-button">
                <img
                  src={Lang}
                  alt="Lang"
                  className="footer__langs-button-img"
                />
              </button>
              <a href="#" className="footer__lang">
                Рус
              </a>
              <a href="#" className="footer__lang">
                Eng
              </a>
            </div>
          </div>
          <div className="footer__columnSocials">
            <a href="#" className="footer__social">
              <img src={VK} alt="VK" className="footer__social-img" />
            </a>
            <a href="#" className="footer__social">
              <img
                src={Telegram}
                alt="Telegram"
                className="footer__social-img"
              />
            </a>
            <a href="#" className="footer__social">
              <img
                src={Whatsapp}
                alt="Whatsapp"
                className="footer__social-img"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
