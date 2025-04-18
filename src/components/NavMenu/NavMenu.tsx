import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarBrand,
  Button,
} from '@heroui/react';
import { useState } from 'react';
import { Logo } from './Logo';

export default function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const menuItems = [
    'Home',
    'Historia',
    'Misión',
    'Visión',
    'Voz de la Marca',
    'Valores en Acción',
    'Menú',
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="bg-[#CF536B]"
      shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden"
        />
        <NavbarBrand>
          <Logo />
          <p className="font-semibold text-white text-inherit">Don Tiliche</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex w-full gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem isActive>
            <Link
              className={`text-gray-300 font-medium ${
                activeLink === item
                  ? 'text-white transition-colors font-semibold'
                  : ''
              }`}
              href="#"
              onPress={() => setActiveLink(item)}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="w-full gap-4" justify="end">
        <Button radius="full" className="bg-white text-black font-semibold">
          Contáctenos
        </Button>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`text-gray-400 font-medium ${
                activeLink === item
                  ? 'text-black transition-colors font-semibold'
                  : ''
              }`}
              href="#"
              size="lg"
              onPress={() => setActiveLink(item)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
