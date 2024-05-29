import React from "react";
import { Link, Button } from "@nextui-org/react";


const MenuItems = () => {
  return (
    <div className="mx-4">
      <div className="flex flex-col justify-center items-center mt-6 gap-6 mb-4">
        <p className="text-2xl font-serif dark:text-green-400">Food Items</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <Button
          href="/menuItems/Vegetarian"
          as={Link}
          color="success"
          variant="solid"
          className="p-2 font-serif dark:font-mono text-md lg:text-xl xl:text-2xl"
        >
          🥗Vegetarian Food Item
        </Button>
        <Button
          href="/menuItems/NonVegetarian"
          as={Link}
          color="success"
          variant="solid"
          className="p-2 font-serif dark:font-mono text-md lg:text-xl xl:text-2xl"
        >
          🥩NonVegetarian Food Item
        </Button>
        <Button
          href="/menuItems/Dog"
          as={Link}
          color="success"
          variant="solid"
          className="p-2 font-serif dark:font-mono text-md lg:text-xl xl:text-2xl"
        >
           🐶Dog Food Item
        </Button>
        <Button
          href="/menuItems/Cat"
          as={Link}
          color="success"
          variant="solid"
          className="p-2 font-serif dark:font-mono text-md lg:text-xl xl:text-2xl"
        >
          🐱Cat Food Item
        </Button>
      </div>

    </div>
  )
}

export default MenuItems