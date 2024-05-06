import React from "react";
import "./List.scss";
import { HeadPhonesItem } from "../../models/models";
import Card from "../Card/Card";

interface ListProps {
  data: HeadPhonesItem[];
  title: string;
}

const List: React.FC<ListProps> = ({ data = [], title }) => {
  return (
    <section className="list">
      <div className="list__inner">
        <h2 className="list__title">{title}</h2>
        <div className="list__body">
          {data.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default List;
