import Hero from '../../components/main/hero'
import Catalog from '../../components/main/catalog'
import s from './Main.module.css'

export default function AboutUs() {
  return (
    <>
    <div className={s.container}>
      <Hero/>
      <Catalog/>
    </div>
    </>
  );
}