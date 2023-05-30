import React from 'react'
import './slider.css'

import n1 from '../../../src/n1.jpg'
import n2 from '../../../src/n2.jpg'
import n3 from '../../../src/n3.jpg'
const Slider = () => {
    return (
        <div>
            <div class=" slider-container">

                <div class="mySlides fade">
                    <div class="numbertext">1 / 3</div>
                    <img src={n1} alt='n1' />
                    <div class="text">Caption Text</div>
                </div>

                <div class="mySlides fade">
                    <div class="numbertext">2 / 3</div>
                    <img src={n2} alt='n2' />
                    <div class="text">Caption Two</div>
                </div>

                <div class="mySlides fade">
                    <div class="numbertext">3 / 3</div>
                    <img src={n3} alt='n3' />
                    <div class="text">Caption Three</div>
                </div>

                <a class="prev" onclick="plusSlides(-1)">❮</a>
                <a class="next" onclick="plusSlides(1)">❯</a>

            </div>


            <div >
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
            </div>
        </div>
    )
}

export default Slider