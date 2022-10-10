import React from "react";
import { Link } from "react-router-dom";
import style from "../landing/Landing.module.css";

function LandingPage() {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <p>Welcome to the page of the best Anime</p>
      </div>
        <Link to="/home">
          <div className={style.btnHome}>
            Enter now
          </div>
        </Link>
    </div>
  );
}

export default LandingPage;
