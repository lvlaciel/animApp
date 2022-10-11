import React from "react";
import style from "../home/Home.module.css";
import NavBar from "../../components/navBar/NavBar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Destacados from "../../components/destacados/Destacados.jsx"
import CarouselPrincipal from "../../components/carouselPrincipal/CarouselPrincipal";

function Home() {
  return (
    <>
      <NavBar />
      <div className={style.containerHome}>
        <CarouselPrincipal/>
        <Destacados />
      </div>
      <footer><Footer /></footer>
    </>
  );
}

export default Home;
