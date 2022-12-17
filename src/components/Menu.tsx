import React from 'react'
import { Link } from "react-router-dom";
import {BsFillMenuButtonWideFill,BsArrowRight} from "react-icons/bs";
import {useState} from "react";
const Menu = (): JSX.Element => {

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const changeMenu = () => {
    setShowMenu(!showMenu)
  console.log(">>>",showMenu)

  }
  console.log(showMenu)
  return (
    <>
    <header>
        {/* <Link to="/">Start</Link>
        <span className='vl'></span>
        <Link to="/announcements">Ogłoszenia</Link>
        <span className='vl'></span>
        <Link to="/tutorials">Poradniki</Link>
        <span className='vl'></span>
        <Link to="/projects">Projekty</Link> */}
    </header>
    <div className='horizontal-header'>
        <div className='menu-corner'>
          <BsFillMenuButtonWideFill onClick={changeMenu} className='icon-corner'/>
        </div>
    </div>
        {showMenu && 
          <div className='hide-horizontal-header'>
            <div className='menu-corner'>
              <BsArrowRight className='icon-corner'/>
              <BsArrowRight className='icon-corner'/>
              <BsFillMenuButtonWideFill onClick={changeMenu}  className='icon-corner'/>
            </div>
          </div>}
    </>
  )
}

export default Menu
