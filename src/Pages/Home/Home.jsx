// import Card from "../../Components/Card/Card";
// import { cardData } from "../../Data/Data";

// export default function Home() {
//   return (
//     <section className="home">
//       <div className="container">
//         <div className="card-container">
//           {cardData.map(({ id, level, title, description, path }) => (
//             <Card
//               key={id}
//               level={level}
//               title={title}
//               description={description}
//               path={path}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { lessons } from "../LessonsPage/Lessons";
import LessonCard from "../../components/LessonCard/LessonCard";

export default function Home() {
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];
  const [filter, setFilter] = useState("All");

  const filteredLessons =
    filter === "All"
      ? lessons
      : lessons.filter((l) => l.level === filter);

  return (
    <section className="max-w-[1100px] mx-auto px-4 py-6">

      {/* Title */}
      <h1 className="text-2xl font-bold text-[#e76f51] mb-6">
        All Lessons
      </h1>

      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {levels.map((level) => (
          <button
            key={level}
            onClick={() => setFilter(level)}
            className={`px-4 py-1.5 rounded-full text-sm border transition
              ${
                filter === level
                  ? "bg-[#f4a261] text-white border-[#f4a261]"
                  : "bg-white text-[#4e342e] border-[#e0c9b0]"
              }`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredLessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>

    </section>
  );
}