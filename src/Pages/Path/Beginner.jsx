import React from "react";

const videos = [
  {
    id: 1,
    title: "Crochet Basics - Lesson 1",
    url: "https://www.youtube.com/embed/example1",
  },
  {
    id: 2,
    title: "How to Hold Hook & Yarn",
    url: "https://www.youtube.com/embed/example2",
  },
  {
    id: 3,
    title: "First Stitch Tutorial",
    url: "https://www.youtube.com/embed/example3",
  },
];

export default function Beginner() {
  return (
    <div className="page">
      <h1 className="page-title">Beginner Level</h1>

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