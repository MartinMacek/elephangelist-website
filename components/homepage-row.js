export default function HomePageRow(props) {
  return (
    <div
      className={
        "flex text-[#23211E] text-base text-left gap-x-12  " +
        (props.reversed ? "flex-row-reverse" : "flex-row")
      }
    >
      <div className={" w-1/2 h-[417px] bg-cover " + props.img}></div>
      <div className="w-1/2 px-8 my-auto">{props.text}</div>
    </div>
  );
}
