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
      </Head>

      <div className="overlay">
        <div className="px-3 min-h-screen flex flex-col justify-around pb-52 md:pb-36">
          <div>
            <h3 className="text-center pt-2 text-2xl">Arthur F. Sniegon</h3>
            <div className="h-[1px] w-8 bg-white mt-9 mb-2 mx-auto"></div>

            <h1 className="relative text-center main-title z-50 text-3xl md:text-7xl">
              THE ELEPHANGELIST
            </h1>

            <p className="relative text-center mt-5 md:text-2xl z-10 font-bold">
              PŘÍBĚH ČECHA, KTERÝ MĚNÍ OSUD SLONŮ V AFRICE
            </p>
          </div>
          <div>
            <div className="flex flex-col md:flex-row justify-center items-center mt-14 md:mt-20">
              <div className="hidden md:flex justify-center w-16 h-16 mr-4 invert">
                <div className="flex mx-auto pl-1">
                  <Image
                    src="/assets/video.png"
                    width={128}
                    height={128}
                    alt="video"
                    quality={100}
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
            <span className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between w-full px-6 pt-4 md:pt-0 text-md md:text-lg items-center font-bold text-center">
              Získej odkaz na film hodinu před premiérou
              <div className="flex justify-end items-center relative py-4">
                {success ? (
                  <div className="rounded-xl h-10 bg-white text-[#CC8800] px-3 items-center flex flex-row">
                    <span className="mr-3">Odkaz je tvůj - už brzy</span>
                    <Image
                      src="/assets/check.svg"
                      width={32}
                      height={32}
                      alt="done"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <form
                      onSubmit={handleSubmit}
                      className="flex justify-end items-center"
                    >
                      <input
                        className={
                          "border-2 rounded-xl  h-10 bg-transparent pl-4 pr-12 placeholder:text-white font-normal " +
                          (loading ? "opacity-50" : "")
                        }
                        placeholder="zadej svůj email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}
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
                    {invalid ? (
                      <span className="text-xs text-red-700 mt-1">
                        Neplatný formát emailu
                      </span>
                    ) : (
                      <div />
                    )}
                  </div>
                )}
              </div>
            </span>
          </div>
          <div className="text-black flex justify-center">
            <span className="max-w-6xl mx-auto flex flex-col md:flex-row w-full px-6 py-3 text-md md:text-lg justify-between items-center">
              <span className="h-10 flex items-center text-center">
                Stav se na veřejné promítání dokumentu
              </span>
              <span className="underline ">
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
