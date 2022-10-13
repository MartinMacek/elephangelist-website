import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "../utils/translateHook";

export default function Footer() {
  const router = useRouter();
  const translate = useTranslation().translate;

  return (
    <div className="flex flex-col w-full bg-white text-[#23211E] font-['Bebas_Neue'] text-center text-[40px] ">
      Generální partner projektu
      <div className="flex mx-auto mt-9">
        <Image
          src="/assets/huawei.svg"
          alt="partner"
          width={498}
          height={109}
        />
      </div>
      <div className="flex flex-col w-full text-center bg-[url('/assets/footer_bg.webp')] bg-cover bg-bottom">
        <span className="mt-20 ">PARTNEŘI PROJEKTU</span>
        <div className="flex flex-row mx-auto mt-11 gap-x-12 ">
          <Image
            src="/assets/huawei.svg"
            alt="partner"
            width={200}
            height={44}
          />
          <Image
            src="/assets/huawei.svg"
            alt="partner"
            width={200}
            height={44}
          />
          <Image
            src="/assets/huawei.svg"
            alt="partner"
            width={200}
            height={44}
          />
        </div>
        <div className="flex mx-auto mt-[60vh] sm:mt-[80vh]">
          <Image
            src={"/assets/logo-footer.png"}
            alt="logo"
            width={544}
            height={75}
            quality={95}
          />
        </div>
        <div className="flex flex-row mx-auto mt-11 text-[25px] text-[#CCDADC] gap-x-20">
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
        <div className="px-20">
          <div className="h-[1px] w-full bg-[#033F47]  mt-24 "></div>
        </div>
        <div className="flex flex-row font-sans text-slate-200 font-thin text-xs opacity-50 mt-7 mb-6 mx-auto gap-x-6">
          <span>
            DESIGNED BY:{" "}
            <a href="https://martinsindelar.myportfolio.com">
              <b>Martin Sindelar</b>
            </a>
          </span>

          <span>
            DEVELOPED BY:{" "}
            <a href="https://blackpoint.dev">
              <b>Black Point</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
