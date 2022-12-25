import React from "react";
import Item from "./Item";

export default function List({array, onRemove}) {
  return (
    <div className="list">
      <div className="header">
        <span>Дата (ДД.ММ.ГГ)</span>
        <span>Пройдено</span>
        <span>Действия</span>
      </div>
      <div className="items">
        {array.map(o => <Item key={o.id} item={o} onRemove={onRemove}></Item>)}
      </div>
    </div>
  )
}