import React from "react";
import Navbar from './Navbar'
import Navbar1 from './Navbar1'
import Home from './Home'
import About from './About'
import Herosection from './Herosection'
import Whygo from './Whygo'
import Coaching from './Coaching'
import Country from './Country'
import Contactus from './Contactus'



function App() {
  let component
  switch (window.location.pathname){
    case "/":
    component=<Home />
    break
    case "/About":
    component =<About />
    break
    case "/Whygo":
    component =<Whygo />
    break
    case "/Coaching":
      component =<Coaching />
      break
      case "/Country":
        component =<Country />
        break
        case "/Contactus":
          component =<Contactus />
          break
      }
return (
  

  <div>
      <Navbar1 />
      <Navbar />
      <Herosection />
{component}     


  </div>
);
}
export default App;
