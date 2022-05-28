import s from './Contact.module.css'
import sprite from '../../images/sprite.svg'


export default function Contact() {

  return (
    <div className={s.container}>
        <p className={s.time_title}>Время работы:</p>
        <p>Пн-Пт: с 09:00 до 19:00</p>
        <p>Сб-Вс: выходной</p>
        <div className={s.phones}>
          <p>(093)602-16-70</p>
          <p>(068)530-01-01</p>
        </div>
        <div className={s.icons}>
         <a href="viber://chat?number=%2B380685300101" rel="noopener noreferrer">
            <svg className={s.icon_viber}>
                <use href={sprite + "#icon-viber"} alt="icon viber" />
            </svg>
         </a>
      {/* TODO: change chat name*/}
          <a href="https://telegram.me/rita_sporty" target="_blank" rel="noopener noreferrer">
            <svg className={s.icon_telegram}>
                <use href={sprite + "#icon-telegram"} alt="icon telegram" />
            </svg>
          </a>
            
        </div>
    </div>
  )
}