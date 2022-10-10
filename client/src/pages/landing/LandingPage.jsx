import React from "react";
import { Link } from "react-router-dom";
import style from "../landing/Landing.module.css";

function LandingPage() {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <h2>W e l c o m e </h2>
        <h2>To the page </h2>
        <h2>Anim-App</h2>
        <p>Welcome to the page of the best Anime</p>
      </div>
      <div>
        <Link to="/home">
          <div className={style.containerBtn}>
            <div className={style.btntwo}>
              <span>Enter</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
