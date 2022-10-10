import React from 'react';
import style from "../navBar/NavBar.module.css";
import logo from "../../assets/Logopropio.gif"
import SearchBar from '../searchBar/SearchBar';

function NavBar() {
  return (
    <>
    <nav className={style.containerNav}>
    <img src={logo} alt="logo" width="66px" height="65.5px" />
        <div><SearchBar/></div>
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
    </nav>
    </>
  )
}

export default NavBar