import React from "react";
import style from "../home/Home.module.css";
import NavBar from "../../components/navBar/NavBar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import CarouselSports from "../../components/carouselSports/CarouselSports.jsx"

function Home() {
  return (
    <>
      <NavBar />
      <div className={style.containerHome}>
        <CarouselSports/>
      </div>
      <Footer />
    </>
  );
}

export default Home;
