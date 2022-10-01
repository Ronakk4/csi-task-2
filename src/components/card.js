import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./cardc.css";
function Card()
{ 
  const [Mydata,Setdata]=useState([]);
  useEffect(()=>
     {
      axios.get("https://programming-quotes-api.herokuapp.com/Quotes?count=0").then((res)=>
    Setdata(res.data));
     

     
      
      
     },[]);

    function change(){
      alert("saved");
    }
      

   


  


  return(
      
  
       
        
          Mydata.map((post)=>
        {
          const {id,author,en}=post;
         return(
          <div className='card' key={id}>
           <div className='chead'>
          <h2>Author:{author}</h2></div>
           <div className="a"><p>ID:{id}</p>
           <p>EN:{en}</p></div>
          < div className='re'><button  className ="btn"onClick={change}> Save for later <i class="fa-solid fa-bookmark"></i></button></ div>
           </div>
    
         )
        })
        
        
        
  );
}
export default Card;