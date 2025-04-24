export default function Menu() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Contenedor superior */}
      <div
        id="Menú"
        className="flex flex-col lg:flex-row min-h-[100vh] bg-white"
      >
        <div className="flex-1 flex justify-center px-8 py-8 mt-4">
          <div className="max-w-screen-md">
            <p className="flex flex-col gap-4">
              <h1 className="text-[#CA9652] text-4xl md:text-5xl font-semibold text-center">
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
