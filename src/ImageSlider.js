// import {useState} from 'react' 


// const ImageSlider=({ slides }) =>{
//     const[currentIndex,setCurrentUser]=useState(0);
//     const sliderStyles={
//         height: "100%",
//         position: "relative"
//         };
//         console.log("+++++++++++++++++sliderStyles")
//     const slideStyles={
//         width: "100%",
//         height:"100%",
//         borderRadius:"10px",
//         backgroundPositon: "center",
//         backgroundSize :"cover",
//         backgroundImage:`url(${slides[currentIndex].url})`
//         };
//         const leftArrowStyles={
//             position : "absolute",
//             top:"50%",
//             transform:"translate(0, -50%)",
//             left:"32px",
//             fontSize: "45px",
//             color:"#fff",
//             zIndex:1,
//             cursor:"pointer",
//             };
//             const rightArrowStyles={
//                 position : "absolute",
//                 top:"50%",
//                 transform:"translate(0, -50%)",
//                 right:"32px",
//                 fontSize: "45px",
//                 color:"#fff",
//                 zIndex:1,
//                 cursor:"pointer",
//                 };
                
//     return (
//         <div>
//          <div style={sliderStyles}></div>
//       <div style={slideStyles}></div>   
//       <div style={leftArrowStyles}>❮</div>
//       <div style={rightArrowStyles}>❯</div>
//         </div>

//     )
//     }
//     export default ImageSlider;

import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;

    