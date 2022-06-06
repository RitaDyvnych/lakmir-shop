import "./App.css";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Oval } from 'react-loader-spinner';
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from './page/About/AboutUs';
import PartnerPage from './page/Partner/Partner';
import MainPage from './page/Main/Main';
import CartPage from './page/Shopping-cart/ShoppingCart';
import { useState, useEffect } from 'react';
import BackToTopBtn from './components/buttonToTop/ButtonToTop';

// const MainPage = lazy(() => import("./page/Main/Main"));
// const AboutPage = lazy(() => import("./page/About/AboutUs"));
// const PartnerPage = lazy(() => import("./page/Partner/Partner"));

function App() {
 
  return (
    <>
      <Header/>
      {/* <Suspense fallback={<div className="App-loader">
            <Oval ariaLabel="loading-indicator"
              height={50}
              width={50}
              strokeWidth={3}
              color="rgba(255, 117, 29, 1)"
              secondaryColor="rgba(170, 178, 197, 0.7)"/>
              </div>}> */}
          <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path="/about_us" element={<AboutPage />} />
            <Route path="/partner" element={<PartnerPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
      {/* </Suspense> */}
      <BackToTopBtn/>
      <Footer/>
    </>
  );
}

export default App;
