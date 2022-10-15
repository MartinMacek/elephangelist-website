import { useRouter } from "next/router";
import { useTranslation } from "../utils/translateHook";
export default function SupportItem(props) {
  const router = useRouter();
  const translate = useTranslation().translate;

  return (
    <div className="flex flex-col w-full hover:scale-105 duration-300 cursor-pointer opacity-75 hover:opacity-100">
      <a href={props.url}>
        <div
          className={
            "w-full h-[560px] bg-slate-300 font-['Bebas_Neue'] pt-12 hover:underline underline-offset-[6px]  bg-cover bg-center " +
            props.image
          }
        >
          <span className="text-[40px] uppercase">{props.title}</span>
        </div>
      </a>
      <span className="mt-5 text-xl ">{props.desc}</span>
    </div>
  );
}
