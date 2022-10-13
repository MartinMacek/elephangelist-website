import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className=" bg-[url('/assets/contact_bg.webp')] bg-cover bg-center z-0 ">
        <div className="absolute w-full h-[100px] bottom-inner-shadow bottom-0 "></div>
        <div className="min-h-screen">
          <div className=" flex flex-col max-w-4xl  mx-auto h-[70vh] text-[#23211E] z-10 ">
            <div className="text-[90px] font-['Bebas_Neue'] text-center font-normal my-auto">
              ZAJÍMÁ VÁS VÍCE NEBO MÁTE ZÁJEM O SPOLUPRÁCI?
            </div>
          </div>
          <div className="flex flex-row max-w-6xl mx-auto divide-x mt-2">
            <div className="w-1/3">
              <div className="flex flex-col text-2xl w-fit mx-auto">
                <div className="text-[36px] font-['Bebas_Neue']">
                  Save-Elephants, z.s.
                </div>
                <div>Adresa</div>
                <div>IČO</div>
                <div>Odkaz na transparentní účet</div>
              </div>
            </div>
            <div className="w-1/3">
              <div className="flex flex-col text-2xl w-fit mx-auto">
                <div className="text-[36px] font-['Bebas_Neue']">
                  Arthur Sniegon
                </div>
                <div>Email@email.cz</div>
                <div>+420 777 777 777</div>
                <div>@instagram </div>
              </div>
            </div>
            <div className="w-1/3">
              <div className="flex flex-col text-2xl w-fit mx-auto">
                <div className="text-[36px] font-['Bebas_Neue']">
                  Lukáš Hodis
                </div>
                <div>Email@email.cz</div>
                <div>+420 777 777 777</div>
                <div>@instagram </div>
              </div>
            </div>
            <div className="w-1/3">
              <div className="flex flex-col text-2xl w-fit mx-auto">
                <div className="text-[36px] font-['Bebas_Neue']">
                  Martina Vysloužilová
                </div>
                <div>Email@email.cz</div>
                <div>+420 777 777 777</div>
                <div>@instagram </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-60 "></div>
      <Footer />
    </div>
  );
}
