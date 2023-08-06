import React from 'react'
import { Button } from 'reactstrap'

export default function Navbar1() {
  return (
   
<nav className="nav">
<a href="/" className="site-title">
Welcome To Goworld Edcuations
</a>
<ul>
<li className='active'>
<a href="/talk to Our Expert">Talk to Our Expert</a>
</li>
<li>
<a href="/+91 040 66443738">+91 040 66443738
</a>
</li>
<li>

<div>
  <Button
    color="primary"
  >
    Apply now
  </Button>
</div>
</li>
</ul>
</nav>

  )
}
