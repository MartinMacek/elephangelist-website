export default function HomePageRow(props) {
  return (
    <div
      className={
        "flex text-black " + (props.reversed ? "flex-row-reverse" : "flex-row")
      }
    >
      <div className="bg-slate-300 w-1/2 h-[417px]">image</div>
      <div className="w-1/2">text</div>
    </div>
  );
}
