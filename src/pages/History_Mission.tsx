export default function History_Mission() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Contenedor superior */}
      <div
        id="Historia"
        className="flex flex-col lg:flex-row min-h-[50vh] bg-white"
      >
        <div className="flex-1 flex items-center justify-center px-8 py-8">
          <div className="max-w-screen-md">
            <div className="flex flex-col gap-4">
              <h1 className="text-[#CA9652] text-4xl md:text-5xl font-semibold">
                Nuestra Historia
              </h1>
              <span>
                Don Tiliche es un food truck nacido con la misión de llevar los
                auténticos sabores de Oaxaca a San Diego, California. Su
                fundador, originario de Oaxaca, pone el corazón en cada
                platillo, impulsado por el amor a su tierra y el deseo de
                compartir sus raíces con el mundo.
              </span>
              <span>
                Más que un negocio sobre ruedas, Don Tiliche es un homenaje a la
                cultura oaxaqueña. Con el auge del turismo gastronómico, su
                objetivo es enaltecer tradiciones como la Guelaguetza y resaltar
                la riqueza de su cocina, desde las tlayudas hasta las fritangas.
              </span>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-1 items-center justify-center">
          2
        </div>
      </div>

      {/* Contenedor inferior */}
      <div
        id="Misión"
        className="flex flex-col lg:flex-row min-h-[50vh] bg-[#CA9652]"
      >
        <div
          id="Visión"
          className="hidden lg:flex flex-1 items-center justify-center"
        >
          1
        </div>
        <div className="flex-1 flex items-center justify-center px-8 py-8">
          <div className="max-w-screen-md">
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-4xl md:text-5xl font-semibold">
                Nuestra Misión
              </h1>
              <span>
                Mantener el amor por la tradición y mantener la calidad del
                producto.
              </span>
              <h1 className="text-white text-4xl md:text-5xl font-semibold">
                Nuestra Visión
              </h1>
              <span>
                Crecer el negocio, expandirlo hasta tener más presencia en San
                Diego.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
