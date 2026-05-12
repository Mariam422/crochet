import React, { useState } from "react";

const initialTasks = [
  { id: 1, text: "عمل chain 20 stitch", done: false },
  { id: 2, text: "عمل single crochet 10 مرات", done: false },
  { id: 3, text: "تطبيق pattern بسيط (coaster)", done: false },
];

export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [images, setImages] = useState([]);

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImages((prev) => [...prev, { id: Date.now(), url }]);
    }
  };

  // progress %
  const completed = tasks.filter((t) => t.done).length;
  const progress = (completed / tasks.length) * 100;

  return (
    <section className="max-w-[1100px] mx-auto px-4 py-6">

      {/* TITLE */}
      <h1 className="text-2xl font-bold text-[#e76f51] mb-6">
        My Tasks
      </h1>

      {/* PROGRESS */}
      <div className="mb-6">
        <p className="text-sm mb-2 text-[#4e342e]">
          Progress: {completed} / {tasks.length}
        </p>

        <div className="w-full bg-[#faedcd] h-3 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#f4a261] transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* TASK LIST */}
      <div className="flex flex-col gap-4 mb-8">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-3 bg-[#fff6e5] p-4 rounded-xl shadow-sm"
          >
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
              className="accent-[#f4a261] w-4 h-4"
            />

            <p
              className={`text-sm ${
                task.done
                  ? "line-through text-gray-400"
                  : "text-[#4e342e]"
              }`}
            >
              {task.text}
            </p>
          </div>
        ))}
      </div>

      {/* UPLOAD */}
      <div className="mb-6">
        <label className="block mb-2 text-sm text-[#4e342e]">
          Upload your work 👇
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="block w-full text-sm text-[#4e342e]
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:bg-[#f4a261] file:text-white
          hover:file:bg-[#e76f51]"
        />
      </div>

      {/* IMAGES */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img) => (
          <div
            key={img.id}
            className="rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={img.url}
              alt="task"
              className="w-full h-32 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}