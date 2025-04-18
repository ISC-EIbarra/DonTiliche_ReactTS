export default function Brand_Values() {
  return (
    <div className="h-screen flex flex-col">
      {/* Contenedor superior */}
      <div className="flex w-full h-1/2 bg-white">
        <div className="flex w-full">
          <div className="flex-1 flex items-center justify-center px-8">
            <p className="flex flex-col gap-4">
              <h1 className="text-[#CA9652] text-5xl font-semibold">
                Voz de la Marca
              </h1>
              <span>
                Don Tiliche es pasión, tradición y orgullo oaxaqueño sobre
                ruedas. Más que un food truck, es un viaje a través de sabores
                milenarios, donde cada tlayuda, cada fritanga y cada ingrediente
                cuenta una historia de raíces profundas y amor por la tierra.
              </span>
              <span>
                Con el corazón en Oaxaca y la mirada en San Diego, nuestra
                misión es compartir la esencia de nuestra cultura, llevando
                autenticidad y calidez en cada bocado. Porque aquí, la comida no
                solo alimenta, también conecta, emociona y deja huella.
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
        <div className="flex w-full bg-[#CF536B]">
          <div className="flex-1 flex items-center justify-center px-8">
            <h1 className="text-5xl text-white font-semibold">
              Valores en Acción
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
