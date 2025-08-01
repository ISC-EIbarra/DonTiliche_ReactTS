export default function MenuS() {
  return (
    <div
      id="Menú"
      className="relative min-h-screen flex flex-col bg-[url(/Don_Tiliche_bg.png)] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Contenedor superior */}
      <div className="relative flex flex-col lg:flex-row min-h-[100vh]">
        <div className="flex-1 flex flex-col justify-center px-8 py-8 mt-4">
          <p className="flex flex-col gap-4 text-white">
            <h1 className="text-4xl md:text-5xl font-semibold text-center">
              Nuestro Menú
            </h1>
            <span className="text-center">
              Descubre los auténticos sabores de Oaxaca a través de nuestros
              platillos tradicionales, preparados con ingredientes frescos y
              técnicas ancestrales.
            </span>
          </p>
          <div className="flex flex-col md:flex-row sm:flex-gap gap-4 p-4 justify-center items-center">
            <img src="/Menu1.svg" className="md:w-1/2" />
            <img src="/Menu2.svg" className="md:w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
}
