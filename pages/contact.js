import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useTranslation } from "../utils/translateHook";

export default function Contact() {
  const translate = useTranslation().translate;
  return (
    <div className="overflow-hidden">
      <div className=" ">
        <div className="relative ">
          <div className="absolute top-0 left-0 right-0 bg-[url('/assets/contact_bg.webp')] bg-cover bg-top h-screen z-0"></div>
        </div>
        <div className="absolute w-full h-[100px] bottom-inner-shadow bottom-0 "></div>
        <Navbar />
        <div className="min-h-screen">
          <div className=" flex flex-col max-w-4xl  mx-auto h-[70vh] text-white z-10 ">
            <div className=" text-[50px] sm:text-[90px] font-['Bebas_Neue'] text-center font-normal my-auto z-10">
              {translate("contactTitle")}
            </div>
          </div>
          <div className="relative grid gap-x-6 gap-y-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  max-w-7xl mx-auto mt-2 z-20 px-14 sm:px-10">
            <div className="flex flex-col text-2xl  lg:mx-auto ">
              <div className="text-[36px] font-['Bebas_Neue'] mt-[34px]">
                Save-Elephants, z.s.
              </div>
              <div>Lyžbická 1193 - Třinec, 739 61</div>
              <div>IČO: 01325388</div>
            </div>

            <div className="flex flex-col text-2xl lg:mx-auto">
              <div className="text-[36px] font-['Bebas_Neue'] mt-[34px]">
                Arthur Sniegon
              </div>
              <div>
                <a href="mailto:info@save-elephants.org">
                  info@save-elephants.org
                </a>
              </div>
              <div>@saveelephantscz </div>
            </div>

            <div className="flex flex-col text-2xl lg:mx-auto">
              <div className="text-base mb-2 uppercase">
                {translate("production")}
              </div>
              <div className="text-[36px] font-['Bebas_Neue']">Lukáš Hodis</div>

              <div>
                <a href="mailto:lhodis@seznam.cz">lhodis@seznam.cz</a>
              </div>
              <div>@lukashodis </div>
            </div>

            <div className="flex flex-col text-2xl lg:mx-auto ">
              <div className="text-base mb-2 uppercase">
                {translate("mediaPr")}
              </div>
              <div className="text-[36px] font-['Bebas_Neue']">
                Martina Vysloužilová
              </div>
              <div className="flex">
                <a href="mailto:martina.vyslouzilova@upol.cz">
                  martina.vyslouzilova@upol.cz
                </a>
              </div>
              <div>
                <a href="tel:+420 603 359 126">+420 603 359 126</a>
              </div>
            </div>
          </div>
          <div className=" relative z-20 text-center mt-36 underline text-xl">
            <a href="https://drive.google.com/file/d/1L60u25C1T5tJ60Z-0hMN2X_w4tCeZsOK/view?fbclid=IwAR1DSR6zGGMk5G3ldmrA3HV2o1qn5aXAeZBdFSi8YidQQJXccS4gng7wmKQ">
              {translate("pressRelease")}
            </a>
          </div>
        </div>
      </div>
      <div className="h-10"></div>

      <div className="relative h-72 bg-white">
        <div className="absolute h-[180px] w-full min-w-[1467px] top-0 z-0">
          <Image src={"/assets/ripped.webp"} alt="divider" layout="fill" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
