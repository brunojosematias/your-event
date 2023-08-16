import { EnvelopeSimple, List, User, WhatsappLogo, X } from "phosphor-react";

import { useState } from "react";

interface INavigation {
  name: string;
  href: string;
}

export function Navbar() {
  const [toggle, setToggle] = useState(false);

  function handleToggleMenu() {
    setToggle((prevToggle) => !prevToggle);
  }

  const navigation: INavigation[] = [
    {
      name: "Início",
      href: "#",
    },

    {
      name: "Sobre",
      href: "#",
    },

    {
      name: "Eventos",
      href: "#",
    },
  ];

  return (
    <nav className="bg-slate-100 relative flex px-6 py-7">
      <div className="w-full flex justify-between items-center">
        <a href="#">
          <h2 className="font-bold text-2xl">
            your<span className="text-indigo-600">Event</span>
          </h2>
        </a>

        <button type="button" onClick={handleToggleMenu}>
          <List size={32} />
        </button>
      </div>

      <div
        className={
          toggle
            ? "bg-indigo-600 px-6 py-7 absolute top-0 left-0 w-screen h-screen text-center flex flex-col gap-24 translate-y-0 transition-transform"
            : "bg-indigo-600 px-6 py-7 absolute top-0 left-0 w-screen h-screen text-center flex flex-col gap-24 -translate-y-full invisible"
        }
      >
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">
            your<span className="text-white">Event</span>
          </h2>

          <button type="button" onClick={handleToggleMenu}>
            <X size={32} color="#fff" />
          </button>
        </div>

        <div className="flex flex-col justify-center items-center">
          <ul className="flex flex-col items-center gap-7 font-bold text-3xl text-white">
            {navigation.map((item) => (
              <li className="after:content-[''] after:block after:w-0 after:h-1 after:bg-indigo-900 hover:after:w-full  after:transition-all transition duration-200">
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>

          <div className="text-white font-medium text-base flex mt-12 items-center gap-8">
            <button type="button" className="flex items-center gap-2">
              <User size={24} />
              Login
            </button>
            <button
              type="button"
              className="bg-indigo-900 px-[0.8125rem] py-[0.875rem] rounded-lg hover:brightness-125 transition ease-in duration-150 active:brightness-75"
            >
              Cadastre-se
            </button>
          </div>

          <div className="text-white mt-20 flex flex-col gap-5">
            <span className="flex items-center gap-[0.8125rem]">
              <EnvelopeSimple size={24} />
              yourevent@gmail.com
            </span>
            <span className="flex items-center gap-[0.625rem]">
              <WhatsappLogo size={24} />
              (xx) x xxxx-xxxx
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
