import { useRouter } from "next/router";
import { useTranslation } from "../utils/translateHook";

export default function ProfileItem(props) {
  const router = useRouter();
  const translate = useTranslation().translate;

  return (
    <div className="flex flex-col text-center items-center mx-auto text-[#F5F3E1]">
      <div className=" w-44 h-44 bg-blue-300 rounded-full"></div>
      <div className="mt-6 text-[34px] font-['Bebas_Neue']">{props.name}</div>
      <div className="text-xl font-black">{props.position}</div>
      <div className="text-xl mt-[11px]">{props.bio}</div>
    </div>
  );
}
