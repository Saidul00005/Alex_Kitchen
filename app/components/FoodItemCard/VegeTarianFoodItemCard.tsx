import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Button } from "@nextui-org/react";

interface VegetarianFoodCardItemProps {
  id: number;
  name: string;
  type: string;
  description: string;
}

const VegetarianFoodCardItem: React.FC<VegetarianFoodCardItemProps> = ({ id, name, type, description }) => {

  return (

    <Card isFooterBlurred radius="lg" className="max-w-[400px]">
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
          className="p-0 bg-transparent data-[hover=true]:bg-transparent font-serif dark:font-mono text-md md:text-lg"
          radius="lg"
        >
          Edit
        </Button>
        <Button
          color="danger"
          variant="bordered"
          disableRipple
          className="p-0 bg-transparent data-[hover=true]:bg-transparent font-serif dark:font-mono text-md md:text-md"
          radius="lg"
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}

export default VegetarianFoodCardItem;