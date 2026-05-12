import React, { useState, useEffect } from "react";

const patterns = [
  { id: 1, title: "Coaster Pattern", image: "/download.webp" },
  { id: 2, title: "Flower Pattern", image: "/download1.jfif" },
  { id: 3, title: "Bag Pattern", image: "/download7.webp" },
  { id: 4, title: "Hat Pattern", image: "/download (3).webp" },
  { id: 5, title: "Hat Pattern", image: "/download4.jpg" },
  { id: 6, title: "Hat Pattern", image: "/download5.jpg" },
  { id: 7, title: "Belt Pattern", image: "/download6.jpg" },
  { id: 8, title: "Hat Pattern", image: "/download (2).webp" },
];

export default function Patterns() {
  const [selectedImage, setSelectedImage] = useState(null);

  // close بـ ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="max-w-[1100px] mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-[#e76f51] mb-6">
        Patterns
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {patterns.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="bg-[#fff6e5] rounded-2xl overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover"
            />

            <p className="text-center text-sm font-medium text-[#4e342e] py-3">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex flex-col items-center justify-center max-w-xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-0 right-4 text-white text-xl"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[70vh] w-auto object-contain rounded-xl shadow-lg"
            />

            {/* Title */}
            <p className="mt-4 text-white text-center font-medium">
              {selectedImage.title}
            </p>

            {/* Download Button */}
            <a
              href={selectedImage.image}
              download
              className="mt-4 bg-[#f4a261] text-white px-6 py-2 rounded-full text-sm hover:bg-[#e76f51] transition"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </section>
  );
}