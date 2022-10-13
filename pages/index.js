import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import EventItem from "../components/event-item";

import Footer from "../components/footer";
import HomePageRow from "../components/homepage-row";
import Navbar from "../components/navbar";
import { useTranslation } from "../utils/translateHook";

export default function Home() {
  const translate = useTranslation().translate;

  const events = [
    {
      name: "Veřejné promítání filmu",
      place: "Kino Dlabačov, Praha",
      date: "20.října 2022",
      time: "18:00",
    },
    {
      name: "Veřejné promítání filmu",
      place: "Pevnost poznání, Olomouc",
      date: "21.října 2022",
      time: "18:00",
    },
  ];
  return (
    <div className="overflow-hidden">
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
        {events.map((item) => (
          <EventItem
            key={item.name}
            name={item.name}
            place={item.place}
            date={item.date}
            time={item.time}
          />
        ))}
      </div>

      <div className="relative bg-white">
        <div className="absolute h-[180px] w-full min-w-[1467px] top-0 z-0">
          <Image src={"/assets/ripped.webp"} alt="divider" layout="fill" />
        </div>
        <div className="absolute -top-80  right-0 left-0 flex flex-col w-full max-w-6xl mx-auto py-20 px-9 z-30">
          <div className="h-[642px] w-full bg-slate-400 bg-[url('/assets/home_main.webp')] bg-cover"></div>
        </div>
        <div className="flex flex-col max-w-6xl mx-auto mt-80 pt-96 bg-white text-center">
          <div className="text-[80px] text-[#23211E] leading-none font-['Bebas_Neue'] mt-28 uppercase">
            {translate("aboutArthur")}
          </div>
          <div className="text-[#396729] text-[28px] leading-0 mb-28">
            {translate("aboutArthurSubtitle")}
          </div>
          <div className="flex flex-col gap-y-[90px] mb-80">
            <HomePageRow
              text={translate("homeText1")}
              img="bg-[url('/assets/home_img1.webp')]"
            />
            <HomePageRow
              reversed
              text={translate("homeText2")}
              img="bg-[url('/assets/home_img2.webp')]"
            />
            <HomePageRow
              text={translate("homeText3")}
              img="bg-[url('/assets/home_img3.webp')]"
            />
            <HomePageRow
              reversed
              text={translate("homeText4")}
              img="bg-[url('/assets/home_img4.webp')]"
            />
            <HomePageRow
              text={translate("homeText5")}
              img="bg-[url('/assets/home_img5.webp')]"
            />
            <HomePageRow reversed text={translate("homeText6")} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
