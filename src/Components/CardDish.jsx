import React from 'react'

function CardDish(props) {
      

  return (
             <li>
                <a style={{textDecoration:"none"}} href="javascript:;" onClick={()=>props.showPopup(props.menuitem.strMeal)}>
                <img src={props.menuitem.strMealThumb} className='br-10' alt={props.menuitem.strMeal} />
                 <h4>{props.menuitem.strMeal}</h4>
                 </a>
               </li>
              
              )
}

export default CardDish