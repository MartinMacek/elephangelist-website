import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col max-w-4xl  mx-auto mt-40 text-[#23211E]">
        <div className="text-[90px] font-['Bebas_Neue'] text-center font-normal bg-slate-500 ">
          ZAJÍMÁ VÁS VÍCE NEBO MÁTE ZÁJEM O SPOLUPRÁCI?
        </div>
      </div>
      <div className="flex flex-row max-w-6xl mx-auto divide-x">
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
            <div className="text-[36px] font-['Bebas_Neue']">Lukáš Hodis</div>
            <div>Email@email.cz</div>
            <div>+420 777 777 777</div>
            <div>@instagram </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
