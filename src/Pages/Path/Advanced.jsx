import React from "react";

const videos = [
  {
    id: 1,
    title: "Advanced Crochet Patterns",
    url: "https://www.youtube.com/embed/example7",
  },
  {
    id: 2,
    title: "Complex Stitch Combinations",
    url: "https://www.youtube.com/embed/example8",
  },
  {
    id: 3,
    title: "Pro Level Project Tutorial",
    url: "https://www.youtube.com/embed/example9",
  },
];

export default function Advanced() {
  return (
    <div className="page">
      <h1 className="page-title">Advanced Level</h1>

      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <iframe
              className="video"
              src={video.url}
              title={video.title}
              allowFullScreen
            ></iframe>

            <p className="video-title">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}