import React from "react";
import Item from "./Item";

export default function List({array, onRemove}) {
  return (
    <div className="list">
      <div className="header">
        <span>Дата (ГГГГ-ДД-ММ)</span>
        <span>Пройдено</span>
        <span>Действия</span>
      </div>
      <div className="items">
        {array.sort((a, b) => (b.date - a.date)).map(o => <Item key={o.id} item={o} onRemove={onRemove}></Item>)}
      </div>
    </div>
  )
}