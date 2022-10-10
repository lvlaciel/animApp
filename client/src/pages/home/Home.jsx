import React from "react";
import style from "../home/Home.module.css";
import NavBar from "../../components/navBar/NavBar.jsx"

function Home() {
  return (
    <>
      <NavBar />
      <div className={style.containerHome}></div>
    </>
  );
}

export default Home;
