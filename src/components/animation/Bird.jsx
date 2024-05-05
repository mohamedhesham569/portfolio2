"use client";
import { useEffect } from "react";
import "./bird.css"
export default function Bird() {
    return(
<>
<div class="container">
    <div id="sun"></div>

    <section id="bird-wrapper">
        
        <section id="bird">
            <div class="body">
                <div class="crest">
                    <span class="crest-1"></span>
                    <span class="crest-2"></span>
                </div>
                <div class="head">
                    <span class="eye"></span>
                    <div class="mouth">
                        <span class="peak-top"></span>
                        <span class="peak-bottom"></span>
                        <span class="nouse"></span>
                        <div class="fish">
                            <div class="fin-top"></div>
                            <span class="body-left"></span>
                            <span class="body-right"></span>
                            <div class="fin-bottom"></div>
                        </div>
                    </div>
                    <div class="head-lines">
                        <span class="head-line-1"></span>
                        <span class="head-line-2"></span>
                    </div>
                </div>
                <div class="chest"></div>
                <div class="feathers">
                    <span class="feather-1"></span>
                    <span class="feather-2"></span>
                    <span class="feather-3"></span>
                </div>
                <div class="wings">
                    <div class="wing-dots">
                        <div class="small dots-container">
                            <span class="small"></span>
                            <span class="small"></span>
                            <span class="small"></span>
                        </div>
                       <div class="big-dots-container">
                           <span class="big"></span>
                           <span class="big"></span>
                           <span class="big"></span>
                           <span class="big"></span>
                       </div>
                    </div>
                </div>

                <div class="legs"></div>
                <div class="feet">
                    <div class="toes"></div>
                </div>
            </div>
        </section>

        
        <div id="big-rock">
            <div class="rock-1"></div>
            <div class="rock-2"></div>
            <div class="rock-3"></div>

            
            <span class="rock-grass grass-1 left"></span>
            <span class="rock-grass grass-2 left"></span>
            <span class="rock-grass grass-3 left"></span>
            <span class="rock-grass grass-1 right"></span>
            <span class="rock-grass grass-2 right"></span>
            <span class="rock-grass grass-3 right"></span>
        </div>
    </section>
    <span class="grass"></span>
</div>
    </>
  )
}
