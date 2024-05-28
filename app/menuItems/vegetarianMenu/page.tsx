
import VegetarianFoodItemsView from "@/app/components/view/VegetarianFoodItemsView";
import React from "react";


const VegetarianMenu: React.FC = () => {
  return (
    <div className="mx-4">
      <div className="flex flex-col justify-center items-center mt-6 gap-6">
        <p className="text-2xl font-serif dark:text-green-400">Vegetarian Items</p>
      </div>
      
      <VegetarianFoodItemsView />

    </div>
  );
};

export default VegetarianMenu;
