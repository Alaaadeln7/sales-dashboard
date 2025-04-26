export default function CardInfoProject({ title, icon, number, status }) {
  let borderColor = "";
  let bgColor = "";
  let btnColor = "";
  let color = "";
  if (status === "new") {
    borderColor = "border-blue-500";
    bgColor = "bg-blue-100";
    btnColor = "bg-blue-500";
    color = "text-blue-500";
  } else if (status === "progress") {
    borderColor = "border-amber-500";
    bgColor = "bg-amber-100";
    btnColor = "bg-amber-500";
    color = "text-amber-500";
  } else if (status === "completed") {
    borderColor = "border-green-500";
    bgColor = "bg-green-100";
    btnColor = "bg-green-500";
    color = "text-green-500";
  } else if (status === "pending") {
    borderColor = "border-cyan-500";
    bgColor = "bg-cyan-100";
    btnColor = "bg-cyan-500";
    color = "text-cyan-500";
  }

  return (
    <article
      className={`w-3/12 rounded-2xl border p-5 ${borderColor} ${bgColor}`}
    >
      <div className="flex justify-between items-center">
        <h4 className="font-semibold">{title}</h4>
        <button
          className={`border-none btn btn-neutral ${btnColor} rounded-xl`}
        >
          {icon}
        </button>
      </div>
      <h2 className={`text-3xl my-5 ${color} font-bold`}>{number}</h2>
      <p className="text-sm">+5 from yesterday</p>
    </article>
  );
}
