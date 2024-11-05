import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom'
import { getUsers } from '../store/thunk/Fetch';
import { useEffect } from 'react';

function Preview() {
  let [card,setCard] = useState()
 let {id} = useParams()
console.log(id);

  
const { isLoading, data, error } = useSelector((state) => state?.allUser);

  console.log(data);
  useEffect(()=>{
    let card = data &&  data.find((item) => item.id == id)

    setCard(card)
  },[id])
   
  return (
    <div className='mt-40 bg-gray-100'>
     <div className='container  p-6 flex flex-col gap-11'>
      <img src={card?.image} className='w-[100%]' alt="" />
      <h2 className='w-[80%]'>{card?.title}</h2>
      <p className='font-bold fs-4'>{card?.content}</p>
      <div className='flex justify-around text-blue-500 flex-col  md:flex-row'> 
        <h2>Category : {card?.category}</h2>
        <h2>Author : {card?.author}</h2>
        <h2>Published date : {card?.published_date}</h2>
        
      </div>
      <h3>Reading time : {card?.reading_time}</h3>

     </div>
    </div>
  )
}

export default Preview
