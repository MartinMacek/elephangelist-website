import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ProfileItem from "../components/profile-item";
import { useTranslation } from "../utils/translateHook";

export default function Backstage() {
  const translate = useTranslation().translate;

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className=" bg-[url('/assets/backstage_bg.webp')] bg-cover bg-center z-0 ">
        <div className="absolute w-full h-[100px] bottom-inner-shadow bottom-0 "></div>
        <div className="flex flex-col max-w-5xl min-h-screen mx-auto pt-36  sm:pt-60 text-[#F5F3E1]">
          <div className="text-[55px] sm:text-[90px] font-['Bebas_Neue'] text-center font-normal  ">
            {translate("backstageTitle")}
          </div>
          <div className="text-sm sm:text-[25px] sm:leading-9 text-center mt-1  px-7">
            {translate("backstageDescription")}
          </div>
        </div>
      </div>
      <div className="min-h-80">
        <div className="flex max-w-6xl mx-auto">
          <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-16  w-full -top-20">
            <ProfileItem
              name="Jakub Chlouba"
              position={translate("kubaTitle")}
              img="bg-[url('/team/kuba.webp')]"
              bio={translate("kubaBio")}
            />
            <ProfileItem
              name="Radek Karko"
              position={translate("radekTitle")}
              img="bg-[url('/team/radek.webp')] brightness-75"
              bio={translate("radekBio")}
            />
            <ProfileItem
              name="Lukáš Hodis"
              position={translate("lukasTitle")}
              img="bg-[url('/team/lukas.webp')]"
              bio={translate("kubaBio")}
            />
            <ProfileItem
              name="David Alexa"
              position={translate("davidTitle")}
              img=" bg-[url('/team/david.webp')]"
              bio={translate("kubaBio")}
            />
            <ProfileItem
              name="Martina Vysloužilová"
              position={translate("martinaTitle")}
              img="bg-[url('/team/martina.webp')] brightness-90"
              bio={translate("martinaBio")}
            />
            <ProfileItem
              name="Martin Šindelář"
              position={translate("martinTitle")}
              img="bg-[url('/team/martin.webp')] brightness-90"
              bio={translate("martinBio")}
            />
          </div>
        </div>
      </div>
      <div className="relative h-72 bg-white">
        <div className="absolute h-[180px] w-full min-w-[1467px] top-0 z-0">
          <Image src={"/assets/ripped.webp"} alt="divider" layout="fill" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
