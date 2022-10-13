import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import SupportItem from "../components/support-item";

export default function Support() {
  return (
    <div>
      <Head>
        <title>Support - Arthur F. Sniegon</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="relative ">
        <div className="absolute top-0 left-0 right-0 bg-[url('/assets/support_bg.webp')] bg-cover bg-top h-[754px] z-0"></div>
      </div>
      <Navbar />
      <div className="flex flex-col max-w-6xl mx-auto pt-64 text-[#F5F3E1] min-h-screen">
        <Image
          src="/assets/support-text.svg"
          width={287}
          height={123}
          alt="support"
        />
        <div className="text-[25px] text-center mt-1 z-10">
          Přidej se k Arthurovi a zapoj se do změny. Jednou z nejlepších cest
          je....
          <br />
          Daruj jakoukoli částku skre <b>DONIO...</b> její výtěžek bude použit
          na aktivity v Tsoulou...
        </div>
        <div className="z-10 flex flex-row gap-x-12 text-center mt-48 mb-44">
          <SupportItem
            title="dobrovolnictví"
            desc="item 1"
            image="bg-[url('/assets/support1.webp')]"
          />
          <SupportItem
            title="přispět do sbírky"
            desc="item 2"
            image="bg-[url('/assets/support2.webp')]"
          />
          <SupportItem
            title="zjistit více o tématu"
            desc="item 3"
            image="bg-[url('/assets/support3.webp')]"
          />
        </div>
      </div>

      <div className="flex flex-col max-w-5xl mx-auto  text-[#F5F3E1]">
        <div className="text-[90px] font-['Bebas_Neue'] text-center font-normal  ">
          KDO UŽ ARTHURA PODPOŘIL?
        </div>
        <div className="text-[25px] text-center mt-1 z-10">
          Přidej se k Arthurovi a zapoj se do změny. Jednou z nejlepších cest
          je....
          <br />
          Daruj jakoukoli částku skre <b>DONIO...</b> její výtěžek bude použit
          na aktivity v Tsoulou...
        </div>
      </div>
      <div className="bg-white pb-80">
        <div className="flex flex-col max-w-6xl mx-auto py-20 px-9 w-full ">
          <div className="h-[642px] w-full bg-slate-400 bg-[url('/assets/index_bg.webp')] bg-cover"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
