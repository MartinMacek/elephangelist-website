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
              position="Režisér, DOP"
              img="bg-[url('/team/kuba.webp')]"
              bio="Filmový režisér se zkušenostmi s mezinárodními projekty. Specializuje se na dokumentární tvorbu a zachycení jedinečných příběhů, které mohou diváky motivovat k akci. Kromě režie si vzal v projektu na starost i střih, color-grading a sound design."
            />
            <ProfileItem
              name="Radek Karko"
              position="Kameraman a fotograf"
              img="bg-[url('/team/radek.webp')]"
              bio="Přes tvorbu pro velké české i mezinárodní značky se postupně dostal až k fotografování a filmování divokých zvířat. Jako kameraman a wildlife fotograf stojí za doprovodnými záběry, snímky zvířat a samotného zákulisí natáčení v Kongu."
            />
            <ProfileItem
              name="Lukáš Hodis"
              position="Producent"
              img="bg-[url('/team/lukas.webp')]"
              bio="Produkci se věnuje od roku 2019. Loni stál za úspěšným dokumentem “Nitěnky“, který upozornil na téma předsudků ve společnosti. V rámci projektu má na starosti fundraising, propagaci a organizaci týmu."
            />
            <ProfileItem
              name="David Alexa"
              position="Produkční a konzultant"
              img=" bg-[url('/team/david.webp')]"
              bio="Procestoval všechny kontinenty světa, kde viděl globální ekologické problémy na vlastní kůži. Nyní je konzultace udržitelnosti firem jeho povoláním. Na projektu se podílí svou odborností v rámci obsahu, produkce a komunikace."
            />
            <ProfileItem
              name="Martina Vysloužilová"
              position="Mediální zástupkyně"
              img="bg-[url('/team/martina.webp')]"
              bio="V oblasti komunikace s médii se pohybuje přes 10 let. Dříve byla redaktorkou České televize. Zkušenosti s PR má jak z redakční činnosti, tak i v zastupování jednotlivých projektů, například filmový festival AFO. V rámci dokumentu má na starost mediální komunikaci a přípravu výstupů."
            />
            <ProfileItem
              name="Martin Šindelář"
              position="Grafický designér"
              bio="Grafik se zaměřením na webdesign a digitální produkty. Zaujmout lidi skrze jeho vizuální tvorbu se snaží už od střední školy, kde ho “pohltily” digitální nástroje. Nyní spolupracuje z pozice freelancera s několika firmami a agenturami. V rámci projektu měl na starost webdesign."
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
