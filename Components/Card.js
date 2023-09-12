import React from "react";
import cakeIcon from "@/public/assets/cakeIcon.svg"
import cakeBgRemove from "@/public/assets/cake1_bgRemove.png"
import cake1 from "@/public/assets/cake1.jpg"
import Image from "next/image";
import Button from "./Button";

const Card = () => {
  return (
    <div className="relative w-48 h-64 bg-accentColor2 p-1">
      <div className="relative w-full h-full flex flex-col items-center justify-between py-3  group cursor-pointer ">
        <div className="h-[96%] w-full border-[0.5px] border-black absolute top-[50%] left-0 -translate-y-[50%] group-hover:h-full transition-all " />
        <div className="w-[94%] h-full border-[0.5px] border-black  absolute top-0 left-[50%] -translate-x-[50%] group-hover:w-full transition-all  " />
        <div className="h-10 w-10 border p-2 border-black border-dotted rounded-full flex items-center justify-center group-hover:hidden transition-all">
            <Image src={cakeIcon} alt="category icon" className="h-full w-full"/>

        </div>
        
        <div className="flex flex-col items-center font-semibold group-hover:hidden transition-all">
            <h4>Birthday Cake</h4>
            <span>$99.9</span>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 group-hover:hidden transition-all">
            <Image src={cakeBgRemove} alt="card image bg remove" className="object-cover w-full h-full"/>
        </div>
        <div className="w-full h-full absolute top-0 left-0 hidden group-hover:block transition-all  ">
            <Image src={cake1} alt="card image hover" className="w-full h-full object-cover"/>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 hidden group-hover:block transition-all">
            <Button name="Add to cart"/>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 hidden hover:block transition-all">
            <Button name="Add to cart" cardStyle="bg-accentColor2"/>
    </div>

     
    </div>
  );
};

export default Card;
