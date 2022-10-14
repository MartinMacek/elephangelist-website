import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "../utils/translateHook";

export default function EventItem(props) {
  const translate = useTranslation().translate;
  return (
    <div className="flex flex-row justify-between border-b border-[#B2B5A3] border-opacity-20 py-7 text-[16px] items-center">
      <span className="font-bold">{props.name}</span>
      <span>{props.place}</span>
      <span>{props.date}</span>
      <span>{props.time}</span>
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
            <span className="font-bold text-[17px]">
              {translate("moreInfo")}
            </span>
          </div>
        </a>
        <Link href="/">
          <div className="flex flex-row px-10  py-2 border border-[#BCAE7E] rounded-[5px] items-center cursor-pointer">
            <span className="flex mr-[10px]"></span>
            <span className="text-[17px]">{translate("addToCalendar")}</span>
          </div>
        </Link>
      </span>
    </div>
  );
}
