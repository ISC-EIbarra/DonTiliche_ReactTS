export default function Menu() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[url(/Don_Tiliche_bg.png)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Contenedor superior */}
      <div
        id="Menú"
        className="relative flex flex-col lg:flex-row min-h-[100vh]"
      >
        <div className="flex-1 flex justify-center px-8 py-8 mt-4">
          <div className="max-w-screen-md">
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
          </div>
        </div>
      </div>
    </div>
  );
}
