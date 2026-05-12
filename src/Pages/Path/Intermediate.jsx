import React from "react";

const videos = [
  {
    id: 1,
    title: "Intermediate Crochet - Advanced Stitches",
    url: "https://www.youtube.com/embed/example4",
  },
  {
    id: 2,
    title: "How to Read Patterns",
    url: "https://www.youtube.com/embed/example5",
  },
  {
    id: 3,
    title: "Joining Techniques",
    url: "https://www.youtube.com/embed/example6",
  },
];

export default function Intermediate() {
  return (
    <div className="page">
      <h1 className="page-title">Intermediate Level</h1>

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