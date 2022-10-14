export default function HomePageRow(props) {
  return (
    <div
      className={
        "flex text-[#23211E] text-lg  text-left gap-x-12 flex-col  " +
        (props.reversed ? "sm:flex-row-reverse" : "sm:flex-row")
      }
    >
      <div className={"sm:w-1/2 h-[417px] bg-cover " + props.img}></div>
      <div className="sm:w-1/2 px-8 my-auto">{props.text}</div>
    </div>
  );
}
