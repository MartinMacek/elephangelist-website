export default function CommentItem(props) {
  return (
    <div className="flex flex-col mt-10 px-4 ">
      <div className="flex flex-row justify-between">
        <div className="font-bold text-xl truncate text-ellipsis">
          {props.name}
        </div>
        <span className="text-orange-700 font-bold text-xl pl-3 whitespace-nowrap">
          {props.amount} Kč
        </span>
      </div>
      {props.comment && (
        <div className="shadow-lg p-4 text-xl mt-2 rounded-xl bg-white overflow-hidden ">
          <span className="line-clamp-5 ">{props.comment}</span>
        </div>
      )}
    </div>
  );
}
