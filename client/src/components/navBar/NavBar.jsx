import React from 'react';
import style from "../navBar/NavBar.module.css";
import SearchBar from '../searchBar/SearchBar';

function NavBar() {
  return (
    <>
    <nav className={style.containerNav}>
        <SearchBar/>
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
    </nav>
    </>
  )
}

export default NavBar