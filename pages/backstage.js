import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Backstage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col max-w-5xl mx-auto mt-40 text-[#F5F3E1]">
        <div className="text-[90px] font-['Bebas_Neue'] text-center font-normal  ">
          BACKSTAGE
        </div>
        <div className="text-[25px] text-center mt-1 ">
          Jak jsme se dali dohrmoady... proč jsme se rozhodli dokument
          zpracovat...
        </div>
      </div>
      <Footer />
    </div>
  );
}
