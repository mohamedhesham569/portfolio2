"use client";
import { useState } from "react";
import Link from "next/link"
import bars from "../../public/bars-solid.svg"
import xmark from "../../public/xmark.svg"
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Navlink from "./Navlink";

export default function Nav() {

  const [menueopen,setmenueopen]=useState(false);

  const links=[
    {
      url:"/",
      title:"home",
      id:1
    },
    {
      url:"/about",
      title:"about",
      id:2
    },
    {
      url:"/projects",
      title:"projects",
      id:3
    }
  ]

  const listvariants={
    closed:{
      x:"100vw",
    },
    opened:{
      x:0,
    }
  }

  const ulmotion={
    opened:{
      transition:{
        staggerChildren:0.2,
      }
    }
  }

  const listitems={
    closed:{
      x:-50,
      opacity:0,
    },
    opened:{
      x:0,
      opacity:1,
      transition:{
        duration:1,
      }
    }
  }
  return (
    <>
    <nav className="flex justify-between items-center sm:px-8 px-30 mx-5">


    <div className="logo py-2 my-2 px-1 pr-0 bg-black font-bold text-white rounded-xl capitalize">
        <span>mohamed </span>
        <span className="bg-white text-black p-2 mr-1 rounded-xl">Hisham</span>
    </div>

        <ul className="flex hidden md:flex capitalize mx-6 my-2 gap-2">
            {links.map((link)=>(
              <Navlink link={link} key={link.id}/>
            ))}
        </ul>

        <Image src={bars} className="bars md:hidden" width={30} height={30} alt="bars" id="bars" onClick={()=>setmenueopen(true)}/>

    </nav>
    <motion.div variants={listvariants} initial="closed" animate={`${menueopen?"opened":""}`} className={`${menueopen?"ul_menue menue_container fixed":"hidden"}`}>
    <Image src={xmark} className="bars m-4 absolute right-0" width={30} height={30} alt="bars" id="bars" onClick={()=>setmenueopen(false)}/>
      <motion.ul variants={ulmotion} className="capitalize my-2 gap-2 menue">
          <motion.div variants={listitems}><Link href="/"><li className="menue_item2 menue_item_active">home</li></Link></motion.div>  
            <motion.div variants={listitems}><Link href="/about"><li className="menue_item2">about</li></Link></motion.div>
            <motion.div variants={listitems}><Link href="/projects"><li className="menue_item2">projects</li></Link></motion.div>
        </motion.ul>
        </motion.div>
    
    </>
  )
}
