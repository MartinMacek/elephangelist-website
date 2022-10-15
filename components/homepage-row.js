export default function HomePageRow(props) {
  return (
    <div
      className={
        "flex text-[#23211E] text-lg  text-left gap-y-16 gap-x-12 flex-col  " +
        (props.reversed ? "sm:flex-row-reverse" : "sm:flex-row")
      }
    >
      <div
        className={
          "sm:w-1/2 h-[417px] bg-cover " +
          props.img +
          (props.reversed ? " ml-9 sm:ml-0" : " mr-9 sm:mr-0")
        }
      ></div>
      <div className="sm:w-1/2 px-8 my-auto">{props.text}</div>
    </div>
  );
}
