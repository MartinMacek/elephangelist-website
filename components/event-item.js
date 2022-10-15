import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "../utils/translateHook";

export default function EventItem(props) {
  const translate = useTranslation().translate;
  return (
    <div className="flex flex-col md:flex-row justify-between gap-y-7 border-b border-[#B2B5A3] border-opacity-20 py-7 text-[16px] items-center">
      <span className="font-bold ">{props.name}</span>
      <div className="flex flex-row flex-grow w-full md:w-auto justify-between md:justify-evenly">
        <span>{props.place}</span>
        <span>{props.date}</span>
        <span>{props.time}</span>
      </div>
      <span className="flex flex-row gap-x-5">
        <a href={props.url}>
          <div className="flex flex-row px-4 py-2  bg-[#BCAE7E] rounded-[5px] items-center cursor-pointer">
            <span className="flex mr-[10px]">
              <Image
                src="/assets/ticket.svg"
                width={28}
                height={28}
                alt="ticket"
              />
            </span>
            <span className="font-bold text-sm sm:text-[17px] w-full">
              {translate("moreInfo")}
            </span>
          </div>
        </a>
        <Link href="/">
          <div className="flex flex-row px-2 md:px-10  py-2 border border-[#BCAE7E] rounded-[5px] items-center cursor-pointer">
            <span className="flex"></span>
            <span className=" text-sm sm:text-[17px] w-full">
              {translate("addToCalendar")}
            </span>
          </div>
        </Link>
      </span>
    </div>
  );
}
