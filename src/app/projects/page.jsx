"use client";
import { motion , useScroll,useTransform} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ecomerce from "../../../public/ecomerce.png"
import soup from "../../../public/soup.png"
import flapy from "../../../public/flapybird.png"
import twitter from "../../../public/twitter.png"
import hangman from "../../../public/hangman.png"
import uifry from "../../../public/Screenshot (10).png"
import Dashboard from "../../../public/Screenshot (11).png"


export default function Page() {

  const ref=useRef()
  const {scrollYProgress}=useScroll({target:ref})
  const x=useTransform(scrollYProgress,[0,1],["10%","-90%"])


   const works=[
    {
      id:1,
      title:"ecommerce website",
      image:ecomerce,
      desc:"an Ecommerce website (using React.js) full responsive with features like:( Night mode, add to cart, add to favorite, payment ) ",
      link:"https://mohamedhesham569.github.io/Ecommerce/",
    },
    {
      id:2,
      title:"Dental Medical Website",
      image:uifry,
      desc:"a Dental Medical website, built using Next.js,Material Ui and Figma..the website is fully responsive,modern, and intuitive, making it easy for visitors to navigate and find the information they need",
      link:"https://mohamedhesham569.github.io/uifry/",
    },
    {
      id:3,
      title:"Dashboard Website",
      image:Dashboard,
      desc:"a Dashboard website, built using Next.js And Material Ui ..the website is fully responsive,modern, and intuitive, making it easy for visitors to navigate and find the information they need",
      link:"https://mohamedhesham569.github.io/Dachboard/",
    },
    {
      id:4,
      title:"restaurant website",
      image:soup,
      desc:"a restaurant website, built using HTML, CSS, and JavaScript..the website is fully responsive,modern, and intuitive, making it easy for visitors to navigate and find the information they need",
      link:"https://mohamedhesham569.github.io/soup/html/home",
    },
    {
      id:5,
      title:"flappy bird game",
      image:flapy,
      desc:"Flappy Bird game built from scratch using HTML, CSS, and JavaScript! 🕹️ Dive into nostalgia and test your skills as you navigate the bird through a series of obstacles. Try it out and see how high you can score!",
      link:"https://mohamedhesham569.github.io/flappy-bird/",
    },
    {
      id:6,
      title:"twitter clone",
      image:twitter,
      desc:"a clone of Twitter! Built with React, and Firebase, this project challenged me to recreate the core functionalities of Twitter like :real-time updates.",
      link:"https://mohamedhesham569.github.io/twitter/",
    },
    {
      id:7,
      title:"hangman game",
      image:hangman,
      desc:"a Hangman game .using HTML, CSS, and JavaScript is a text-based game where players are presented with a series of underscores representing the letters in a hidden word.",
      link:"https://mohamedhesham569.github.io/Hangman/src/index",
    }
  ]

  return (
    <>
    <motion.div
    initial={{y:"-200vh"}}
    animate={{y:"0"}}
    transition={{duration:1}}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div style={{height:"13%"}} className="w-screen capitalize flex items-center justify-center text-8xl text-center">
          my works
        </div>

        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">

          <motion.div style={{x:x}} className="flex">
            <div className="h-screen w-screen flex items-center justify-center"/>

          {works.map((item)=>(

            <div className="h-screen w-screen flex relative items-center justify-center" key={item.id}>
              <div className="flex flex-col gap-8 text-black">
                <h1 className="text-4xl capitalize mx-3 sm:w-4/6 w-5/6">{item.title}</h1>
                <div className="relative sm:w-3/6 w-5/6">
                  <Image src={item.image} alt="" width="100%" height="fit-content"/>
                </div>
                <p className="mx-4 capitalize sm:w-3/6 w-5/6">{item.desc}</p>
                  <Link href={item.link} >
                    <button className=" capitalize absolute p-4 text-white bg-black rounded-2xl right-1/4 sm:right-1/2" type="button">see demo</button>
                  </Link>
              </div>
            </div>
          ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
    </>
  )
}
