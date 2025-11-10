"use client";

import React, { useState } from "react";

type Photo = { src: string; alt?: string };
type Video = { src: string; title?: string; poster?: string; type?: string };

// Default lists are empty — add your paths here or pass them as props from the page.
export const photosDefault: Photo[] = [
  // Example: { src: '/images/photo1.jpg', alt: 'Beautiful beach' }
];

export const videosDefault: Video[] = [
  // Example: { src: '/videos/tour1.mp4', title: 'Desert Tour', poster: '/videos/thumb1.jpg' }
];

export default function GalleryPage({
  initialPhotos,
  initialVideos,
}: {
  initialPhotos?: Photo[];
  initialVideos?: Video[];
}) {
  const [photos] = useState<Photo[]>(initialPhotos ?? photosDefault);
  const [videos] = useState<Video[]>(initialVideos ?? videosDefault);

  const [lightboxImage, setLightboxImage] = useState<Photo | null>(null);
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Gallery</h1>
        
      </div>

      {/* Photos Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-red-600">Photos</h2>
        {photos.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-200 p-8 text-center text-gray-500">
            No photos yet. Add photo paths to <code className="bg-gray-100 px-1 rounded">photosDefault</code> or pass <code>initialPhotos</code> from the page.
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {photos.map((p, i) => (
              <button
                key={i}
                onClick={() => setLightboxImage(p)}
                className="group overflow-hidden rounded-xl focus:outline-none"
                aria-label={`Open photo ${p.alt ?? i}`}
              >
                <div className="rounded-xl bg-white p-1 shadow-sm hover:shadow-lg transition-shadow">
                  {p.src ? (
                    // framed thumbnail
                    <img src={p.src} alt={p.alt ?? "photo"} className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform" />
                  ) : (
                    <div className="w-full h-40 flex items-center justify-center text-sm text-gray-500">No src: {p.alt ?? "photo"}</div>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Videos Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-red-600">Videos</h2>
        {videos.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-200 p-8 text-center text-gray-500">
            No videos yet. Add video paths to <code className="bg-gray-100 px-1 rounded">videosDefault</code> or pass <code>initialVideos</code> from the page.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v, i) => (
              <div key={i} className="rounded-xl overflow-hidden border bg-white shadow-sm">
                <button
                  onClick={() => setActiveVideo(v)}
                  className="relative block w-full h-48 focus:outline-none"
                  onMouseEnter={(e) => {
                    const vid = (e.currentTarget.querySelector('video') as HTMLVideoElement | null);
                    if (vid) {
                      vid.muted = true;
                      vid.play().catch(() => {});
                    }
                  }}
                  onMouseLeave={(e) => {
                    const vid = (e.currentTarget.querySelector('video') as HTMLVideoElement | null);
                    if (vid) {
                      try {
                        vid.pause();
                        vid.currentTime = 0;
                      } catch {}
                    }
                  }}
                >
                  {v.poster ? (
                    // show poster underneath the video element for fallback
                    <div className="w-full h-full relative">
                      <img src={v.poster} alt={v.title ?? `video-${i}`} className="w-full h-full object-cover" />
                      <video className="absolute inset-0 w-full h-full object-cover" preload="metadata" playsInline muted loop>
                        <source src={v.src} />
                      </video>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-500">
                      <video className="w-full h-full object-cover" preload="metadata" playsInline muted loop>
                        <source src={v.src} />
                      </video>
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-black/60 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v18l15-9L5 3z" />
                      </svg>
                    </div>
                  </div>
                </button>
                {/* Removed video title display per request */}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Image Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full">
            <div className="relative">
              <button aria-label="Close image preview" onClick={() => setLightboxImage(null)} className="absolute top-3 right-3 z-50 bg-black/80 text-white rounded-full p-2 hover:bg-black">✕</button>
              {lightboxImage.src ? (
                <div className="p-6 bg-white rounded shadow-lg">
                  <img src={lightboxImage.src} alt={lightboxImage.alt ?? "lightbox"} className="w-full max-h-[80vh] object-contain rounded" />
                </div>
              ) : (
                <div className="w-full h-80 bg-gray-100 rounded flex items-center justify-center text-gray-500">No image source</div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl bg-black rounded">
            <div className="relative">
              <button aria-label="Close video preview" onClick={() => setActiveVideo(null)} className="absolute top-3 right-3 z-50 bg-black/80 text-white rounded-full p-2 hover:bg-black">✕</button>
              {activeVideo.src ? (
                <video controls autoPlay className="w-full max-h-[80vh] rounded bg-black">
                  <source src={activeVideo.src} />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="w-full h-80 bg-gray-100 rounded flex items-center justify-center text-gray-500">No video source</div>
              )}
            </div>
            {/* title removed from modal view per request */}
          </div>
        </div>
      )}
    </div>
  );
}
