import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "../utils/translateHook";

export default function Navbar() {
  const router = useRouter();
  const translate = useTranslation().translate;
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div
        className={
          "w-screen h-screen bg-[#23211E]  z-50 " +
          (menuOpen ? "fixed" : "hidden")
        }
      >
        <div className="flex flex-col h-screen overflow-scroll ">
          <div className="flex flex-row w-full">
            <div className="flex m-auto mt-[48px] ml-5 ">
              <Link href="/">
                <Image
                  src={"/assets/Logo.png"}
                  alt="logo"
                  width={212}
                  height={28}
                  quality={95}
                  className="cursor-pointer"
                />
              </Link>
            </div>
            <div
              className=" right-0 cursor-pointer place-self-end px-6 py-8 mt-5 mr-2"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src={"/assets/close.svg"}
                alt="close"
                height={20}
                width={20}
              />
            </div>
          </div>
          <div className="flex flex-col text-right my-auto px-12 text-[#F5F3E1] font-['Bebas_Neue'] text-[45px] xs:text-[50px] font-bold gap-5 xs:gap-y-10">
            <div className="text-xl">
              <Link href={router.route} locale="cs">
                <span
                  className={
                    "cursor-pointer " +
                    (useRouter().locale == "cs" ? "opacity-100" : "opacity-50")
                  }
                >
                  CZ
                </span>
              </Link>{" "}
              /{" "}
              <Link href={router.route} locale="en">
                <span
                  className={
                    "cursor-pointer " +
                    (useRouter().locale == "en" ? "opacity-100" : "opacity-50")
                  }
                >
                  EN
                </span>
              </Link>
            </div>

            <div
              className={
                " underline-offset-4 " + (router.asPath == "/" && "underline")
              }
            >
              <Link href="/">{translate("home")}</Link>
            </div>
            <div
              className={
                " underline-offset-4 " +
                (router.asPath == "/support" && "underline")
              }
            >
              <Link href="/support">{translate("support")}</Link>
            </div>
            <div
              className={
                " underline-offset-4 " +
                (router.asPath == "/backstage" && "underline")
              }
            >
              <Link href="/backstage">{translate("backstage")}</Link>
            </div>
            <div
              className={
                " underline-offset-4 " +
                (router.asPath == "/contact" && "underline")
              }
            >
              <Link href="/contact">{translate("contact")}</Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          " absolute top-0 left-0 right-0 flex flex-row mx-5 md:mx-[70px] mt-[42px] sm:border-b border-[#F5F3E1] border-opacity-20 text-[#F5F3E1] font-bold text-[25px] font-['Bebas_Neue'] "
        }
      >
        <div className=" pb-7 flex flex-row justify-between w-full items-center">
          <div className="flex h-7">
            <Link href="/">
              <Image
                src={"/assets/Logo.png"}
                alt="logo"
                width={212}
                height={28}
                quality={95}
                className="cursor-pointer"
              />
            </Link>
          </div>

          <div className="hidden lg:flex flex-row gap-x-20  ">
            <div
              className={
                " underline-offset-4 " + (router.asPath == "/" && "underline")
              }
            >
              <Link href="/">{translate("home")}</Link>
            </div>
            <div
              className={
                " underline-offset-4 " +
                (router.asPath == "/support" && "underline")
              }
            >
              <Link href="/support">{translate("support")}</Link>
            </div>
            <div
              className={
                " underline-offset-4 " +
                (router.asPath == "/backstage" && "underline")
              }
            >
              <Link href="/backstage">{translate("backstage")}</Link>
            </div>
            <div
              className={
                " underline-offset-4 " +
                (router.asPath == "/contact" && "underline")
              }
            >
              <Link href="/contact">{translate("contact")}</Link>
            </div>
          </div>
          <div
            className="flex lg:hidden w-[40px] h-[40px] p-2"
            onClick={() => setMenuOpen(true)}
          >
            <Image
              src="/assets/hamburger.svg"
              width={32}
              height={8}
              alt="menu"
            />
          </div>

          <div className="hidden lg:block">
            <Link href={router.route} locale="cs">
              <span
                className={
                  "cursor-pointer " +
                  (useRouter().locale == "cs" ? "opacity-100" : "opacity-50")
                }
              >
                CZ
              </span>
            </Link>{" "}
            /{" "}
            <Link href={router.route} locale="en">
              <span
                className={
                  "cursor-pointer " +
                  (useRouter().locale == "en" ? "opacity-100" : "opacity-50")
                }
              >
                EN
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
