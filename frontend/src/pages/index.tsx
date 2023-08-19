import * as Dialog from "@radix-ui/react-dialog";

import { Carousel } from "./Home/components/Carousel";
import { Navbar } from "./Home/components/Navbar";

import slide1 from "../assets/slide-1.png";
import person from "../assets/person.png";

import personWithAGuitar from ".././assets/person-holding-a-guitar-on-stage.png";
import { ArrowUp, EnvelopeSimple, WhatsappLogo } from "phosphor-react";
import { Register } from "./Home/components/Register";

export function Home() {
  return (
    <div
      id="start"
      className="bg-slate-100 text-center overflow-hidden scroll-smooth "
    >
      <Dialog.Root>
        <div className="fixed top-0 left-0 w-full z-10">
          <Navbar />
        </div>

        <Register />
      </Dialog.Root>

      <header className="pt-20 overflow-hidden">
        <Carousel />
      </header>

      <section id="about" className="pt-24 px-6">
        <header>
          <h4 className="text-indigo-900 font-bold tracking-[8px]">sobre</h4>
          <h2 className="text-2xl font-bold">Divulgue seu evento</h2>
        </header>
        <div className="flex flex-col justify-center items-center mt-5">
          <p className="text-base font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            incidunt natus voluptas beatae magni, molestias modi vel corrupti,
            debitis inventore sit nobis porro aspernatur fuga placeat cum
            mollitia maiores ipsam
          </p>

          <img src={personWithAGuitar} alt="" className="mt-7" />
        </div>
      </section>

      <section id="events" className="bg-indigo-400 px-6 mt-20 pb-9">
        <header className="pt-24">
          <h4 className="text-indigo-900 font-bold tracking-[8px]">Eventos</h4>
          <h2 className="text-2xl font-bold">Eventos abertos</h2>
        </header>

        <div className="flex flex-col justify-center items-center gap-11 mt-8">
          <div className="bg-indigo-600 rounded-tl-[40px] pt w-60 h-80 relative shadow-xl">
            <h2 className="text-white text-sm font-medium py-2">
              Nome do Evento
            </h2>

            <img src={slide1} alt="" className="object-cover" />

            <div className="bg-white px-2 py-3 absolute bottom-0 left-0 shadow-md">
              <div className="flex items-center gap-2">
                <div className="bg-slate-600 rounded-full w-8 h-8">
                  <img src={person} alt="" className="rounded-full" />
                </div>
                <span className="text-xs font-medium">Nome do responsável</span>
              </div>

              <div className="text-xs mt-2 flex flex-col gap-1 text-left">
                <span>
                  <span className="font-medium">Local:</span> local do evento
                </span>
                <span>
                  <span className="font-medium">Data:</span> 00/00/0000
                </span>
                <span>
                  <span className="font-medium">Contato:</span> (xx) x xxxx-xxxx
                </span>
                <span className="flex flex-col">
                  <span className="font-medium">Descrição:</span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  incidunt natus voluptas beatae magni, molestias modi.
                </span>
              </div>
            </div>
          </div>

          <div className="bg-indigo-600 rounded-tl-[40px] pt w-60 h-80 relative shadow-xl">
            <h2 className="text-white text-sm font-medium py-2">
              Nome do Evento
            </h2>

            <img src={slide1} alt="" className="object-cover" />

            <div className="bg-white px-2 py-3 absolute bottom-0 left-0 shadow-md">
              <div className="flex items-center gap-2">
                <div className="bg-slate-600 rounded-full w-8 h-8">
                  <img src={person} alt="" className="rounded-full" />
                </div>
                <span className="text-xs font-medium">Nome do responsável</span>
              </div>

              <div className="text-xs mt-2 flex flex-col gap-1 text-left">
                <span>
                  <span className="font-medium">Local:</span> local do evento
                </span>
                <span>
                  <span className="font-medium">Data:</span> 00/00/0000
                </span>
                <span>
                  <span className="font-medium">Contato:</span> (xx) x xxxx-xxxx
                </span>
                <span className="flex flex-col">
                  <span className="font-medium">Descrição:</span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  incidunt natus voluptas beatae magni, molestias modi.
                </span>
              </div>
            </div>
          </div>

          <div className="bg-indigo-600 rounded-tl-[40px] pt w-60 h-80 relative shadow-xl">
            <h2 className="text-white text-sm font-medium py-2">
              Nome do Evento
            </h2>

            <img src={slide1} alt="" className="object-cover" />

            <div className="bg-white px-2 py-3 absolute bottom-0 left-0 shadow-md">
              <div className="flex items-center gap-2">
                <div className="bg-slate-600 rounded-full w-8 h-8">
                  <img src={person} alt="" className="rounded-full" />
                </div>
                <span className="text-xs font-medium">Nome do responsável</span>
              </div>

              <div className="text-xs mt-2 flex flex-col gap-1 text-left">
                <span>
                  <span className="font-medium">Local:</span> local do evento
                </span>
                <span>
                  <span className="font-medium">Data:</span> 00/00/0000
                </span>
                <span>
                  <span className="font-medium">Contato:</span> (xx) x xxxx-xxxx
                </span>
                <span className="flex flex-col">
                  <span className="font-medium">Descrição:</span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  incidunt natus voluptas beatae magni, molestias modi.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-indigo-600 px-6 pt-11 pb-12">
        <div className="text-left">
          <h2 className="font-bold text-2xl">
            your
            <span className="text-white transition-colors duration-200">
              Event
            </span>
          </h2>

          <div className="text-white mt-7 flex flex-col gap-7">
            <span className="flex items-center gap-3">
              <EnvelopeSimple size={32} />
              yourevent@gmail.com
            </span>
            <span className="flex items-center gap-3">
              <WhatsappLogo size={32} />
              (xx) x xxxx-xxxx
            </span>
          </div>
        </div>

        <div className="text-right mt-16">
          <a type="button" href="#start" className="bg-indigo-400 p-3">
            <ArrowUp size={32} color="#fff" />
          </a>
        </div>
      </footer>
    </div>
  );
}
