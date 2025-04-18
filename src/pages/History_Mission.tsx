export default function History_Mission() {
  return (
    <div className="h-screen flex flex-col">
      {/* Contenedor superior */}
      <div className="flex w-full h-1/2 bg-white">
        <div className="flex w-full">
          <div className="flex-1 flex items-center justify-center px-8">
            <p className="flex flex-col gap-4">
              <h1 className="text-[#CA9652] text-5xl font-semibold">
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
            </p>
          </div>
          <div className="hidden flex-1 lg:flex items-center justify-center">
            2
          </div>
        </div>
      </div>

      {/* Contenedor inferior */}
      <div className="flex w-full h-1/2">
        <div className="flex w-full bg-[#CA9652]">
          <div className="hidden flex-1 lg:flex items-center justify-center">
            1
          </div>
          <div className="flex-1 flex items-center justify-center px-8">
            <p className="flex flex-col gap-4">
              <h1 className="text-white text-5xl font-semibold">
                Nuestra Misión
              </h1>
              <span>
                Mantener el amor por la tradición y mantener la calidad del
                producto
              </span>
              <h1 className="text-white text-5xl font-semibold">
                Nuestra Visión
              </h1>
              <span>
                Crecer el negoció, expander lo hasta tener más presencia en San
                Diego de inicio.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
