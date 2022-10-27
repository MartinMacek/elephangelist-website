import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "../utils/translateHook";

export default function Footer() {
  const router = useRouter();
  const translate = useTranslation().translate;

  return (
    <div className="flex flex-col w-full bg-white text-[#23211E] font-['Bebas_Neue'] text-center text-[40px] ">
      {translate("generalPartner")}
      <div className="flex mx-auto mt-9 px-6 sm:px-2">
        <a
          href="https://www.huawei.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/partners/huawei.webp"
            alt="partner"
            width={498}
            height={109}
            placeholder="blur"
            blurDataURL="/partners/huawei.webp"
          />
        </a>
      </div>
      <span className="mt-20 uppercase">{translate("mainPartners")}</span>
      <div className="flex flex-wrap justify-center mx-auto mt-11 gap-x-4 sm:gap-x-12  max-w-5xl px-4">
        <a href="http://zemekvet.cz/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/partners/zemekvet.svg"
            alt="partner"
            width={154}
            height={154}
            placeholder="blur"
            blurDataURL="/partners/zemekvet.svg"
          />
        </a>
        <div className="my-auto pt-8">
          <a
            href="https://www.galeriesantovka.cz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/partners/santovka.webp"
              alt="partner"
              height={60}
              width={154}
              placeholder="blur"
              blurDataURL="/partners/santovka.webp"
            />
          </a>
        </div>
        <div className="my-auto">
          <a
            href="https://www.viagood.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/partners/viagood.svg"
              alt="partner"
              width={154}
              height={80}
              placeholder="blur"
              blurDataURL="/partners/viagood.svg"
            />
          </a>
        </div>

        <div className="my-auto">
          <a
            href="https://www.dav-ova.cz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/partners/dav.webp"
              alt="partner"
              width={154}
              height={35}
              placeholder="blur"
              blurDataURL="/partners/dav.webp"
            />
          </a>
        </div>

        <div className="my-auto">
          <a
            href="https://www.nadaceivanadejmala.cz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/partners/nadace.webp"
              alt="partner"
              width={154}
              height={43}
              placeholder="blur"
              blurDataURL="/partners/nadace.webp"
            />
          </a>
        </div>
        <div className="p-8">
          <a
            href="https://www.filmcrew.cz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/partners/film-crew.webp"
              alt="partner"
              width={86}
              height={86}
              placeholder="blur"
              blurDataURL="/partners/film-crew.webp"
            />
          </a>
        </div>
        <div className="my-auto">
          <a
            href="https://www.gumotex.cz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/partners/gumotex.webp"
              alt="partner"
              width={154}
              height={58.52}
              placeholder="blur"
              blurDataURL="/partners/gumotex.webp"
            />
          </a>
        </div>
        <div className="my-auto">
          <a
            href="https://avp.upol.cz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/partners/avp.webp"
              alt="partner"
              width={154}
              height={73}
              placeholder="blur"
              blurDataURL="/partners/avp.webp"
            />
          </a>
        </div>
        <div className="my-auto">
          <a
            href="https://www.cmtf.upol.cz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/partners/cmtf.webp"
              alt="partner"
              width={154}
              height={70.5}
              placeholder="blur"
              blurDataURL="/partners/cmtf.webp"
            />
          </a>
        </div>
        <div className="my-auto">
          <a
            href="https://www.pevnostpoznani.cz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/partners/pevnost.webp"
              alt="partner"
              width={154}
              height={76.5}
              placeholder="blur"
              blurDataURL="/partners/pevnost.webp"
            />
          </a>
        </div>
        <a
          href="https://www.donio.cz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/partners/donio.webp"
            alt="partner"
            width={154}
            height={154}
            placeholder="blur"
            blurDataURL="/partners/donio.webp"
          />
        </a>
        <div className="my-auto">
          <a
            href="https://www.spolecenskaodpovednost.cz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/partners/aso.webp"
              alt="partner"
              width={154}
              height={109}
              placeholder="blur"
              blurDataURL="/partners/aso.webp"
            />
          </a>
        </div>

        <div className="my-auto">
          <a
            href="https://cz.westfield.com/chodov"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/partners/wesfield.webp"
              alt="partner"
              width={154}
              height={92.5}
              placeholder="blur"
              blurDataURL="/partners/wesfield.webp"
            />
          </a>
        </div>
        <div className="my-auto">
          <a
            href="https://www.fotopast.cz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/partners/fotopast.webp"
              alt="partner"
              width={154}
              height={34.8}
              placeholder="blur"
              blurDataURL="/partners/fotopast.webp"
            />
          </a>
        </div>
        <a
          href="https://blackpoint.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/partners/blackpoint.svg"
            alt="partner"
            width={154}
            height={154}
            placeholder="blur"
            blurDataURL="/partners/blackpoint.svg"
          />
        </a>
        <a
          href="https://www.olomouc.eu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/partners/olomouc.webp"
            alt="partner"
            width={154}
            height={84}
            placeholder="blur"
            blurDataURL="/partners/olomouc.webp"
          />
        </a>
      </div>
      <span className="mt-20 uppercase">{translate("mediaPartners")}</span>
      <div className="flex flex-row mx-auto mt-11 gap-x-4 sm:gap-x-12 px-4">
        <div className="my-auto">
          <a
            href="https://www.ekonews.cz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/partners/ekonews.webp"
              alt="partner"
              width={180}
              height={62}
              placeholder="blur"
              blurDataURL="/partners/ekonews.webp"
            />
          </a>
        </div>
        <div className="my-auto">
          <a href="https://cc.cz/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/partners/cc.svg"
              alt="partner"
              width={200}
              height={44}
              placeholder="blur"
              blurDataURL="/partners/cc.svg"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col w-full text-center bg-[url('/assets/footer_bg.webp')] bg-cover bg-center">
        <span className="mt-20 uppercase">{translate("withSupport")}</span>
        <div className="flex flex-row mx-auto mt-11 gap-x-4 sm:gap-x-12 px-4">
          <div className="my-auto">
            <a
              href="https://www.ochranazvirat.cz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/partners/nnoz.webp"
                alt="partner"
                width={154}
                height={54}
                placeholder="blur"
                blurDataURL="/partners/nnoz.webp"
              />
            </a>
          </div>
          <div className="my-auto">
            <a
              href="https://www.kloktex.cz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/partners/kloktex.webp"
                alt="partner"
                width={154}
                height={41.6}
                placeholder="blur"
                blurDataURL="/partners/kloktex.webp"
              />
            </a>
          </div>
        </div>
        <div className="flex mx-auto mt-[60vh] sm:mt-[80vh] px-8">
          <Image
            src={"/assets/logo-footer.png"}
            alt="logo"
            width={544}
            height={75}
            quality={95}
          />
        </div>
        <div className="hidden sm:flex flex-row mx-auto mt-11 text-[25px] text-[#CCDADC] gap-x-20">
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
        <div className="invisible sm:visible px-20">
          <div className="h-[1px] w-full bg-[#F5F3E1] opacity-20 mt-24 "></div>
        </div>
        <div className="flex flex-col sm:flex-row font-sans text-slate-200 font-thin text-xs opacity-50 mt-7 mb-6 mx-auto gap-6">
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
