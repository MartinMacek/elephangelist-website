import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useTranslation } from "../utils/translateHook";

export default function Contact() {
  const translate = useTranslation().translate;
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className=" bg-[url('/assets/contact_bg.webp')] bg-cover bg-center z-0 ">
        <div className="absolute w-full h-[100px] bottom-inner-shadow bottom-0 "></div>
        <div className="min-h-screen">
          <div className=" flex flex-col max-w-4xl  mx-auto h-[70vh] text-[#23211E] z-10 ">
            <div className="text-[90px] font-['Bebas_Neue'] text-center font-normal my-auto">
              {translate("contactTitle")}
            </div>
          </div>
          <div className="relative flex flex-row max-w-6xl mx-auto divide-x mt-2 z-20">
            <div className="w-1/4">
              <div className="flex flex-col text-2xl w-fit mx-auto px-6">
                <div className="text-[36px] font-['Bebas_Neue'] mt-8">
                  Save-Elephants, z.s.
                </div>
                <div>Lyžbická 1193 - Třinec, 739 61</div>
                <div>IČO: 01325388</div>
                <div>Transparentní účet: 4200409386/0100</div>
              </div>
            </div>
            <div className="w-1/4">
              <div className="flex flex-col text-2xl w-fit mx-auto px-4">
                <div className="text-[36px] font-['Bebas_Neue'] mt-8">
                  Arthur Sniegon
                </div>
                <div>info@save-elephants.org</div>
                <div>@saveelephantscz </div>
              </div>
            </div>
            <div className="w-1/4">
              <div className="flex flex-col text-2xl w-fit mx-auto px-4">
                <div className="text-base mb-2 ">PRODUKCE FILMU</div>
                <div className="text-[36px] font-['Bebas_Neue']">
                  Lukáš Hodis
                </div>
                <div>Email@email.cz</div>
                <div>lhodis@seznam.cz</div>
                <div>@lukashodis </div>
              </div>
            </div>
            <div className="w-1/4">
              <div className="flex flex-col text-2xl w-fit mx-auto px-9">
                <div className="text-base mb-2 ">MÉDIA & PR</div>
                <div className="text-[36px] font-['Bebas_Neue']">
                  Martina Vysloužilová
                </div>
                <div>martina.vyslouzilova@upol.cz</div>
                <div>+420 603 359 126</div>
              </div>
            </div>
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
