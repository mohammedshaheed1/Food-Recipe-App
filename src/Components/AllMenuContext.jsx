import React, { useEffect, useState } from 'react'

 export const AllMenuContext=React.createContext()



function AllMenu(props) {


    const [menu,setMenu]=useState([])
    const[loading,setLoading]=useState(false)

    async function getAlltheMenu(){
        setLoading(true)
         const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
         let response = await fetch(API_URL);
         let data = await response.json();
         setMenu(data.meals)
         setLoading(false)
      }

      useEffect(()=>{
        getAlltheMenu()
    },[])

  return (
    <AllMenuContext.Provider value={menu}>
        {props.children}
    </AllMenuContext.Provider>
    
  )
}

export default AllMenu