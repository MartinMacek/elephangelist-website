import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Countdown from "react-countdown";

export default function Home() {
  const [email, setEmail] = useState("");

  const [success, setSuccess] = useState(false);

  const [loading, setLoading] = useState(false);

  const [invalid, setInvalid] = useState(false);

  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  async function handleSubmit(event) {
    setInvalid(false);
    event.preventDefault();
    if (!email) {
      return;
    }
    if (email.match(validRegex)) {
      setLoading(true);
      await fetch(`/api/create?email=${email}`, {
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => response)
        .then((response) => {
          if (response.ok) {
            setSuccess(true);
            setEmail("");
          } else {
            //console.log(response);
            if (response.status == 400) {
              alert("Email již existuje!");
            }
          }
        })
        .catch((err) => console.log(err));
      setLoading(false);
    } else {
      setInvalid(true);
    }
  }

  const Completionist = () => <span>Odvysíláno!</span>;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <span suppressHydrationWarning={true}>
          zbývá {days}d {hours}h {minutes}m {seconds}s
        </span>
      );
    }
  };

  return (
    <>
      <Head>
        <title>The Elephangelist - Arthur F. Sniegon</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="overlay">
        <div className="px-3 min-h-screen flex flex-col justify-around pb-52 md:pb-36">
          <div className="min-h-[35vh] xs:min-h-[50vh] md:min-h-0 ">
            <h3 className="text-center pt-2 md:text-lg mt-8">
              Arthur F. Sniegon
            </h3>
            <div className="h-[1px] w-8 bg-white mt-4 mb-3 mx-auto"></div>

            <h1 className="relative text-center main-title z-50 text-4xl md:text-7xl font-['Bebas_Neue']">
              THE ELEPHANGELIST
            </h1>

            <p className="relative text-center mt-5 md:text-xl z-10 font-bold">
              PŘÍBĚH ČECHA, KTERÝ MĚNÍ OSUDY ZVÍŘAT V AFRICE
            </p>
          </div>
          <div>
            <div className="flex flex-col md:flex-row justify-center items-center mt-14 md:mt-20">
              <div className="hidden md:flex justify-center w-16 h-16 mr-4">
                <div className="flex mx-auto pl-1">
                  <Image
                    src="/assets/video.svg"
                    width={48}
                    height={48}
                    alt="video"
                    quality={100}
                  />
                </div>
              </div>

              <span className="text-center text-xl md:text-2xl font-bold">
                <b>ONLINE PREMIÉRA - 16.října 2022 - 19:00</b>
              </span>
            </div>
            <div className="text-center md:text-lg font-medium">
              <Countdown date={new Date(2022, 9, 16, 19)} renderer={renderer} />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-6 justify-center filter max-w-5xl mx-auto mt-8 mb-12 md:mb-8">
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/huawei.svg"
                  width={150}
                  height={50}
                  alt="huawei"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/zeme-kvet.png"
                  width={150}
                  height={85}
                  alt="zeměkvět"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/nadace.png"
                  width={150}
                  height={62}
                  alt="nadace Ivana Dejmala"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/film-crew.png"
                  width={80}
                  height={80}
                  alt="film crew"
                />
              </div>

              <div className="flex items-center justify-center">
                <Image
                  src="/assets/gumotex.png"
                  width={150}
                  height={57}
                  alt="gumotex"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 right-0 left-0 bg-white">
          <div className="bg-[#CC8800] flex justify-center">
            <span className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between w-full px-4 pt-4 md:pt-0 text-md md:text-xl items-center font-bold text-center">
              Podpořte Arthura v boji za ochranu zvířat
              <a href="https://www.donio.cz/elephangelist">
                <div className="border-2 px-10 py-2 my-2 rounded-lg">
                  Přejít na sbírku
                </div>
              </a>
            </span>
          </div>
          <div className="text-black flex justify-center">
            <span className="max-w-6xl mx-auto flex flex-col md:flex-row w-full px-4 py-3 text-md md:text-xl justify-between items-center">
              <span className="h-10 flex items-center text-center">
                Stav se na veřejné promítání dokumentu
              </span>
              <span className="underline ">
                <a
                  href="https://fb.me/e/2EuWI9dXY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PRAHA
                </a>
                <span className="ml-6">
                  <a
                    href="https://fb.me/e/2Y4rS5vJr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OLOMOUC
                  </a>
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
