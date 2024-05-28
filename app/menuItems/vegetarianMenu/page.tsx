import VegetarianFoodItemsView from "@/app/components/view/VegetarianFoodItemsView";
import React from "react";
import { Button } from "@nextui-org/react";

const VegetarianMenu: React.FC = () => {
  return (
    <div className="mx-4">
      <div className="flex flex-col justify-center items-center mt-6 gap-6">
        <p className="text-2xl font-serif dark:text-green-400">Vegetarian Items</p>
        <Button
          color="success"
          variant="bordered"
          disableRipple
          className="p-0 bg-transparent data-[hover=true]:bg-transparent font-serif dark:font-mono text-md md:text-lg"
          radius="lg"
        >
          Add➕
        </Button>
      </div>
      <VegetarianFoodItemsView />

    </div>
  );
};

export default VegetarianMenu;
