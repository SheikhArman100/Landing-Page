"use client"
import Button from "@/Components/Button";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Cake, Gift, Star, Truck } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import image1 from "@/public/assets/pexels-carsten-vollrath-11543451.jpg";
import image2 from "@/public/assets/pexels-jonathan-borba-9816191.jpg";

const HomeContainer = ({children}) => {
  
  const heroRef=useRef(null)
  const {scrollYProgress} =useScroll({
    target:heroRef,
    offset:["start start","end end"] 
  })

  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  }) 
  const scale=useTransform(scrollYProgressSpring,[0,1],[1,20])
 
  return (
    <section className="">
      {/* hero section starts */}
      <div ref={heroRef} className="relative h-[200vh] z-10 overflow-clip">
      
      <motion.div style={{
        scale
      }} className="relative h-screen  mask [mask-position:center_center,center_top_12.5rem] md:[mask-position:center_center,center_top_30%] bg-bgColor  w-full flex flex-col md:flex-row md:items-start md:justify-between items-center px-6 md:px-[3rem] lg:px-[4.5rem] xl:px-[6rem] py-8 md:py-[5rem]" >
        <div className="flex flex-col items-center md:items-start md:gap-y-3 md:mt-[4rem]">
          <div className="flex items-center justify-center gap-x-1">
            <Star fill="#eab308" stroke="none" className="h-4 w-4" />
            <p className="text-textColor text-[0.7rem] font-medium">
              HOME MADE
            </p>
            <Star fill="#eab308" stroke="none" className="h-4 w-4" />
          </div>
          <p className="text-textColor text-3xl sm:text-4xl  md:text-left lg:text-5xl xl:text-6xl font-semibold text-center">
            We are <br className="hidden md:block"/> baking for <br /> your pleasure
          </p>
          <Button name="Shop now" />
        </div>
        {/* <div className=" ">
          <svg
            
            viewBox="15 -10 228 40"
            
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible h-full"
          >
            <path
            id="curve"
              d="M1 121C5.66667 82.6667 37.7446 -1.42649 129 1.00002C222.871 3.49607 253.887 83.1122 257 121"
              fill="transparent"
            />
            <text>
              <textPath id="text-path" href="#curve" startOffset="0" className="fill-accentColor text-4xl font-bold">
                Happiness Starts Here
              </textPath>
            </text>
          </svg>

          <div  className="w-48  aspect-[4/7] rounded-full  "/>
            
        </div> */}
        <div className="hidden md:flex flex-col items-center gap-y-2 md:mt-[4rem] mr-4">
          <p className="text-textColor text-center text-sm font-semibold">Enjoy your <br/> indulgent afternoon tea <br/> in te comfort of your home <br/> wih the delicious cake</p>
          <div className="h-32 w-28  rounded-t-lg rounded-bl-lg">
            <Image src={image2} alt="home image 2" className="object-cover w-full h-full rounded-t-lg rounded-bl-lg "/>

          </div>

        </div>
      </motion.div>
      </div>
    
      {/* hero section ends */}
      <div   className="h-[200vh] mt-[-200vh] relative   ">
        <Image src={image1} alt="hero image 1" priority className={`w-full h-full  object-cover `}/>
        <div className="h-screen w-full absolute top-[50%] left-0 bg-black opacity-70"/>
        <div className="h-screen w-full absolute top-[50%] left-0  text-white flex flex-col items-center px-6 md:px-[5rem] py-8  ">
          <h2 className="text-4xl md:text-5xl font2 text-accentColor2 font-bold">Our Services</h2>
          <div className="h-full flex flex-col md:flex-row justify-center items-center   md:py-10 lg:px-[7rem] xl:px-[10rem] md:flex-wrap gap-y-5 md:gap-x-5 md:gap-y-0 ">
            {/* ----------------------------------service-1----------------------- */}
            <div className="flex flex-col items-center px-4  ">
              <Cake strokeWidth="1.5"  className="h-14 w-14 lg:h-20 lg:w-20 stroke-yellow-500 stroke-wid" />
              <div className="flex flex-col items-center p-2">
                <h4 className="text-xl font-bold text-accentColor text-center">
                  Home Made Food
                </h4>
                <p className="text-sm text-center">Everything in the cake is hand crafted by us</p>
              </div>
             
            </div>
             <div className="h-[0.01rem] w-32 md:hidden md:w-[0.01rem] md:h-24 bg-gray-600 "/>
            
            {/* -------------------------------service-2------------------------------------ */}
            <div className="flex flex-col items-center">
              <Truck  strokeWidth="1.5"  className="h-14 w-14 lg:h-20 lg:w-20 stroke-yellow-500 stroke-wid" />
              <div className="flex flex-col items-center p-2">
                <h4 className="text-xl font-bold text-accentColor text-center">
                  Home Delivery
                </h4>
                <p className="text-sm text-center">We ensure quick and reasonable home delivery</p>
              </div>

            </div>
            <div className="h-[0.01rem] w-32 md:hidden md:w-[0.01rem] md:h-24 bg-gray-600"/>
            {/* ---------------------------------------service-3------------------------------ */}
            <div className="flex flex-col items-center">
              <Gift strokeWidth="1.5"  className="h-14 w-14 lg:h-20 lg:w-20 stroke-yellow-500 stroke-wid" />
              <div className="flex flex-col items-center p-2">
                <h4 className="text-xl font-bold text-accentColor text-center">
                  Gift
                </h4>
                <p className="text-sm text-center">We decorate your product with letter, box and chocolate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     {children}

      
     
    
    </section>
  );
};

export default HomeContainer;