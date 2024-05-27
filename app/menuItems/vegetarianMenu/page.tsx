import CardItem from "@/app/components/Card";
import React from "react";

const VegetarianMenu = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-6">
        <p className="text-2xl font-serif text-green-400">Vegetarian Items</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center mt-8">
        <CardItem />
      </div>
    </>
  );
};

export default VegetarianMenu;
