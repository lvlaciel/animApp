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
        <FiGithub size={40} />
      </div>
      <div>
        <FaLinkedinIn size={40} />
      </div>
      <div>
      <img src={logoHenry} alt="logo" width="80px" height="62px" />
      </div>
    </div>
  );
}

export default Footer