import MenuCard from '../components/Card/MenuCard';
import { menuValue } from '../data';

export default function Menu() {
  return (
    <div
      id="Menú"
      className="relative min-h-screen flex flex-col bg-[url(/Don_Tiliche_bg.png)] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Contenedor superior */}
      <div className="relative flex flex-col lg:flex-row min-h-[100vh]">
        <div className="flex-1 flex flex-col items-center px-8 py-8 mt-4 gap-4">
          <p className="flex flex-col gap-4 text-white">
            <h1 className="text-4xl md:text-5xl font-semibold text-center">
              Nuestro Menú
            </h1>
            <span>
              Descubre los auténticos sabores de Oaxaca a través de nuestros
              platillos tradicionales, preparados con ingredientes frescos y
              técnicas ancestrales.
            </span>
          </p>
          <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols place-items-center">
            {menuValue.map((menu) => (
              <MenuCard key={menu.id} menu={menu} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
