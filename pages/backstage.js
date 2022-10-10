import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ProfileItem from "../components/profile-item";
import { useTranslation } from "../utils/translateHook";

export default function Backstage() {
  const translate = useTranslation().translate;

  return (
    <div>
      <Navbar />
      <div className=" bg-[url('/assets/backstage_bg.webp')] bg-cover bg-center z-0 ">
        <div className="absolute w-full h-[100px] bottom-inner-shadow bottom-0 "></div>
        <div className="flex flex-col max-w-5xl min-h-screen mx-auto pt-60 text-[#F5F3E1]">
          <div className="text-[90px] font-['Bebas_Neue'] text-center font-normal  ">
            {translate("backstage")}
          </div>
          <div className="text-[25px] text-center mt-1 ">
            Jak jsme se dali dohrmoady... proč jsme se rozhodli dokument
            zpracovat...
          </div>
        </div>
      </div>
      <div className="min-h-80">
        <div className="flex max-w-6xl mx-auto">
          <div class="grid grid-cols-4 gap-x-8 gap-y-16  w-full">
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
      <Footer />
    </div>
  );
}
