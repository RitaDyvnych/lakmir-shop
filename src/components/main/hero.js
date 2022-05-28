import s from './hero.module.css'
import dog from '../../images/dog_main_page.png'
import sprite from '../../images/sprite.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Hero() {
  const [modal, setModal] = useState(false);

  const handleBtnClick = (e) => {
    setModal(true);
    window.addEventListener("keydown", onKeyPress);
  }
  const onOverlay = (e) => {
    if (e.target === e.currentTarget){
      onCloseBtnClick(e)
    }
  }
  const onCloseBtnClick = (e) =>{
      setModal(false);
      window.removeEventListener("keydown", onKeyPress);
  }
  const onKeyPress = (e) => {
    if (e.code === "Escape") {
      onCloseBtnClick(e)
    }
  }

  return(
    <div className={s.hero}>
      {(modal===true)&&
        <div className={s.lightbox} onClick={onOverlay}>
            <div className={s.lightbox_overlay}></div>
            <div className={s.lightbox_content}>
              <p>work</p>
              <button type="button" className={s.lightbox_button} onClick={onCloseBtnClick}>
                <svg className={s.icon}>
                    <use href={sprite + "#icon-cross"} alt="close" />
                </svg>
              </button>
            </div>
        </div>
      }
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
        <Link to="/partner" className={s.hero_btn}>Стать партнером</Link>
        {/* <button type="button" className={s.hero_btn} onClick={handleBtnClick}>Стать партнером</button> */}
      </div>
    </div>
    
  )
}