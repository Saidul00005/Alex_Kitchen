import React from "react";
import VegetarianFoodItemsView from "@/app/components/view/VegetarianFoodItemsView";
import AddFoodItem from "@/app/components/AddFoodItem";
import NonVegetarianFoodItemsView from "@/app/components/view/NonVegetarianFoodItemsView";
import DogFoodItemsView from "@/app/components/view/DogFoodItemsView";
import CatFoodItemsView from "@/app/components/view/CatFoodItemsView";



const FoodMenu = ({params}: {params:{FoodMenu:string}}) => {
  return (
    <div className="mx-4">
      <div className="flex flex-col justify-center items-center mt-6 gap-6">
        <p className="text-2xl font-serif dark:text-green-400">{params.FoodMenu} Food Items</p>
        <AddFoodItem/>
      </div>
      
     { (params.FoodMenu === 'Vegetarian') ?  <VegetarianFoodItemsView />:(params.FoodMenu === 'NonVegetarian') ? <NonVegetarianFoodItemsView/>: (params.FoodMenu === 'Dog') ? <DogFoodItemsView/>: <CatFoodItemsView/> 
    }
    </div>
  );
};

export default FoodMenu;
