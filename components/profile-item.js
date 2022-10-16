export default function ProfileItem(props) {
  return (
    <div className="flex flex-col text-center items-center mx-auto text-[#F5F3E1]">
      <div
        className={"w-44 h-44 rounded-full bg-cover bg-center " + props.img}
      ></div>
      <div className="mt-6 text-[34px] font-['Bebas_Neue']">{props.name}</div>
      <div className="text-xl font-black">{props.position}</div>
      <div className="text-sm sm:text-xl mt-[11px] px-4">{props.bio}</div>
    </div>
  );
}
