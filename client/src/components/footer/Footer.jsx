import React from 'react';
import style from "../footer/Footer.module.css"
import logo from "../../assets/LogoAnime.gif"
import logoHenry from "../../assets/logoHenry.png"
import { FiGithub } from "react-icons/fi"
import { FaLinkedinIn } from "react-icons/fa"

function Footer() {
  return (
    <div className={style.containerFooter}>
      <img src={logo} alt="logo" width="66px" height="65px" />
      <div>
        <a target="_blank" href="https://github.com/lvlaciel">
          <FiGithub size={40} />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/facundo-maciel-desarrollador-fullstack/"
        >
          <FaLinkedinIn size={40} />
        </a>
      </div>
      <div>
      <a target="_blank" href="https://www.soyhenry.com/estudiar-programacion">
        <img src={logoHenry} alt="logo" width="80px" height="62px" />
        </a>
      </div>
    </div>
  );
}

export default Footer