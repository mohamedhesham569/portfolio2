"use client";
import "./css/hoem.css"
import Image from "next/image";
import logo from "../../public/photo1713140853-removebg-preview.png"
import { motion } from "framer-motion"
const Homepage = () => {
  return <>
  <motion.div
  initial={{y:"-200vh"}}
  animate={{y:"0"}}
  transition={{duration:1}}
  >
  <section className="home md:flex mt-10 items-center p-4 h-fit">
    <div className="image m-4">
      <Image src={logo} width="auto" height="auto" alt="mm"/></div>
    <div className="content w-full md:w-6/12 m-4 mb-0 capitalize">
      <h1 className="capitalize my-4 md:text-xl font-semibold">Let's create amazing websites together.</h1>
      <p className="capitalize my-4 text-sm">welcome to my portfolio , my name is mohamed hisham and i am a front-end developer . my portfolio showcases a diverse collection of projects that reflect my commitment to excellence.</p>
      <button type="button  " className="view text-white">view my work</button>
      <button type="button " className="contact">contact me</button>
    </div>
  </section>
  </motion.div>
  </>;
};

export default Homepage;
