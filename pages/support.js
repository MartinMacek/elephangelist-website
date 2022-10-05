import Image from "next/image";
import Navbar from "../components/navbar";

export default function Support() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col max-w-5xl mx-auto mt-40 text-[#F5F3E1]">
        <Image
          src="/assets/support-text.svg"
          width={287}
          height={123}
          alt="support"
        />
        <div className="text-[25px] text-center mt-1 ">
          Přidej se k Arthurovi a zapoj se do změny. Jednou z nejlepších cest je
          .... <br />
          Daruj jakoukoli částku skre <b>DONIO...</b> její výtěžek bude použit
          na aktivity v Tsoulou...
        </div>
      </div>
    </div>
  );
}
