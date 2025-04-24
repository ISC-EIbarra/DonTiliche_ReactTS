import CardValues from '../components/Card/CardValues';
import { actionValues } from '../data/index';

export default function Brand_Values() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Contenedor superior */}
      <div className="flex flex-col lg:flex-row min-h-[50vh] bg-white">
        <div
          id="Voz de la Marca"
          className="flex-1 flex items-center justify-center px-8 py-8"
        >
          <div className="max-w-screen-md">
            <p className="flex flex-col gap-4">
              <h1 className="text-[#CA9652] text-4xl md:text-5xl font-semibold">
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
        </div>
        <div className="hidden lg:flex flex-1 items-center justify-center">
          2
        </div>
      </div>

      {/* Contenedor inferior */}
      <div
        id="Valores en Acción"
        className="flex flex-col lg:flex-row min-h-[50vh] bg-[#CA9652]"
      >
        <div className="flex w-full items-center justify-center px-8 py-8 bg-[#CF536B]">
          <p className="flex flex-col gap-4">
            <h1 className="text-white text-4xl md:text-5xl font-semibold text-center">
              Valores en Acción
            </h1>
            <div className="grid gap-4 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
              {actionValues.map((actionValue) => (
                <CardValues actionValue={actionValue} />
              ))}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
