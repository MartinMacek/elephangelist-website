import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col max-w-4xl  mx-auto mt-40 text-[#23211E]">
        <div className="text-[90px] font-['Bebas_Neue'] text-center font-normal  ">
          ZAJÍMÁ VÁS VÍCE NEBO MÁTE ZÁJEM O SPOLUPRÁCI?
        </div>
      </div>
      <Footer />
    </div>
  );
}
