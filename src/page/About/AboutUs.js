import s from './aboutUs.module.css'
import sprite from '../../images/sprite.svg'
import AboutUsDog from '../../images/dog_about.png'

export default function AboutUs() {
  return (
    <div className={s.container}>
      <div className={s.wrap}>
        <h2 className={s.title}>
          О нас</h2>
        <div className={s.content_wrap}>
          <div>
            <div className={s.about_wrap} data-aos="fade-right">
              <svg className={s.icon}>
                  <use href={sprite + "#icon-double_arrow"} alt="arrow" />
              </svg>
              <p className={`${s.text} ${s.card}`}>Компания <span className={s.text_accent}>Лакмир</span> начала свою деятельность в 2003 году, а начиная с
                2008 года, было основано производство лакомств для собак под
                собственной торговой маркой «Лакмир». На сегодняшний день,
                мы изготовляем широкий ассортимент лакомств и занимаемся реализацией
                свежезамороженных кормов для Ваших любимцев.
              <br/>Миссия компании <span className={s.text_accent}>Лакмир</span> - обеспечение потребителей натуральными,
                качественными и доступными лакомством для домашних любимцев.</p>
            </div>
            <div className={s.about_wrap} data-aos="fade-right">
              <svg className={s.icon}>
                  <use href={sprite + "#icon-double_arrow"} alt="arrow" />
              </svg>
              <p className={`${s.text} ${s.card_deckr}`}>Лакомства изготовляются из говяжьих субпродуктов, таких как:
                пенис, ухо, вымя, лёгкое, печенка, нос, трахея, сухожилия, яйца, мясо пищевода;
                а также из куриных продуктов: крылья, филе, шеи, желудки.></p>
            </div>
            <div className={s.about_wrap} data-aos="fade-right">
              <svg className={s.icon}>
                  <use href={sprite + "#icon-double_arrow"} alt="arrow" />
              </svg>
              <p className={`${s.text} ${s.card_deckr}`}>При изготовлении используются только натуральное свежее сырье украинских мясокомбинатов, 
                которое сопровождается соответствующим свидетельством качества.></p>
            </div>
            <div className={s.about_wrap} data-aos="fade-right">
              <svg className={s.icon}>
                  <use href={sprite + "#icon-double_arrow"} alt="arrow" />
              </svg>
              <p className={`${s.text} ${s.card_deckr}`}>По окончанию цикла производства, готовая продукция проходит ветеринарный контроль, на основании которого мы получаем соответствующие сертификаты качества
                    и ветеринарное свидетельство на нашу продукцию.></p>
            </div>
          </div>
          <img src={AboutUsDog} alt="dog about us page" className={s.dog_img}/>
        </div>
      </div>
    </div>
  );
}