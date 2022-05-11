import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from '../../images/logo.png';
import sprite from '../../images/sprite.svg';

export default function Header() {

  return (
    <header className={s.Searchbar}>
      <NavLink to="/">
        <img src={logo} alt="Логотип компании Лакмир" className={s.Logo} />
      </NavLink>

        <form className={s.SearchForm} >
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
          <NavLink to="/" className={s.Navigation__item}>Главная</NavLink>
          <NavLink to="/partner" className={s.Navigation__item}>Партнерка</NavLink>
          <NavLink to="/about_us" className={s.Navigation__item}> О нас</NavLink>
        </nav>
      </header>
  );
}