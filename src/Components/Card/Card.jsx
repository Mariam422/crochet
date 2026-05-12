// 
// import { Link } from "react-router-dom";
// import "./Card.css";
// export default function Card({ title, level, description, path }) {
//   return (
//     <div className="card">
//       <h3 className="card-level">{level}</h3>
//       <h2 className="card-title">{title}</h2>

//       <span className="line"></span>

//       <p className="card-desc">{description}</p>

//       <Link to={path} className="card-btn">
//         Start Learning
//       </Link>
//     </div>
//   );
// }

export default function Card({
  level,
  title,
  description,
  path,
  emoji,
  duration,
}) {
  return (
    <div className="bg-[#fff3dc] rounded-2xl p-4 shadow-[0_4px_10px_rgba(0,0,0,0.05)] flex flex-col gap-3 transition duration-300 hover:-translate-y-1.5">

      {/* TOP */}
      <div className="flex justify-between items-center">
        <span className="text-2xl">{emoji}</span>

        <span className="text-xs px-3 py-1 rounded-full bg-[#ffe0b2] text-[#8d5a44]">
          {level}
        </span>
      </div>

      {/* BODY */}
      <h3 className="text-[18px] font-semibold text-[#2b2b2b]">
        {title}
      </h3>

      <p className="text-sm text-[#666]">
        {description}
      </p>

      {/* FOOTER */}
      <div className="flex justify-between items-center mt-auto">
        <span className="text-xs text-[#8d5a44]">
          {duration}
        </span>

        <div className="flex gap-2">
          <button className="bg-[#f4a261] text-white px-4 py-1.5 rounded-full text-sm hover:bg-[#d97c3a] transition">
            Start
          </button>

          <button className="bg-white border border-[#f4a261] px-4 py-1.5 rounded-full text-sm hover:bg-[#fff3dc] transition">
            Mark done
          </button>
        </div>
      </div>
    </div>
  );
}