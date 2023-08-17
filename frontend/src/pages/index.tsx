import { Carousel } from "./Home/components/Carousel";
import { Navbar } from "./Home/components/Navbar";

import personWithAGuitar from ".././assets/person-holding-a-guitar-on-stage.png";

export function Home() {
  return (
    <div className="bg-slate-100 text-center overflow-hidden">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <header className="pt-20">
        <Carousel />
      </header>

      <section className="pt-20 px-6 py-7">
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
    </div>
  );
}
