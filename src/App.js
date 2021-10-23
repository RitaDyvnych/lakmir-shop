import "./App.css";
import style from './components/styles.module.css';
import logo from './images/logo.png';
import Main from './components/Main';
import Partner from "./components/partner/Partner";
import AboutUs from "./components/about/AboutUs";
import Contact from "./components/Contact";
import { useState } from "react";

export default function App() {
  const [status, setStatus] = useState('main');
  return (
    <div className="App">
      <header className={style.Searchbar}>
        <a href={Main} >
          <img src={logo} alt="Логотип компании Лакмир" className={style.Logo} />
        </a>
        <form className={style.SearchForm} >
          <button type="submit" className={style.SearchForm__button}>
            <span className={style.SearchForm__buttonLabel}>Search</span>
          </button>

          <input
            className={style.SearchForm__input}
            type="text"
            // value={find}
            autoComplete="off"
            // autoFocus
            placeholder="Искать продукт"
          // onChange={handleChangeInput}
          />
        </form>
        <nav className={style.Navigation}>
          <a href={Main} className={style.Navigation__item}>Главная</a>
          <a href={Partner} className={style.Navigation__item} onClick={() => setStatus("partner")}>Партнерка</a>
          <a href={AboutUs} className={style.Navigation__item} onClick={() => setStatus("about")}> О нас</a>
          <a href={Contact} className={style.Navigation__item}>Контакты</a>
        </nav>
      </header>
      {(status === "partner") && <Partner />}
      {(status === "about") && <AboutUs />}
    </div>
  );
}
