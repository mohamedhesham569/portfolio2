"use client";

import Car from "@/components/animation/Car"
import "./about.css"
import Bird from "@/components/animation/Bird"
import { motion } from "framer-motion"
import { useRef } from "react";
import { useInView } from "framer-motion"
import { saveAs } from "file-saver";

const Page=()=> {


    const saveFile = () => {
        saveAs(
          "https://drive.google.com/file/d/1x2EO5BEmL5PG2my_Llvp0PNBZtyKEr9a/view?usp=drivesdk"
        );
      };
    return (

    <>
    <motion.div
    initial={{y:"-200vh"}}
    animate={{y:"0"}}
    transition={{duration:1}}
    >
    <section className="flex">
        
        <div className="text gap-24">
<div className="main-bio flex">
            <div className="bio m-6 mt-32 mb-0 h-screen sm:w-1/2">
                <div className="bio-titel text-xl font-bold my-8 ">
                BIOGRAPHY
                </div>
                <div className="bio-desc">
                As a frontend developer , I'm dedicated to creating seamless digital experiences. I focus on user-centric design principles to craft elegant interfaces that blend aesthetics with functionality. My passion lies in shaping the digital landscape with purpose and innovation.
                </div>
                <div className="field mt-24">
                    <div className="scroll"></div>
                </div>
            </div>
            <div className="car  hidden sm:block relative w-1/2"><Car className="ccar"/></div>
            </div>

<div className="main-skills flex">
            <div className="skills h-screen m-6 mt-0 sm:w-1/2">
                <div className="skills-titel mb-6 font-bold text-xl" >
                SKILLS
                </div>
                <div className="skills-items flex gap-3 flex-wrap" >
                    <div className="skill">javascript</div>
                    <div className="skill">html</div>
                    <div className="skill">css</div>
                    <div className="skill">react.js</div>
                    <div className="skill">next.js</div>
                    <div className="skill">bootstrap</div>
                    <div className="skill">tailwind</div>
                    <div className="skill">sass</div>
                    <div className="skill">firebase</div>
                    <div className="skill">typescript</div>
                    <div className="skill">framer motion</div>
                    <div className="skill">git</div>
                </div>
                <div className="field mt-24">
                    <div className="scroll"></div>
                </div>
            </div>
            <motion.div  className="bird hidden sm:block relative w-1/2"><Bird/></motion.div>
            </div>

            <div className="experience m-6 mb-0 h-screen">
                <motion.div  transition={{delay:0.2}} className="exp-titel my-6 font-bold text-xl">
                EXPERIENCE
                </motion.div>

                <div className="content flex relative">

                    <motion.div  className="job capitalize sm:w-5/12">
                        <div className="job-titel m-2 my-4 bg-black text-white font-semibold w-fit p-2 rounded-xl"> front-end developer</div>
                        <div className="job-desc mt-0 m-5 text-sm">participated in job board website and was responsible for authentication and login&signout page</div>
                        <div className="duration mx-5 text-red-500">mar-april /2024</div>
                        <div className="nn flex">
                        <div className="company m-4 bg-black text-white text-sm font-semibold w-fit p-2 rounded-xl">codsoft</div>
                        <div className="intern m-4 mx-0 bg-black text-white text-sm font-semibold w-fit p-2 rounded-xl">internship</div>
                        </div>
                    </motion.div>

                    <motion.div className="line m-3 relative">
                        <div className="curcil w-6 h-6 bg-white ring-2 ring-red-600 rounded-full"></div>
                        <div className="linee w-0.5 absolute h-full bg-black"></div>
                    </motion.div>
                    
                </div>
                <button className="py-2 px-4 mt-10 rounded h-fit  bg-black text-white m-5" onClick={saveFile}>Download CV</button>
            </div>
        </div>
    </section>
    </motion.div>
    </>
    )
}
export default Page