export type ActionValue = {
  id: number;
  title: string;
  content: string;
};

export type MenuType = {
  id: number;
  title: string;
  price: number;
  description: string;
};

export const actionValues: ActionValue[] = [
  {
    id: 1,
    title: 'Responsabilidad',
    content:
      'Cumplimos con cada compromiso, entregando lo mejor de nosotros. La seguridad alimentaria y el respeto guían nuestro camino.',
  },
  {
    id: 2,
    title: 'Amor',
    content:
      'Cocinamos con el amor que define nuestra identidad. Cada platillo lleva el alma de nuestra tierra oaxaqueña.',
  },
  {
    id: 3,
    title: 'Cocina con cariño',
    content:
      'La cocina es nuestro arte y el cariño, nuestra inspiración. Seleccionamos con cuidado cada ingrediente y técnica.',
  },
  {
    id: 4,
    title: 'Calidad',
    content:
      'Utilizamos los mejores ingredientes para garantizar excelencia. Cuidamos cada detalle, desde la preparación hasta el servicio.',
  },
  {
    id: 5,
    title: 'Limpieza e Innovación',
    content:
      'Mantenemos cada espacio impecable, garantizando higiene total. Innovamos en sabores y técnicas sin perder nuestra esencia.',
  },
];

export const menuValue: MenuType[] = [
  {
    id: 1,
    title: 'Tlayuda Don Tiliche',
    price: 25,
    description:
      'Layered with bean and chicharrón spread, queso fresco, cabbage, quesillo, beef tasajo, pork cecina, and pork chorizo. Con asiento, frijoles, queso fresco, repollo, quesillo, tasajo, cecina y chorizo.',
  },
  {
    id: 2,
    title: 'Tostada de Salchicha Oaxaqueña',
    price: 12,
    description:
      'Prepared with Guacamole, Tomato, Quesillo, Chili Strips and Ejuteca Secret Sauce. Preparada con Guacamole, Tomate, Quesillo, Rajas de Chile y Salsa Secreta Ejuteca.',
  },
  {
    id: 3,
    title: 'Don Chile Relleno',
    price: 24,
    description:
      'Stuffed chile de agua, Oaxacan rustic tomato sauce, rice or beans. (2 per order). Chile de agua relleno, salsa rústica de tomate, arroz o frijoles. (2 por orden)',
  },
  {
    id: 4,
    title: 'Taquitos Fritos Tilichitos',
    price: 14,
    description:
      'Four chicken picadillo taquitos served with guacamole, queso, and lettuce or coloradito mole, cheese, onions, and parsley. Cuatro taquitos de picadillo de pollo servidos con guacamole, queso y lechuga o mole coloradito, queso, cebolla y perejil.',
  },
  {
    id: 5,
    title: 'Don Tamal de Mole',
    price: 11,
    description:
      'Chicken and black mole, steamed in banana leaf. Pollo y mole negro al vapor en hoja de plátano.',
  },
  {
    id: 6,
    title: 'Quesadillas Fritas Tilichonas',
    price: 14,
    description:
      '1 Fried handmade quesadillas with cheese and epazote. Served with guacamole or beans. (2 per order). Quesadillas fritas hechas a mano con queso y epazote. Servidas con guacamole o frijoles. (2 por orden)',
  },
];
