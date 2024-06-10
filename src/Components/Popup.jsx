import React, { useContext } from 'react'
import { AllMenuContext } from './AllMenuContext'

function Popup(props) {

const Allmenu=useContext(AllMenuContext)


let dishdetails= Allmenu.filter((item)=>{
    return item.strMeal==props.currentDish

  }).map((item)=>{
         return <div className='popup-content-data'>
          <div className="popup-header">
            <img src={item.strMealThumb} className='br-10' alt=""/>
            <h5 className='popup-header-category'>{item.strCategory}</h5>
            </div>
          <h2>{item.strMeal}</h2>
          <p>{item.strInstructions}</p>


          <ul className='dish-ingredient flex'>
            <li>{item.strIngredient1}</li>
            <li>{item.strIngredient2}</li>
            <li>{item.strIngredient3}</li>
            <li>{item.strIngredient4}</li>
            </ul>
            <button onClick={()=>props.AddtocartHandler(item.strMeal,item.strMealThumb)}>Order Now</button>
            <h5 onClick={props.showPopupClose} className='popup-close'>Close</h5>
         </div>
  })
  return (
    <div className='popup'>
        <div className="popup-content">
            {dishdetails}
        
        </div>
    </div>
  )
}

export default Popup