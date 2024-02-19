'use client'
import React, {useEffect, useState} from 'react'
/*------------*type*------------*/
/*------------*component*------------*/
import Logo from "@app/layouts/header/logo";
import {Containers} from "@components/Containers";
import LoginButton from "@app/layouts/header/loginButton";
import MenuButton from "@app/layouts/header/menuButton";
/*------------*etc*------------*/
import List, {MenuList} from "@components/List";

const Header = () => {
  const [isScroll, setScroll] = useState(false)
  const [isToggle, setToggle] = useState(false)
  const Scroll = () => {
    (window.scrollY > 0)
      ? setScroll(true)
      : setScroll(false)
  }
  console.log(isToggle)
  useEffect(() => {
      window.addEventListener('scroll', Scroll)
      return () =>  window.removeEventListener('scroll', Scroll)
  }, []);

  return (
    <div id="header-wrapper"
         className="
         flex flex-col h-[22rem] bg-[#212121] w-full items-center
    ">
      <div
        id="header-content"
        className={`fixed
          flex flex-col lg:justify-center lg:items-center 
          min-h-[4.5rem] w-full lg:h-[4.5rem] pt-4 lg:pt-0
          text-black bg-white text-sm 
          ${isScroll ? "bg-white " : "bg-opacity-0 text-white"}
          ${isToggle ? "h-[22rem]" : ""}
        `}
      >
        <div
          className="
            flex justify-between items-center px-20 w-full max-w-[91.5rem]
        ">
          <Logo />
          <div className="
            basis-1/4 px-10 hidden lg:flex justify-around text-sm min-w-[20rem]
          ">
            <List list={MenuList} liClass="flex" className="p-2 text-xs"/>
          </div>
          <Containers
            className="basis-1/4 justify-end hidden lg:flex"
          >
            <LoginButton isChange={isScroll}/>
          </Containers>
          <MenuButton
            toggle={{isToggle, setToggle}} isChange={isScroll}
          />
        </div>
      </div>
      <div
        id="toggle-menu"
        className={`flex-col w-full max-w-[41rem] 
          mt-20 p-6 lg:hidden text-sm fixed rounded-xl
          bg-white text-black
          ${isToggle ? (isScroll ? "flex border-4 p-5" : "flex") : "hidden border-0"}
      `}>
        <ul className="flex flex-col lg:flex-row">
          <List list={MenuList} className="p-2 text-xs"/>
        </ul>
        <div className="flex justify-start">
          <LoginButton isChange={true}/>
        </div>
      </div>
    </div>
  )
}
export default Header
