import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Button } from "@nextui-org/react";
import { useState } from 'react';
import { useFoodStore } from "@/app/store/FoodStore";
import {Input} from "@nextui-org/react";

interface FoodCardItemProps {
  id: number;
  name: string;
  type: string;
  description: string;
}

const FoodCardItem: React.FC<FoodCardItemProps> = ({ id, name, type, description }) => {
  const [EditOption, setEditOption] = useState(false)
  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);
  const editItem = useFoodStore((state) => state.editItem);
  const deleteItem = useFoodStore((state) => state.deleteItem);

  const handleEdit = () => {
    editItem(id, newName, newDescription);
    setEditOption(false);
  };

  return (
    <>
    {EditOption?(
      <div className="w-full flex flex-row flex-wrap gap-4">
        <Input
          isRequired
          value={newName}
          onChange={(e)=> setNewName(e.target.value)}
          type="name"
          color="success"
          label="Name"
          placeholder="Enter name"
          defaultValue=""
          className="max-w-[220px]"
        />
         <Input
          isRequired
          value={newDescription}
          onChange={(e)=> setNewDescription(e.target.value)}
          size="lg"
          type="description"
          color="success"
          label="Description"
          placeholder="Enter description"
          defaultValue=""
          className="max-w-[220px]"
        />
        <Button
          color="success"
          variant="bordered"
          disableRipple
          className="p-0 bg-transparent data-[hover=true]:bg-transparent font-serif dark:font-mono text-md md:text-md"
          radius="lg"
          onClick={handleEdit}
        >
          Save
        </Button>
    </div>
    ):
    (<Card isFooterBlurred radius="lg" className="max-w-[400px]">
      <CardHeader className="flex justify-center gap-3">
        <div className="flex flex-col text-center tracking-wide">
          <p className="text-xl font-mono font-bold">{name}</p>
          <p className="text-small text-default-500">{type}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className=" font-mono dark:font-light dark:text-slate-300 text-sm">
        <p>{description}</p>
      </CardBody>
      <Divider />
      <CardFooter className="gap-2">
        <Button
          color="success"
          variant="bordered"
          disableRipple
          className="p-0 bg-transparent data-[hover=true]:bg-transparent font-serif dark:font-mono text-md md:text-md"
          radius="lg"
          onClick={() => setEditOption(true)}
        >
          Edit
        </Button>
        <Button
          color="danger"
          variant="bordered"
          disableRipple
          className="p-0 bg-transparent data-[hover=true]:bg-transparent font-serif dark:font-mono text-md md:text-md"
          radius="lg"
          onClick={() => deleteItem(id) }
        >
          Delete
        </Button>
      </CardFooter>
    </Card>)
}
    </>
  );
}

export default FoodCardItem;