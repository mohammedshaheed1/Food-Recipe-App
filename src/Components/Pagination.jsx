import React from 'react'

function Pagination(props) {
    console.log("filter dishes",props.amount)
   
    const numberofpage=[]
    let N=props.amount.length
    for(let i=1;i<=N;i++){
        numberofpage.push(i)
    }
  let pages= numberofpage.map((item)=>{
       return <li>
            {item}
       </li>
   })
  return (
    <section>
   <ul className='pagination flex'>
   {pages}
   </ul>
   </section>
  )
}

export default Pagination