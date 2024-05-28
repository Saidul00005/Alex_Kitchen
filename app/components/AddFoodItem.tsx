import React from 'react'
import { Button } from "@nextui-org/react";


const AddFoodItem = () => {

    return (
        <>
            <Button
                color="success"
                variant="bordered"
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent font-serif dark:font-mono text-md md:text-lg"
                radius="lg"
            >
                Add➕
            </Button>
        </>
    )
}

export default AddFoodItem