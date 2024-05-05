"use client";
import Nav from "./Nav";
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation";

export default function Slideanimation({children}) {
    const pathname=usePathname()
  return (
    <AnimatePresence mode="wait">
    
        <div key={pathname} style={{minHeight:"100vh"}} className="w-screen  bg-gradient-to-b from-blue-100 to-red-100">

            <motion.div className="h-screen w-screen fixed rounded-b-[100px] z-40 bg-black"
            animate={{height:"0vh"}}
            exit={{height:"100vh"}}
            transition={{duration:0.5,ease:"easeOut"}}
            />
            <motion.div className="fixed left-0 capitalize bottom-80 sm:bottom-0 top-0 right-0  w-fit m-auto text-white text-4xl sm:text-8xl z-50 h-fit"
            initial={{opacity:1}}
            animate={{opacity:0}}
            transition={{duration:0.8,ease:"easeOut"}}
            >
                {pathname.substring(1)}
            </motion.div>
            <motion.div className="h-screen bottom-0 w-screen fixed rounded-t-[100px] z-30 bg-black"
            initial={{height:"100vh"}}
            animate={{height:"0vh",transition:{delay:0.5}}}
            />
    <Nav/>
    {children}
    </div>
    </AnimatePresence>
  )
}
