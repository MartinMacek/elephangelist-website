import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import SupportItem from "../components/support-item";
import YoutubeEmbed from "../components/video-embed";
import { useTranslation } from "../utils/translateHook";

export default function Support() {
  const translate = useTranslation().translate;
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Support - Arthur F. Sniegon</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="relative ">
        <div className="absolute top-0 left-0 right-0 bg-[url('/assets/support_bg.webp')] bg-cover bg-top h-[754px] z-0"></div>
      </div>
      <Navbar />
      <div className="flex flex-col max-w-7xl mx-auto pt-64 text-[#F5F3E1] min-h-screen px-7">
        <div className="text-[82px] sm:text-[90px] font-['Bebas_Neue'] text-center font-normal z-10 ">
          {translate("supportTitle")}
        </div>
        <div className="text-sm sm:text-[25px] sm:leading-9 text-center mt-1 z-10">
          {translate("supportDescription")}
        </div>
        <div className="z-10 flex flex-col md:flex-row gap-12 text-center mt-48 mb-44">
          <SupportItem
            title={translate("supportTile1Title")}
            desc={translate("supportTile1Description")}
            image="bg-[url('/assets/support1.webp')]"
            url="https://www.donio.cz/elephangelist"
            hightlighted
          />
          <SupportItem
            title={translate("supportTile2Title")}
            desc={translate("supportTile2Description")}
            image="bg-[url('/assets/support2.webp')] brightness-75"
            url="mailto:info@save-elephants.org?subject=Zájem o dobrovolnictví"
          />

          {/* <SupportItem
            title={translate("supportTile3Title")}
            desc={translate("supportTile3Description")}
            image="bg-[url('/assets/support3.webp')]"
          /> */}
        </div>
      </div>

      <div className="invisible flex flex-col max-w-7xl mx-auto  text-[#F5F3E1] pb-10 px-7">
        <div className="text-[55px] sm:text-[90px] font-['Bebas_Neue'] text-center font-normal  ">
          {translate("whoSupported")}
        </div>
        <div className=" text-sm sm:text-[25px] sm:leading-9 text-center mt-1 z-10">
          {translate("whoSupportedContent")}
        </div>
      </div>
      <div className="relative bg-white pb-3 sm:pb-44 ">
        <div className="absolute h-[180px] w-full min-w-[1467px] top-0 z-0">
          <Image src={"/assets/ripped.webp"} alt="divider" layout="fill" />
        </div>
        <div className="invisible relative flex flex-col max-w-6xl mx-auto pb-20  px-7 w-full z-10">
          <YoutubeEmbed embedId="dQw4w9WgXcQ" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
