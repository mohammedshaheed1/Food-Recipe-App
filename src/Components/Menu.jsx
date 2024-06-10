import React, { useState } from 'react'
import { useEffect } from 'react';
import Hero from './Hero';
import SpecialDishes from './SpecialDishes';
import FilteredDishes from './FilteredDishes';
import Header from './Header';
import AllMenu from './AllMenuContext';




function Menu() {
    
  

 return (
   <div>
    <Header/>
     <Hero/>
     <AllMenu>
    <SpecialDishes />
    <FilteredDishes />
    </AllMenu>
   
   </div>
 )


}

export default Menu