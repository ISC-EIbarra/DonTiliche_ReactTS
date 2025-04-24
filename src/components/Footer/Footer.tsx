import { Divider, Link } from '@heroui/react';

export default function Footer() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Contenedor superior */}
      <div id="Footer" className="flex flex-1 bg-[#CA9652]">
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 px-8 py-8">
          <div className="flex flex-col justify-center p-4 text-white gap-4">
            <img
              src="/Logo_Don_Tiliche.png"
              alt="Logo"
              height="256"
              width="256"
            />
            <p>
              Auténtica comida oaxaqueña con el mejor sabor y tradición.
              Disfruta de una experiencia gastronómica única con el corazón de
              Oaxaca.
            </p>
            <div className="flex flex-row items-start gap-4">
              <Link isExternal href="https://github.com/heroui-inc/heroui">
                <i className="bi bi-facebook text-white text-xl"></i>
              </Link>
              <Link isExternal href="https://www.instagram.com/dontiliche/">
                <i className="bi bi-instagram text-white text-xl"></i>
              </Link>
              <Link isExternal href="https://www.tiktok.com/@don.tiliche">
                <i className="bi bi-tiktok text-white text-xl"></i>
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center p-4 text-white">
            <p>Enlaces Rápidos</p>
            <Divider />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            neque deleniti vel non nam adipisci quidem ducimus cupiditate? Magni
            magnam, cumque quam voluptate fuga qui aliquam. Doloribus neque
            totam vel?
          </div>
          <div className="flex flex-col justify-center p-4 text-white">
            <p>Contactos</p>
            <Divider />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            nemo officia ut esse repellat, illo deserunt omnis necessitatibus.
            Delectus soluta autem, expedita inventore consectetur temporibus
            nobis similique ullam? Aut, corrupti!
          </div>
          <div className="flex flex-col justify-center p-4 text-white">
            <p>Horario</p>
            <Divider />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            inventore minima nam soluta non ratione officiis beatae, hic
            obcaecati quae alias dolores assumenda corrupti possimus mollitia
            quisquam minus excepturi maxime.
          </div>
        </div>
      </div>
      <div className="flex min-h-16 bg-[#CF536B] items-center justify-center"></div>
      <div className="flex min-h-4 bg-[#CA9652] items-center justify-center text-white p-4">
        <p>© 2025 Don Tiliche. Todos los derechos reservados.</p>
      </div>
    </div>
  );
}
