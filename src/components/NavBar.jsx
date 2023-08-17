import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";

function NavBar() {
  const [nav, setNav] = useState(false);
  const handleNav= () => {
    setNav(!nav)
  };

  return (
    <div>
    <FiMenu className='absolute top-0 right-0 h-16 w-16 '/>
   </div>
  )
}

export default NavBar
