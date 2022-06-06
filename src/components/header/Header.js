import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from '../../images/logo.png';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from '../contact/Contact';

AOS.init();

export default function Header() {
  
  const [modal, setModal] = useState(false);

  const handleBtnClick = (e) => {
    setModal(true);
    window.addEventListener("keydown", onKeyPress);
  }
  const onOverlay = (e) => {
    if (e.target === e.currentTarget){
      onCloseBtnClick()
    }
  }
  const onCloseBtnClick = () =>{
      setModal(false);
      window.removeEventListener("keydown", onKeyPress);
  }
  const onKeyPress = (e) => {
    if (e.code === "Escape") {
      onCloseBtnClick()
    }
  }

  return (
    <header className={s.header}>
      {(modal===true)&&
              <>
                <div className={s.overlay}></div>
                <div className={s.modal} onClick={onOverlay}>
                  <div className={s.modal_content}>
                      <Contact/>
                    <button type="button" className={s.lightbox_button} onClick={onCloseBtnClick}>
                        <svg className={s.icon_close}>
                            <use href={sprite + "#icon-cross"} alt="close" />
                        </svg>
                    </button>
                  </div>
                </div>
              </>
            }
      <NavLink to="/" title='main'>
        <img src={logo} alt="Логотип компании Лакмир" className={s.Logo} title='main'/>
      </NavLink>

        <form className={`${s.SearchForm} ${s.searchActive}`} >
          <button type="submit" className={s.SearchForm__button}>
            <svg className={s.icon}>
                    <use href={sprite + "#icon-search"} alt="Search" />
            </svg>
          </button>

          <input
            className={s.SearchForm__input}
            type="text"
            // value={find}
            autoComplete="off"
            // autoFocus
            placeholder="Искать продукт"
          // onChange={handleChangeInput}
          />
        </form>
        <nav className={s.Navigation}>
          <NavLink to="/partner" className={s.Navigation__item} title='partner'>
            <svg className={s.icon_link}>
                    <use href={sprite + "#icon-handshake"} alt="Контакты" />
            </svg>
            Партнерка</NavLink>
          <NavLink to="/about_us" className={s.Navigation__item} title='about'>
            <svg className={s.icon_link}>
                    <use href={sprite + "#icon-paw"} alt="Контакты" />
            </svg>
            О нас</NavLink>
          <div className={s.Navigation__item} onClick={handleBtnClick} title='contact'>
            <svg className={s.icon_link}>
                    <use href={sprite + "#icon-mobile"} alt="Контакты" />
            </svg>
            Контакты</div>
          <NavLink to="/cart" className={s.Navigation__item} title='shopping-cart'>
            <svg className={s.icon_link}>
                    <use href={sprite + "#icon-shopping-cart"} alt="Корзина" />
            </svg>
            Корзина
          </NavLink>
        </nav>
      </header>
  );
}