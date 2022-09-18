import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Countdown from "react-countdown";

export default function Home() {
  const [email, setEmail] = useState("");

  const [success, setSuccess] = useState(false);

  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  async function handleSubmit(event) {
    event.preventDefault();
    if (!email) {
      return;
    }
    if (email.match(validRegex)) {
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
          }
        })
        .catch((err) => console.log(err));
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
      </Head>
      <div className="absolute opacity-25 flex justify-center w-full top-24 z-0">
        <Image src="/assets/elephant.png" alt="logo" width={280} height={280} />
      </div>
      <div className="overlay">
        <div className="px-3">
          <div>
            <h3 className="text-center pt-12 text-2xl">Arthur F. Sniegon</h3>
            <div className="h-[1px] w-8 bg-white mt-9 mb-2 mx-auto"></div>

            <h1 className="relative text-center main-title z-50 text-5xl md:text-8xl">
              THE ELEPHANGELIST
            </h1>

            <p className="relative text-center mt-5 text-2xl z-10 font-bold">
              PŘÍBĚH ČECHA, KTERÝ MĚNÍ OSUD SLONŮ V AFRICE
            </p>
          </div>
          <div>
            <div className="flex flex-col md:flex-row justify-center items-center mt-16 md:mt-32">
              <div className="flex justify-center border-[3px] rounded-full w-14 h-14 m-4 md:m-8">
                <div className="flex mx-auto pl-1">
                  <Image
                    src="/assets/play.svg"
                    width={22}
                    height={22}
                    alt="play"
                  />
                </div>
              </div>

              <span className="text-center text-2xl md:text-3xl font-bold">
                <b>ONLINE PREMIÉRA - 16.října 2022 - 19:00</b>
              </span>
            </div>
            <div className="text-center text-2xl font-medium">
              <Countdown date={new Date(2022, 9, 16, 19)} renderer={renderer} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-y-6 justify-center filter max-w-5xl mx-auto mt-8 mb-12 md:mb-8">
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

        <div className="md:absolute bottom-0 right-0 left-0 bg-white">
          <div className="bg-[#CC8800] flex justify-center">
            <span className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between w-full px-6 py-3 text-2xl items-center font-bold text-center">
              Získej odkaz na film hodinu před premiérou
              <div className="flex justify-end items-center relative mt-3 md:mt-0">
                {success ? (
                  <div className="rounded-xl h-12 bg-white text-[#CC8800] px-6 items-center flex flex-row">
                    <span className="mr-3">Je to tvoje - už brzy</span>
                    <Image
                      src="/assets/check.svg"
                      width={32}
                      height={32}
                      alt="done"
                    />
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex justify-end items-center"
                  >
                    <input
                      className="border-2 rounded-xl h-12 bg-transparent pl-4 pr-12 placeholder:text-white font-normal"
                      placeholder="zadej svůj email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />

                    <button
                      className="absolute w-10 mr-2 flex items-center cursor-pointer"
                      onClick={handleSubmit}
                      type="submit"
                    >
                      <Image
                        src="/assets/arrow-right.svg"
                        width={32}
                        height={32}
                        alt="submit"
                      />
                    </button>
                  </form>
                )}
              </div>
            </span>
          </div>
          <div className="text-black flex justify-center">
            <span className="max-w-6xl mx-auto flex flex-col md:flex-row w-full px-6 py-3 text-2xl justify-between items-center">
              <span className="h-12 flex items-center text-center">
                Stav se na veřejné promítání dokumentu
              </span>
              <span className="underline mt-3 md:mt-0">
                <Link href="/">PRAHA</Link>
                <span className="ml-6">
                  <Link href="/">OLOMOUC</Link>
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
