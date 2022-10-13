import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "../utils/translateHook";

export default function Navbar() {
  const router = useRouter();
  const translate = useTranslation().translate;
  return (
    <div
      className={
        " absolute top-0 left-0 right-0 flex flex-row mx-[70px] mt-[42px] border-b text-[#F5F3E1] font-bold text-[25px] font-['Bebas_Neue'] " +
        (router.asPath == "/contact" && " invert")
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

        <div className="flex flex-row gap-x-20  ">
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

        <div>
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
  );
}
