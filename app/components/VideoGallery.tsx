import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import "../VideoGallery.css"; // Add your styling here
import Label from "./Label";

const rows = [
  { id: 1, count: 4, videoIds: ["kZ7xspnu2fc", "w0PPnHeed-4", "dONVyRmpcIU", "QnTDQncyMd0"] },
  { id: 2, count: 3, videoIds: ["BJe1iuHSFS4", "IdVrn09Y1xU", "OSRCKPHt8pg", "DIwfL_u-w0Y"] },
  { id: 3, count: 5, videoIds: ["0QFMOJnloCk", "DHbVei8Zj9w", "_HkO6ny1e4E", "nMxmjLQEo1E"] },
];

const VideoGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<{ row: number; col: number } | null>(null);
  const [items, setItems] = useState<{ id: string; youtubeId: string; preview: string }[][]>([]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = width / 4;
    const centerY = height / 4;

    const deltaX = (centerX - clientX) / 1; // Adjust divisor for sensitivity
    const deltaY = (centerY - clientY) / 1;

    container.style.transform = `translate(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px))`;
  };

  useEffect(() => {
    // Generate rows of items with YouTube IDs
    const arrayeleven = Array.from({ length: 11 }, (_, index) => index + 1);
    let previewIndex = 0;
    const newItems = rows.map((row) =>
      Array.from({ length: row.count }, (_, index) => {
        const preview = `/kill${arrayeleven[previewIndex]}.png`;
        previewIndex = (previewIndex + 1) % arrayeleven.length; // Loop through previews
        return {
          id: `${row.id}-${index + 1}`,
          youtubeId: row.videoIds[index],
          preview,
        };
      })
    );
    setItems(newItems);
  }, []);

  return (
    <div className="container w-screen h-[150vh] overflow-hidden relative bg-black">
      <div
        className="w-[200vw] h-[200vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-200
        flex flex-col justify-between p-40 gallery-container"
        ref={containerRef}
        onMouseMove={handleMouseMove}
      >
        <Label
          className={" text-center mx-auto !text-red-700"}
          backgroundColor=" bg-transparent"
          title="مجازر اسرائيل"
        />
        {items.map((row, rowIndex) => (
          <div key={rowIndex} className="video-row w-full flex justify-between">
            {row.map((video, colIndex) => (
              <div
                key={video.id}
                className="video-thumbnail relative w-[600px] h-[275px] overflow-hidden"
                onMouseEnter={() => setHoveredIndex({ row: rowIndex, col: colIndex })}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {hoveredIndex?.row === rowIndex && hoveredIndex?.col === colIndex ? (
                  <div className=" absolute inset-0 w-full h-full scale-150 duration-150">
                    <ReactPlayer
                      url={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                      playing
                      loop
                      muted
                      width="100%"
                      height="100%"
                      className="video-preview"
                    />
                  </div>
                ) : (
                  <img
                    className="w-full absolute inset-0  h-full object-cover"
                    src={video.preview}
                    alt={`Preview ${video.id}`}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
