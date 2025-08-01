import { Card, CardHeader, CardBody } from '@heroui/react';
import { MenuType } from '../../data';

type MenuCardProps = {
  menu: MenuType;
};

export default function MenuCard({ menu }: MenuCardProps) {
  return (
    <Card className="h-52 flex flex-col justify-between py-4 bg-white/80">
      <CardHeader className="pb-0 pt-2 px-4 flex justify-between ">
        <h1 className="font-medium text-lg text-center">{menu.title}</h1>
        <p className="text-[#CF536B] font-semibold text-lg text-center">
          {menu.price}
        </p>
      </CardHeader>
      <CardBody className="py-2">
        <p className="font-normal text-center">{menu.description}</p>
      </CardBody>
    </Card>
  );
}
