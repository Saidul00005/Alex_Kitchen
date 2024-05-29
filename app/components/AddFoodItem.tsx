'use client'
import React, { useState } from 'react';
import { useFoodStore } from '../store/FoodStore';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const AddFoodItem: React.FC = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [section, setSection] = useState('');
    const [description, setDescription] = useState('');
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const addItem = useFoodStore((state) => state.addItem);
    
    const handleAdd = () => {
        if (name && type && section && description) {
            addItem(name, type, section, description);
            setName('');
            setType('');
            setSection('');
            setDescription('');
            onClose();
        } else {
            alert("Please fill out all fields before adding the item.");
        }
    };

    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    <ModalHeader className="flex flex-col justify-center items-center gap-1">
                        Add Food Item
                    </ModalHeader>
                    <ModalBody>
                        <form className="max-w-sm mx-auto">
                            <div className="mb-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    id="name"
                                    className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                                    placeholder="Enter name."
                                />
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Type
                                </label>
                                <select
                                    id="type"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option value="">Select Type</option>
                                    <option value="Starter">Starter</option>
                                    <option value="Main Course">Main Course</option>
                                    <option value="Dessert Food">Dessert Food</option>
                                </select>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="section" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Section
                                </label>
                                <select
                                    id="section"
                                    value={section}
                                    onChange={(e) => setSection(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option value="">Select Section</option>
                                    <option value="vegetarian">Vegetarian</option>
                                    <option value="nonVegetarian">Non-Vegetarian</option>
                                    <option value="dog">Dog food</option>
                                    <option value="cat">Cat Food</option>

                                </select>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={4}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter description."
                                ></textarea>
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                            Close
                        </Button>
                        <Button color="primary" onPress={handleAdd}>
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Button
                color="success"
                variant="bordered"
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent font-serif dark:font-mono text-md md:text-lg"
                radius="lg"
                onPress={onOpen}
            >
                Add➕
            </Button>
        </>
    );
};

export default AddFoodItem;
