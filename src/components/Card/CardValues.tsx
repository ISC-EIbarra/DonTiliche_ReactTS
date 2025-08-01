import { Card, CardHeader, CardBody, Button } from '@heroui/react';
import { ActionValue } from '../../data';

type CardValuesProps = {
  actionValue: ActionValue;
};

export default function CardValues({ actionValue }: CardValuesProps) {
  return (
    <Card className="py-4 bg-white/90 rounded-2xl">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <Button
          disabled
          isIconOnly
          className="bg-[#CA9652] text-white text-2xl font-medium text-center rounded-full"
        >
          {actionValue.id}
        </Button>
      </CardHeader>
      <CardBody className="py-2">
        <h1 className="text-[#CF536B] font-semibold text-lg text-center">
          {actionValue.title}
        </h1>
        <p className="font-normal text-center">{actionValue.content}</p>
      </CardBody>
    </Card>
  );
}
