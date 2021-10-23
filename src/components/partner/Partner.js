import { useState } from "react";
import PartnerDog from "../../images/dog5.jpeg";
import style from './partner.module.css';

export default function Partner() {
  return (
    <>
      <h2 className={style.Title}>Для партнеров</h2>
      <p className={style.Text}>Если Вы занимаетесь <span className={style.Text__orange}>зоотоварами
      </span> или у Вас крупный <span className={style.Text__orange}>питомник</span>,
      можете связаться с нами и обсудить возможность предоставления
      оптовых скидок. Для этого воспользуйтесь любым удобным для Вас
      способом на странице контакты.</p>
      <div className={style.Container}>
        <img src={PartnerDog} alt="партнерская собака" />
        <div>
          <p className={style.Text__orange}>Преимущества работы с нами:</p>
          <ul>
          <li>Выдаем сертификаты качества и ветеринарную форму №2</li>
          <li>Качество наших лакомств завоевало положительные отзывы
            владельцев магазинов города Киева</li>
          <li>Широкий, постоянно развивающийся ассортимент</li>
          <li>Конкурентные цены</li>
        </ul>
        <p>Для подробной информации Вы можете заполнить нашу он-лайн
          форму или связаться по телефону</p>
        <p className={style.Text__orange}>Приглашаем к сотрудничеству мясокомбинаты и скотобойни</p>
        </div>
      </div>
    </>
  );
}