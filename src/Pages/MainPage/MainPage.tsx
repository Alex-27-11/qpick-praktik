import React from "react";
import "./MainPage.scss";
import { headPhones, wirelessHeadphones } from "../../utils/phonesArr";
import List from "../../components/List/List";

const MainPage: React.FC = () => {
  return (
    <section className="mainPage">
      <div className="mainPage__container container">
        <div className="mainPage__inner">
          <List data={headPhones} title="Наушники" />
          <List data={wirelessHeadphones} title="Беспроводные наушники" />
        </div>
      </div>
    </section>
  );
};

export default MainPage;
