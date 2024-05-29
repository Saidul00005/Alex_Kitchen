"use client"
import React from 'react'
import FoodCardItem from "@/app/components/FoodItemCard";
import { useFoodStore } from "@/app/store/FoodStore";

const FoodItemsView:React.FC = () => {
  let FoodItems = useFoodStore((state) => {return state.VegetarianFoodItems});
  
  return (
    
    <div className='grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 items-center justify-items-center gap-3 mx-2 mt-6'> 
       {FoodItems.map((item) =>(
          <FoodCardItem key={item.id} id={item.id} name={item.name} type={item.type} description={item.description}/>
        ))}
        
    </div>
    
  )
}

export default FoodItemsView