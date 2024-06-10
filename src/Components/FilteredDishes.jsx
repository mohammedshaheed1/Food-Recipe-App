import React, { useState, useEffect, useContext } from 'react';
import Pagination from './Pagination';
import CardDish from './CardDish';
import { AllMenuContext } from './AllMenuContext';
function FilteredDishes(props) {


    const [menucategory,setMenucategory]=useState([])
    const [singleDish,setSingleDish]=useState()
    
    const allMenu=useContext(AllMenuContext)
    
    
    const [filteredDishesAll, setFilteredDishesAll] = useState([]);
    const[activeDishes,setActiveDishes]=useState()
    const[currentPage,setCurrentPage]=useState(1)
    const[itemperpage,setItemPerPage]=useState(4)

   


  

  

    async function getAlltheCategory(){
      const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
      let response = await fetch(API_URL);
      let categoryData= await response.json();
      setMenucategory(categoryData.categories)
   }

  //filters onedishcategory
   async function getOnlyOneDish(){
     const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert";
     let response = await fetch(API_URL);
     let singleDishData= await response.json();
     console.log(singleDishData)
  }
  

   useEffect(()=>{
       getAlltheCategory()
       getOnlyOneDish()
   },[])





  
       

    function showFilteredDishesHandler(category) {
        setActiveDishes(category)
        let filteredDishes = allMenu.filter((item) => item.strCategory === category).map((Menuitem) => {
            return (
                <CardDish menuitem={Menuitem}/>
            );
        });
        setFilteredDishesAll(filteredDishes);
    }

    let allcategories =menucategory.map((item) => {
        return (
            <li key={item.strCategory} className={item.strCategory==activeDishes?'active':<></>}onClick={() => showFilteredDishesHandler(item.strCategory)}>
                {item.strCategory}
            </li>
        );
    });

    return (
        <div className="filtered-dishes">
            <div className="container">
                <div className="text-center">
                    <h2>Choose your Dishes</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci odit officia earum excepturi sed recusandae nobis error est.</p>
                </div>
                <div className="filterd-dishes">
                    <ul>
                        {allcategories}
                    </ul>
                </div>
                <div className="filters-dishes-result text-center">
                    <ul className="flex flex-wrap gap-25">
                        {/* {singleDishitem} */}
                       {   
                        filteredDishesAll.length!=0 ? filteredDishesAll:<div className='alert'>
                        <h3>Sorry, no items found</h3>
                        <h4>Please choose another menu</h4>
                        </div>}   
                    </ul>
                </div>

                <Pagination amount={filteredDishesAll}/>
            </div>
        </div>
    );
}

export default FilteredDishes;
