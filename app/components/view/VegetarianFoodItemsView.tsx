"use client"
import React from 'react'
import VegetarianFoodCardItem from "@/app/components/FoodItemCard/VegeTarianFoodItemCard";
import { useVegetarianFoodStore } from "@/app/store/vegetarianFoodStore";

const VegetarianFoodItemsView:React.FC = () => {
  const VegetarianFoodItems = useVegetarianFoodStore((state) => state.foodItems);
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-4">
        {VegetarianFoodItems.map((item) =>(
          <VegetarianFoodCardItem key={item.id} id={item.id} name={item.name} type={item.type} description={item.description}/>
        ))}
       
    </div>
  )
}

export default VegetarianFoodItemsView