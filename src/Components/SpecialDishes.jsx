import React, { useContext } from 'react'
import CardDish from './CardDish'
import Popup from './Popup'
import { useState } from 'react'

import { AllMenuContext } from './AllMenuContext'
import AddToCart from './AddToCart'

function SpecialDishes(props) {

   const[showPopup,setShowPopup]=useState(false)
   const[currentDish,setCurrentDish]=useState('')
   const[addtocartdata,setAddtocartdata]=useState({
      heading:"",
      image:""
   })

   const AllMenu=useContext(AllMenuContext);

   function showPopupHandler(dishname){
      setShowPopup(true)
      setCurrentDish(dishname)
     }

     function showPopupClose(){
      setShowPopup(false)
     }

     function AddtocartHandler(addimg,addwrite){
           setAddtocartdata({
            heading:addwrite,
            image:addimg
           })
     }
   
  let specialMenus=AllMenu.map((menuItem)=>{
          return(
             <CardDish showPopup={showPopupHandler} menuitem={menuItem}/>
          )
    })

  return (
    <section className='special-dishes'>
     {showPopup && <Popup  currentDish={currentDish} showPopupClose={showPopupClose} AddtocartHandler={AddtocartHandler} />}
        <div className="container">
        <AddToCart data={addtocartdata}/>
            <div className="special-dishes-content text-center">
            <h2>Our Special Dishes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti exercitationem mollitia, voluptates assumenda at autem asperiores nihil doloremque tempore, dignissimos ut vero, reprehenderit commodi nulla!</p>
            </div>
            <div className="special-dishes-list text-center">
                <ul className='flex flex-wrap gap-25'>
                   {specialMenus}
                </ul>
               
              
            </div>
        </div>
        
    </section>
  )
}

export default SpecialDishes