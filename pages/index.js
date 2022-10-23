import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import EventItem from "../components/event-item";

import Footer from "../components/footer";
import HomePageRow from "../components/homepage-row";
import Navbar from "../components/navbar";
import YoutubeEmbed from "../components/video-embed";
import { useTranslation } from "../utils/translateHook";

export default function Home() {
  const translate = useTranslation().translate;

  const [showShare, setShowShare] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const events = [
    {
      name: "Veřejné promítání filmu",
      place: "Kino Dlabačov, Praha",
      date: "20.října 2022",
      time: "18:00",
      url: "https://fb.me/e/2EuWI9dXY",
    },
    {
      name: "Veřejné promítání filmu",
      place: "Pevnost poznání, Olomouc",
      date: "21.října 2022",
      time: "18:00",
      url: "https://fb.me/e/2Y4rS5vJr",
    },
  ];
  return (
    <div className="overflow-hidden">
      <div
        className={
          "w-screen h-screen bg-[#23211E] bg-opacity-90 z-50 " +
          (videoOpen ? "fixed" : "hidden")
        }
        onClick={() => setVideoOpen(false)}
      >
        <div className="flex flex-col h-screen ">
          <div className="flex flex-row w-full justify-end">
            <div
              className=" right-0 cursor-pointer place-self-end px-6 py-8 mt-5 mr-2"
              onClick={() => setVideoOpen(false)}
            >
              <Image
                src={"/assets/close.svg"}
                alt="close"
                height={20}
                width={20}
              />
            </div>
          </div>
          <div className="relative flex flex-col max-w-7xl mx-auto pb-20  px-7 w-full z-10">
            <YoutubeEmbed embedId="hrvKWnFH5Ko" />
          </div>
        </div>
      </div>

      <Head>
        <title>The Elephangelist - Arthur F. Sniegon</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navbar />

      <div className=" bg-[url('/assets/index_bg.webp')] bg-cover bg-top z-0 ">
        <div className="absolute w-full h-[100px] bottom-inner-shadow bottom-0 "></div>
        <div className="flex flex-col h-[100vh]  justify-end mx-auto px-7 sm:px-[70px] ">
          <div className="flex flex-col">
            <div className="">
              <Image
                src={"/assets/home_logo.svg"}
                alt="logo"
                width={544}
                height={90}
                placeholder="blur"
                blurDataURL="/assets/home_logo.svg"
              />
            </div>
            <div className=" text-sm sm:text-[29px] mt-4 text-center sm:text-left ">
              {translate("indexSubtitle")}
            </div>

            <div className="flex flex-row gap-x-[10px] items-center text-[21px] font-bold mt-7 mb-48 ">
              <div
                className="flex flex-row px-6 py-3  bg-[#BCAE7E] rounded-[5px] items-center cursor-pointer"
                onClick={() => setVideoOpen(true)}
              >
                <span className="flex mr-[10px]">
                  <Image
                    src="/assets/play.svg"
                    width={30}
                    height={30}
                    alt="play"
                  />
                </span>
                <span>{translate("play")}</span>
              </div>

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
                  <span>{translate("support")}</span>
                </div>
              </Link>
              {!showShare ? (
                <div
                  className="hidden sm:flex pl-2 cursor-pointer"
                  onClick={() => setShowShare(true)}
                >
                  <Image
                    src="/assets/share_icon.svg"
                    width={95}
                    height={22}
                    alt="share"
                  />
                </div>
              ) : (
                <div className="flex gap-2">
                  <FacebookShareButton
                    title="The Elephangelist - Dokument"
                    url="https://www.elephangelist.cz/"
                  >
                    <FacebookIcon size={44} round={true} />
                  </FacebookShareButton>
                  <TwitterShareButton
                    title="The Elephangelist - Dokument"
                    url="https://www.elephangelist.cz/"
                  >
                    <TwitterIcon size={44} round={true} />
                  </TwitterShareButton>
                  <LinkedinShareButton
                    title="The Elephangelist - Dokument"
                    url="https://www.elephangelist.cz/"
                  >
                    <LinkedinIcon size={44} round />{" "}
                  </LinkedinShareButton>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-7xl mx-auto px-6">
        {events.map((item) => (
          <EventItem
            key={item.name}
            name={item.name}
            place={item.place}
            date={item.date}
            time={item.time}
            url={item.url}
          />
        ))}
      </div>

      <div className="relative bg-white">
        <div className="absolute h-[180px] w-full min-w-[1467px] top-0 z-10">
          <Image
            src={"/assets/ripped.webp"}
            alt="divider"
            layout="fill"
            unselectable
          />
        </div>
        <div className="absolute z-0  w-max">
          <Image
            src="/assets/circles.webp"
            width={1085}
            height={2799}
            alt="circles"
          />
        </div>
        <div className="absolute -top-40 sm:-top-80  right-0 left-0 flex flex-col w-full max-w-6xl mx-auto py-20 px-9 z-30">
          <div className="h-96  sm:h-[642px] w-full bg-slate-400 bg-[url('/assets/home_main.webp')] bg-cover"></div>
        </div>
        <div className="flex flex-col relative max-w-6xl mx-auto mt-80 pt-96  text-center z-10">
          <div className=" text-[50px] sm:text-[80px] text-[#23211E] leading-none font-['Bebas_Neue'] mt-28 uppercase">
            {translate("aboutArthur")}
          </div>
          <div className="text-[#396729] text-[16px] sm:text-[28px] leading-0 mb-28">
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
            <HomePageRow
              reversed
              text={translate("homeText6")}
              img="bg-[url('/assets/home_img6.webp')]"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
