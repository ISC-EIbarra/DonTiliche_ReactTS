import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@heroui/react';
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
        <NavbarBrand className="flex items-center gap-2">
          <Logo />
          <p className="font-semibold text-white text-inherit">Don Tiliche</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem isActive key={index}>
            <Link
              className={`text-gray-300 font-medium ${
                activeLink === item
                  ? 'text-white transition-colors font-semibold'
                  : ''
              }`}
              href={`#${item}`}
              onPress={() => {
                const section = document.getElementById(item);
                section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setActiveLink(item);
              }}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="gap-4" justify="end">
        <Button
          radius="full"
          className="bg-white text-[#CF536B] font-semibold px-6 py-2 hover:bg-gray-100 transition-colors"
          onPress={() => {
            const section = document.getElementById('Footer');
            section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        >
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
              size="lg"
              href={`#${item}`}
              onPress={() => {
                const section = document.getElementById(item);
                section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setActiveLink(item);
                setIsMenuOpen(false);
              }}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
