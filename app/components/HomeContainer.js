"use client";
import Button from "@/Components/Button";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Cake, Facebook, Gift, Instagram, Star, Truck, Twitter } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import image1 from "@/public/assets/homeImage1.jpg";
import image2 from "@/public/assets/pexels-jonathan-borba-9816191.jpg";
import Logo from "@/Components/header/Logo";
import SectionTitle from "@/Components/SectionTitle";
import FramerMagnetic from "@/Components/FramerMagnetic";
import image3 from "../../public/assets/frank-zhang-53nLF9woXE0-unsplash.jpg"

const HomeContainer = ({ children }) => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  });
  const scale = useTransform(scrollYProgressSpring, [0, 1], [1, 20]);

  return (
    <section className="">
      {/* hero section starts */}
      <div ref={heroRef} className="relative h-[200vh] z-10 overflow-clip">
        <motion.div
          style={{
            scale,
          }}
          className="relative h-screen  mask [mask-position:center_center,center_top_12.5rem] md:[mask-position:center_center,center_top_30%] bg-bgColor  w-full flex flex-col md:flex-row md:items-start md:justify-between md:gap-x-[16rem] items-center px-6 md:px-[3rem] lg:px-[4.5rem] xl:px-[6rem] py-8 md:py-[5rem]"
        >
          <div className="h-full w-full md:w-1/2  flex flex-col items-center md:items-start md:gap-y-3 md:mt-[4rem]">
            <div className="flex items-center justify-center gap-x-1">
              <Star fill="#eab308" stroke="none" className="h-4 w-4" />
              <p className="text-textColor text-[0.7rem] font-medium">
                HOME MADE
              </p>
              <Star fill="#eab308" stroke="none" className="h-4 w-4" />
            </div>
            <p className="text-textColor text-3xl sm:text-4xl  md:text-left lg:text-5xl xl:text-6xl font-semibold text-center">
              We are <br className="hidden md:block" /> baking for <br /> your
              pleasure
            </p>
            <Button>
              <Button.Border1 />
              <Button.Border2 />
              <Button.Title>Shop now</Button.Title>
              <Button.Icon>
                <ArrowRight className="stroke-white" />
              </Button.Icon>
            </Button>
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
          <div className="relative hidden md:flex flex-col items-center gap-y-2 md:mt-[4rem] mr-4  md:w-[50%] h-full  ">
            <p className="text-textColor text-center text-base font-semibold md:px-[2rem]  lg:px-[3rem] xl:px-[4rem]">
              Enjoy your indulgent afternoon tea in te comfort of your home wih
              the delicious cake
            </p>
            <div className="w-full  flex flex-col item-center mt-3">
              <SectionTitle title="New Items" />
              <div className="relative flex items-center justify-center mt-2 ">
                <div className="relative md:h-28 lg:h-32 aspect-square  rounded-full left-[5%]">
                  <Image
                    src={image2}
                    alt="home image 2"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover w-full h-full rounded-full "
                    placeholder="blur"
                  />
                </div>
                <div className="relative md:h-28 lg:h-32 aspect-square  rounded-full">
                  <Image
                    src={image3}
                    alt="home image 3"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover w-full h-full rounded-full "
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center flex-col gap-x-4 items-center mt-4">
              <h5 className="text-textColor text-sm">Follow us:</h5>
              <div className="flex   items-center justify-center  ">
                <FramerMagnetic>
                  <Facebook strokeWidth="1" className="fill-accentColor"/>
                </FramerMagnetic>

                <FramerMagnetic>
                 <Instagram strokeWidth="1" className="fill-accentColor"/>
                </FramerMagnetic>

                <FramerMagnetic>
                 <Twitter  strokeWidth="1" className="fill-accentColor"/>
                </FramerMagnetic>

                
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* hero section ends */}
      <div className="h-[200vh] mt-[-200vh] relative ">
       
         <Image
          src={image1}
          alt="hero image 1"
          priority
          placeholder="blur"
          className="w-full h-full  object-cover"
        />
      
        <div className="h-screen w-full absolute top-[50%] left-0 bg-black opacity-70" />
        <div className="h-screen w-full absolute top-[50%] left-0  text-white flex flex-col items-center px-6 md:px-[5rem] py-8  ">
          <div className="h-[90%] aspect-[1.2/2] bg-black p-2">
            <div className="h-full w-full border border-orange-950 flex flex-col items-center justify-center p-2">
              <Logo />
              <div className="mt-4">
                <SectionTitle title="Exclusive" />
                <h4 className="text-2xl text-center">
                  Our Fall Product Collection is here
                </h4>
              </div>
              <Button className="z-10">
                <Button.Border1 />
                <Button.Border2 />
                <Button.Title>Shop now</Button.Title>
                <Button.Icon>
                  <ArrowRight className="stroke-white" />
                </Button.Icon>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {children}
    </section>
  );
};

export default HomeContainer;
