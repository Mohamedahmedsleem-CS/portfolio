import React from 'react'
import { useState } from 'react';
import  './Header.css';

export const Header = () => {
  const [showModal, setshowModal] = useState(false);
  return (
    <header className='flex' >
      <button  onClick={() => {setshowModal(true)}} className='icon-menu menu' />

      <div/>
      <nav>
        <ul className='flex' >
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      
      <button className='mode flex'>
        <span className='icon-moon-o' ></span>
      </button>

      {showModal && (
        <div className=" fixed">   
        <ul className="modal ">
          <li>
            <button className='icon-close' onClick={() => {setshowModal(false)}} />
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Uses</a>
          </li>
        </ul>
    </div>
      )}
    </header>
  )
}

export default Header;
