import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="flex flex-row mx-[70px] mt-[42px] border-b text-[#F5F3E1] font-bold text-[25px] font-['Bebas Neue']">
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
              " underline-offset-4 " + (router.asPath == "/home" && "underline")
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

        <div>CZ / EN</div>
      </div>
    </div>
  );
}
