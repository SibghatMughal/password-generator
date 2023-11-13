import React from "react";
import Logo from "./logo.svg";
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import linkdIn from './images/linkdIn.png'


const Footer = ({language}) => {
    const currentYear = new Date().getFullYear();
    return (
      <>
      <footer className="w-[100vw] lg:w-[90vw] py-4 px-2 flex flex-col gap-5 lg:flex-row justify-between items-center">
      <div className="flex items-center">
        <img
          src={Logo}
          alt="generatepasswordtome"Використання
          className="w-6 h-6 mr-1 logo"
        />
        <h3 className=" text-[#2A4E63] text-3xl font-bold">Generate</h3>
        <h3 className=" text-[#96DBFF] text-3xl font-bold">Password</h3>
      </div>
      <ul className="lg:flex items-center hidden text-decoration-none gap-5 text-[#071016] text-xl font-semibold">
        <li className=" cursor-pointer">{language=='en'? 'About':'про'}</li>
        <li className=" cursor-pointer">{language=='en'?'Why Choose Us':'Чому обирають нас?'}</li>
        <li className=" cursor-pointer">{language=='en'?'Uses':'Використання'}</li>
      </ul>
      <ul className="flex items-center text-decoration-none gap-4 ">
        <li className=" cursor-pointer border-[1px] border-[#2A4E63]  py-5 px-6 rounded-full border-solid"><img src={facebook} alt="facebook image" /></li>
        <li className=" cursor-pointer border-[1px] border-[#2A4E63]  py-5 px-5 rounded-full border-solid"><img src={twitter} alt="facebook image" /></li>
        <li className=" cursor-pointer border-[1px] border-[#2A4E63]  py-5 px-5 rounded-full border-solid"><img src={linkdIn} alt="facebook image" /></li>
      </ul>
    </footer>
    <div className="text-black text-[18px] w-full text-center font-semibold my-5 ml-2 lg:text-left">{language=='en'?'Copyright':'Авторське право'} © <span className=" text-[#96DBFF] font-bold">GeneratePasswordTo.Me </span>{currentYear}</div>
    </>
    );
  };  

export default Footer;
