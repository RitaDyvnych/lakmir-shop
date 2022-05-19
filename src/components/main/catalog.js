import s from './catalog.module.css'
import sprite from '../../images/sprite.svg'
import catalog from "./catalog.json"
import { useState } from 'react'


export default function Catalog() {

  return (
    <div className={s.grid}>
      <ul className={s.products}>
        {catalog.map((el) => (
          <li className={s.item} key={el.id}>
            <article className={s.card}>
              <img src={el.image} alt={el.name} className={s.card_image} />
              <div className={s.card_content}>
                  <h2 className={s.card_name}>{el.name}</h2>
                  <div>
                    <p className={s.card_descr}><span className={s.accent}>Аналитический состав: </span>{el.description}</p>
                    <p className={s.card_weigth}><span className={s.accent}>Вес:  </span>{el.weigth} гр</p>
                  </div>
                  <div className={s.price_wrap}>
                    <p className={s.card_price}>{el.price} грн.</p>
                    <button className={s.card_button}>В корзину</button>
                  </div>
              </div>
              
            </article>
           </li>
        ))}
      </ul>
    </div>
  )
}