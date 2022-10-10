import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Footer from "../components/footer";
import HomePageRow from "../components/homepage-row";
import Navbar from "../components/navbar";
import { useTranslation } from "../utils/translateHook";

export default function Home() {
  const translate = useTranslation().translate;
  return (
    <>
      <Head>
        <title>The Elephangelist - Arthur F. Sniegon</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navbar />

      <div className=" bg-[url('/assets/index_bg.webp')] bg-cover bg-top z-0 ">
        <div className="absolute w-full h-[100px] bottom-inner-shadow bottom-0 "></div>
        <div className="flex flex-col max-w-6xl h-[100vh]  justify-end mx-auto ">
          <div className="flex flex-col">
            <div className="">
              <Image
                src={"/assets/logo-footer.png"}
                alt="logo"
                width={544}
                height={75}
                quality={95}
              />
            </div>
            <div className="text-[29px] mt-4">{translate("indexSubtitle")}</div>

            <div className="flex flex-row gap-x-[10px] items-center text-[21px] font-bold mt-7 mb-48 ">
              <Link href="/">
                <div className="flex flex-row px-6 py-3  bg-[#BCAE7E] rounded-[5px] items-center">
                  <span className="flex mr-[10px]">
                    <Image
                      src="/assets/play.svg"
                      width={30}
                      height={30}
                      alt="play"
                    />
                  </span>
                  <span>Trailer</span>
                </div>
              </Link>
              <Link href="/support">
                <div className="flex flex-row px-6 py-3  bg-[#BCAE7E] rounded-[5px] bg-opacity-70 cursor-pointer">
                  <span className="flex mr-[10px]">
                    <Image
                      src="/assets/elephant_icon.svg"
                      width={30}
                      height={30}
                      alt="elephant"
                    />
                  </span>
                  <span>Support</span>
                </div>
              </Link>
              <div className="flex pl-2 cursor-pointer">
                <Image
                  src="/assets/share_icon.svg"
                  width={95}
                  height={22}
                  alt="share"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-6xl mx-auto">
        <div className="flex flex-row border-b py-7">
          Veřejná premiéra dokumentu
        </div>
        <div className="flex flex-row border-b py-7 ">
          Veřejná premiéra dokumentu
        </div>
      </div>

      <div className="flex flex-col max-w-6xl mx-auto py-20 px-9">
        <div className="h-[642px] w-full bg-slate-400 bg-[url('/assets/index_bg.webp')] bg-cover"></div>
      </div>

      <div className="bg-white">
        <div className="flex flex-col max-w-6xl mx-auto bg-white text-center">
          <div className="text-[80px] text-[#23211E] leading-none font-['Bebas_Neue'] mt-28">
            O arthurovi
          </div>
          <div className="text-[#396729] text-[28px] leading-0 mb-28">
            Save-Elephants and Tsoulou
          </div>
          <div className="flex flex-col gap-y-[90px] mb-80">
            <HomePageRow />
            <HomePageRow reversed />
            <HomePageRow />
            <div className="text-[80px] text-[#23211E] leading-none font-['Bebas_Neue'] mt-28">
              O dokumentu
            </div>
            <HomePageRow reversed />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
