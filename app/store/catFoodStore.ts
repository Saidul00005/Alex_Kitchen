import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware'
import FoodItemsData from "@/data/catFoodData.json";

interface FoodItem {
    id: number;
    name: string;
    type: string;
    description: string;
}

interface CatFoodStoreState {
    foodItems: FoodItem[];
    addItem: (name: string, type: string, description: string) => void;
    editItem: (
        id: number,
        name: string,
        description: string
    ) => void;
    deleteItem: (id: number) => void;
}

export const useCatFoodStore = create<CatFoodStoreState>()(
    devtools(
        persist(
            (set) => ({
                foodItems: FoodItemsData,
                addItem: (name, type, description) =>
                    set((state) => ({
                        foodItems: [
                            ...state.foodItems,
                            { id: Math.ceil(Math.random() * 10000) + 1, name, type, description },
                        ],
                    })),
                editItem: (id, name, description) =>
                    set((state) => ({
                        foodItems: state.foodItems.map((item) =>
                            item.id === id ? { ...item, name, description } : item
                        ),
                    })),
                deleteItem: (id) =>
                    set((state) => ({
                        foodItems: state.foodItems.filter((item) => item.id !== id),
                    })),
            }),
            { name: 'CatFoodStore' },
        )));
