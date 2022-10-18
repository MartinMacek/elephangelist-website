import Image from "next/image";
import { useEffect, useState } from "react";
import CommentItem from "../components/comment-item";

export default function Status() {
  const [jsonData, setDonations] = useState([]);

  async function fetchJSON() {
    const data = await fetch("https://www.donio.cz/widget/7321.json").then(
      (res) => res.json()
    );

    //const response = await fetch("https://www.donio.cz/widget/7321.json");

    //console.log(data);
    setDonations(data);
  }

  useEffect(() => {
    fetchJSON();
    setInterval(fetchJSON, 100000);
  }, []);

  return (
    <div className="w-screen h-screen relative overflow-hidden bg-white text-black">
      <div className="absolute z-0 -top-[1000px] rotate-90 w-max">
        <Image
          src="/assets/circles.png"
          width={1085}
          height={2799}
          alt="circles"
        />
      </div>
      <h3 className=" text-5xl relative uppercase font-['Bebas_Neue'] text-center pt-9 mx-auto leading-snug z-10">
        podpořte Arthura <br />v boji za ochranu zvířat
      </h3>
      <div className="flex relative w-full h-full mt-20 z-10">
        <div className="flex flex-col w-1/2 h-full pl-16 ">
          <div className=" text-2xl pl-4  font-bold">Celkově vybráno</div>

          {jsonData && jsonData.currentAmount && (
            <div className="text-orange-700 pl-4  text-5xl font-bold mt-4">
              {jsonData.currentAmount} Kč
            </div>
          )}
          <div className="flex flex-col mt-6 h-fit overflow-y-scroll">
            {jsonData &&
              jsonData.donations &&
              jsonData.donations.map((x) => (
                <CommentItem
                  key={x.id}
                  name={x.donorName}
                  comment={x.donorComment}
                  amount={x.amount}
                />
              ))}
          </div>
        </div>
        <div className="flex w-1/2">
          <div className="flex flex-col text-center pl-4 pr-20 w-full h-full ">
            <div className=" flex bg-white w-full  rounded-3xl shadow-lg p-5  ">
              <Image
                src="/assets/qrcode.webp"
                alt="qr"
                width={1000}
                height={1000}
              />
            </div>
            <div className="mt-5 text-2xl ">donio.cz/elephangelist</div>
          </div>
        </div>
      </div>
    </div>
  );
}
