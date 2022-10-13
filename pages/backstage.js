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
        <div className="flex flex-col max-w-5xl min-h-screen mx-auto pt-60 text-[#F5F3E1]">
          <div className="text-[90px] font-['Bebas_Neue'] text-center font-normal  ">
            {translate("backstageTitle")}
          </div>
          <div className="text-[25px] text-center mt-1 ">
            {translate("backstageDescription")}
          </div>
        </div>
      </div>
      <div className="min-h-80">
        <div className="flex max-w-6xl mx-auto">
          <div class="relative grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-16  w-full -top-40">
            <ProfileItem />
            <ProfileItem />
            <ProfileItem />
            <ProfileItem />
            <ProfileItem />
            <ProfileItem />
            <ProfileItem />
            <ProfileItem />
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
