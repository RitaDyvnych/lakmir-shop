import s from './hero.module.css'
import dog from '../../images/dog_main_page.png'
import sprite from '../../images/sprite.svg'

export default function Hero() {
  return(
    <div className={s.hero}>
      <img src={dog} alt='Собака' className={s.hero_bcg_img}/>
      <div className={s.hero_text_container}>
        <p className={s.hero_text}>Лакомства для собак</p>
        <ul className={s.hero_list}>
          <li className={s.hero_list_item}>
            <svg className={s.icon}>
                    <use href={sprite + "#icon-checkmark"} alt="checkmark" />
            </svg>
            Свежая, сертифицированная продукция</li>
          <li className={s.hero_list_item}>
            <svg className={s.icon}>
                    <use href={sprite + "#icon-checkmark"} alt="checkmark" />
            </svg>
            Отечественный производитель</li>
          <li className={s.hero_list_item}>
            <svg className={s.icon}>
                    <use href={sprite + "#icon-checkmark"} alt="checkmark" />
            </svg>
            Бесплатная доставка</li>
        </ul>
      </div>
    </div>
  )
}