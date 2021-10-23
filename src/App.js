import "./App.css";
import style from './components/styles.module.css';
import logo from './images/logo.png'
// import ImageGallery from "./components/ImageGallery";

export default function App() {
  return (
    <div className="App">
      <header className={style.Searchbar}>
        {/* <a href="./index.html" class="logo"> */}
        <img src={logo} alt="Логотип компании Лакмир" className={style.Logo}/>
        {/* </a> */}
        <form className={style.SearchForm} >
          <button type="submit" className={style.SearchForm__button}>
            <span className={style.SearchForm__buttonLabel}>Search</span>
          </button>

          <input
            className={style.SearchForm__input}
            type="text"
            // value={find}
            autoComplete="off"
            autoFocus
            placeholder="Искать продукт"
            // onChange={handleChangeInput}
          />
        </form>
        <p>Контакты</p>
        <p>Партнерка</p>
        <p>О нас</p>
      </header>
        {/* <ImageGallery/> */}
      </div>
    );
}
