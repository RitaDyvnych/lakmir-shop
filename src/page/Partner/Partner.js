// import { useState } from "react";
import PartnerDog from "../../images/dog5.jpeg";
import style from './partner.module.css';

export default function Partner() {
  return (
    <div className="Container">
      <h2 className={style.Title}>Для партнеров</h2>
      <p className={style.Text}>Если Вы занимаетесь <span className={style.Text__orange}>зоотоварами
      </span> или у Вас крупный <span className={style.Text__orange}>питомник</span>,
      можете связаться с нами и обсудить возможность предоставления
      оптовых скидок. Для этого воспользуйтесь любым удобным для Вас
      способом на странице контакты.</p>
      <div className={style.TextContainer}>
        <img src={PartnerDog} alt="партнерская собака" />
        <div>
          <p className={style.List}>Преимущества работы с нами:</p>
          <ul>
          <li className={style.List__item}>Выдаем сертификаты качества и ветеринарную форму №2</li>
          <li className={style.List__item}>Качество наших лакомств завоевало положительные отзывы
            владельцев магазинов города Киева</li>
          <li className={style.List__item}>Широкий, постоянно развивающийся ассортимент</li>
          <li className={style.List__item}>Конкурентные цены</li>
        </ul>
          <p className={style.List__item}>Для подробной информации Вы можете заполнить нашу он-лайн
          форму или связаться по телефону</p>
        <p className={style.List}>Приглашаем к сотрудничеству мясокомбинаты и скотобойни</p>
        </div>
      </div>
    </div>
  );
}