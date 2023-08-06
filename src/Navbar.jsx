import React from 'react'


export default function Navbar() {
  return (
<nav className="nav">
<a href="/" className="site-title">
    <img src="logo.png" ></img>
</a>

<ul>
<li className='active'>
<a href="/">Home</a>
</li>
<li>
<a href="/About">About us
</a>
</li>
<li>
<a href="/Whygo">Why-GoWorld
</a>
</li>
<li>
<a href="/Coaching">Coaching
</a>
</li>
<li>
<a href="/Country">Country
</a>
</li>
<li>
<a href="/Contactus">ContactUs
</a>
</li>
</ul>
</nav>

  )
}
