import React from "react";
import moment from "moment";
import icon from '../img/delete.png';

export default function Item({item, onRemove}) {
  return (
    <div className="item">
      <div className="data_item">{moment(item.date).format("DD.MM.YY")}</div>
      <div className="distance_item">{item.distance}</div>
      <button className="button_item" >
        <img src={icon} alt="удалить" onClick={() => onRemove(item)}></img>
      </button>
    </div>
  );
}