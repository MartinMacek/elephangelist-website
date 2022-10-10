import { useRouter } from "next/router";
import { useTranslation } from "../utils/translateHook";

export default function ProfileItem() {
  const router = useRouter();
  const translate = useTranslation().translate;

  return (
    <div className="flex flex-col text-center items-center mx-auto">
      <div className=" w-44 h-44 bg-blue-300 rounded-full"></div>
      <div>name</div>
      <div>description</div>
    </div>
  );
}
