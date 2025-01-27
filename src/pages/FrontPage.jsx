/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import pc from '../img/svg/pc.svg';
import tablet from '../img/tablet.png';
import www from '../img/svg/www.svg';

const FrontPage = ()=> {
  const scrollToBottom = () => {
    window.scrollTo({behavior:"smooth", top: document.body.scrollHeight});
  };
  return(
    <div className="flex flex-col justify-between h-screen max-w-screen">
    <div className="flex justify-between m-6">
      <div className="flex flex-col">
        <span className="font-extrabold text-xl">José</span>
        <span className="text-main-orange font-extrabold text-xl">Alexandre</span>
      </div>
      <div>
        <button
          className="p-2 border rounded-full border-solid border-black text-sm hover:invert bg-white"
          onClick={scrollToBottom}
        >
          Work with me
        </button>
      </div>
    </div>
    <div className="my-12">
      <div className="flex justify-center">
        <div className="flex w-80 justify-between">
          <img alt="pc-icon" src={pc} className="w-20"/>
          <img alt="mobile-icon" src={tablet} className="w-14"/>
          <img alt="web-icon" src={www} className="w-20"/>
        </div>
      </div>
      <div className="flex flex-col my-6">
        <h1 className="text-center font-extrabold text-7xl">Let's bring</h1>
        <h1 className="text-center font-extrabold text-7xl">your vision</h1>
        <h1 className="text-center font-extrabold text-7xl">to the 
          <h1 className="text-main-orange">
            world
          </h1>
        </h1>
      </div>
      </div>
  </div>
  )
}
  

export default FrontPage;