import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import GalleryPage from "@/app/components/GalleryPage";

import fs from "fs";
import path from "path";

export const metadata = {
  title: "Gallery - Towards Destination",
  description: "Photos and videos from our tours",
};

function isImage(name: string) {
  return /\.(jpe?g|png|webp|avif|gif)$/i.test(name);
}

function isVideo(name: string) {
  return /\.(mp4|webm|mov|ogg)$/i.test(name);
}

export default function Page() {
  // Server-side read of public/gallery directory to automatically pick up media files.
  // If the folder doesn't exist or is empty, the gallery component will show placeholders.
  let photos: { src: string; alt?: string }[] = [];
  let videos: { src: string; title?: string; poster?: string }[] = [];

  try {
    const galleryDir = path.join(process.cwd(), "public", "gallery");
    const entries = fs.existsSync(galleryDir) ? fs.readdirSync(galleryDir) : [];

    // Sort entries numerically when filenames are numbers (1.jpg, 2.mp4, ...)
    entries.sort((a, b) => {
      const na = parseInt(path.parse(a).name, 10);
      const nb = parseInt(path.parse(b).name, 10);
      if (!isNaN(na) && !isNaN(nb)) return na - nb;
      return a.localeCompare(b);
    });

    for (const file of entries) {
      const rel = `/gallery/${file}`;
      if (isImage(file)) {
        photos.push({ src: rel, alt: path.parse(file).name });
      } else if (isVideo(file)) {
        videos.push({ src: rel, title: path.parse(file).name });
      }
    }
  } catch (err) {
    // If anything fails, leave arrays empty — component will show guidance.
    console.error("Failed to read gallery folder:", err);
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 xs:pt-28 sm:pt-32 pb-8 xs:pb-10 sm:pb-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Gallery Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 text-center">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold text-white mb-2">Gallery</h1>
          <p className="text-white/90 text-sm xs:text-base sm:text-lg max-w-2xl mx-auto">Photos and videos from our tours — click any item to preview.</p>
        </div>
      </section>

      {/* Main gallery content */}
      <main>
        <GalleryPage initialPhotos={photos} initialVideos={videos} />
      </main>

      <Footer />
    </div>
  );
}
