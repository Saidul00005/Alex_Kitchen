import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware';
import FoodItemsData from "@/data/FoodData.json";

interface FoodItem {
  id: number;
  name: string;
  type: string;
  section: string;
  description: string;
}

interface FoodStoreState {
  foodItems: FoodItem[];
  VegetarianFoodItems: FoodItem[];
  NonVegetarianFoodItems: FoodItem[];
  DogFoodItems: FoodItem[];
  CatFoodItems: FoodItem[];
  addItem: (name: string, type: string, section: string, description: string) => void;
  editItem: (id: number, name: string, description: string) => void;
  deleteItem: (id: number) => void;
}

export const useFoodStore = create<FoodStoreState>()(
  devtools(
    persist(
      (set) => ({
        foodItems: FoodItemsData,
        VegetarianFoodItems: FoodItemsData.filter(item => item.section === 'vegetarian'),
        NonVegetarianFoodItems: FoodItemsData.filter(item => item.section === 'nonVegetarian'),
        DogFoodItems: FoodItemsData.filter(item => item.section === 'dog'),
        CatFoodItems: FoodItemsData.filter(item => item.section === 'cat'),
        addItem: (name, type, section, description) => {
          const newItem = { id: Math.ceil(Math.random() * 10000) + 1, name, type, section, description };
          set((state) => {
            const newFoodItems = [...state.foodItems, newItem];
            return {
              foodItems: newFoodItems,
              VegetarianFoodItems: newFoodItems.filter(item => item.section === 'vegetarian'),
              NonVegetarianFoodItems: newFoodItems.filter(item => item.section === 'nonVegetarian'),
              DogFoodItems: newFoodItems.filter(item => item.section === 'dog'),
              CatFoodItems: newFoodItems.filter(item => item.section === 'cat'),
            };
          });
        },
        editItem: (id, name, description) => {
          set((state) => {
            const newFoodItems = state.foodItems.map((item) =>
              item.id === id ? { ...item, name, description } : item
            );
            return {
                foodItems: newFoodItems,
                VegetarianFoodItems: newFoodItems.filter(item => item.section === 'vegetarian'),
                NonVegetarianFoodItems: newFoodItems.filter(item => item.section === 'nonVegetarian'),
                DogFoodItems: newFoodItems.filter(item => item.section === 'dog'),
                CatFoodItems: newFoodItems.filter(item => item.section === 'cat'),
            };
          });
        },
        deleteItem: (id) => {
          set((state) => {
            const newFoodItems = state.foodItems.filter((item) => item.id !== id);
            return {
                foodItems: newFoodItems,
                VegetarianFoodItems: newFoodItems.filter(item => item.section === 'vegetarian'),
                NonVegetarianFoodItems: newFoodItems.filter(item => item.section === 'nonVegetarian'),
                DogFoodItems: newFoodItems.filter(item => item.section === 'dog'),
                CatFoodItems: newFoodItems.filter(item => item.section === 'cat')
            };
          });
        },
      }),
      { name: 'FoodStore' },
    )
  )
);