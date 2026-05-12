export default function LessonCard({ lesson }) {
  return (
    <div className="bg-[#fff6e5] rounded-2xl p-4 shadow-sm hover:-translate-y-1 transition flex flex-col gap-3">

      {/* TOP */}
      <div className="flex justify-between items-center">
        <span className="text-2xl">{lesson.emoji}</span>

        <span className="text-xs px-3 py-1 rounded-full bg-[#ffe0b2] text-[#8d5a44]">
          {lesson.level}
        </span>
      </div>

      {/* TITLE */}
      <h3 className="text-[18px] font-semibold text-[#2b2b2b]">
        {lesson.title}
      </h3>

      {/* DESC */}
      <p className="text-sm text-[#666]">
        {lesson.description}
      </p>

      {/* STEPS PREVIEW */}
      <ul className="text-xs text-[#7a5c50] list-disc pl-4">
        {lesson.steps.slice(0, 2).map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      {/* FOOTER */}
      <div className="flex justify-between items-center mt-auto">
        <span className="text-xs text-[#8d5a44]">
          {lesson.duration}
        </span>

        <button className="bg-[#f4a261] text-white px-4 py-1.5 rounded-full text-sm hover:bg-[#e76f51] transition">
          Start
        </button>
      </div>

    </div>
  );
}