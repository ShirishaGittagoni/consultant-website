// import React from 'react'
// import ImageSlider from './ImageSlider';

//  const Herosection =() => {
    
//     const slides=[
//         <img src="images3.jpg" style="width:100%"></img>
//         // <img src="images 2.jpg" ></img>

        
//         // {url:"http://localhost:3000/image1.jpg", title:"student"},
//         // {url:"http://localhost:3000/images 3.jpg", title:"meeting"},
//     ];
//     // const containerStyles={
//     //     width:"500px",
//     //     height:"280px",
//     //     margin: "0 auto",
//     //     };
//   return (
//      <div className='hero-container'>
// {/* <h1> Talented Consultants </h1>
// <p> we look forward to get to know your profile and your dream destination for Education and Immigration 
// </p> */}
// {/* <div style={containerStyles}></div>
//     <ImageSlider slides={slides} />    */}
//      <div class="slideshow-container">
    
//     <div class="mySlides fade">
//       {/* <div class="numbertext">1 / 3</div>
//       <img src="image1.jpg" style="width:100%"></img>
//       <div class="text">Caption Text</div> */}
//       <ImageSlider slides={slides} />     </div> 
//     </div>
// </div>
//   )
// }
    
     
  
// export default Herosection;


import './Herosection.css';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

function Herosection() {
  return(
    
   <ImageSlider slides={SliderData} />

  )
}

export default Herosection;
