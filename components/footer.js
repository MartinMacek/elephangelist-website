import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full bg-white text-[#23211E] font-['Bebas_Neue'] text-center text-[40px]">
      Generální partner projektu
      <div className="flex mx-auto mt-9">
        <Image
          src="/assets/huawei.svg"
          alt="partner"
          width={498}
          height={109}
        />
      </div>
      <span className="mt-20 ">PARTNEŘI PROJEKTU</span>
      <div className="flex flex-row mx-auto mt-11 ">
        <Image src="/assets/huawei.svg" alt="partner" width={200} height={44} />
        <Image src="/assets/huawei.svg" alt="partner" width={200} height={44} />
        <Image src="/assets/huawei.svg" alt="partner" width={200} height={44} />
      </div>
      <div className="flex mx-auto mt-32">
        <Image
          src={"/assets/logo-footer.png"}
          alt="logo"
          width={544}
          height={90}
          quality={95}
        />
      </div>
      <div className="flex flex-row mx-auto mt-11 text-[25px] text-[#CCDADC] gap-x-20">
        <div
          className={
            " underline-offset-4 " + (router.asPath == "/" && "underline")
          }
        >
          <Link href="/">HOME</Link>
        </div>
        <div
          className={
            " underline-offset-4 " +
            (router.asPath == "/support" && "underline")
          }
        >
          <Link href="/support">SUPPORT</Link>
        </div>
        <div
          className={
            " underline-offset-4 " +
            (router.asPath == "/backstage" && "underline")
          }
        >
          <Link href="/backstage">BACKSTAGE</Link>
        </div>
        <div
          className={
            " underline-offset-4 " +
            (router.asPath == "/contact" && "underline")
          }
        >
          <Link href="/contact">CONTACT</Link>
        </div>
      </div>
      <div className="px-20">
        <div className="h-[1px] w-full bg-[#033F47]  mt-24 "></div>
      </div>
      <div className="font-sans font-thin text-xs opacity-50 mt-7 mb-6">
        DESIGNED BY:
      </div>
    </div>
  );
}
