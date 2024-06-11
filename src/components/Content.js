import React from "react";
import imageAvatar from "/Users/test/My Drive/Developer/Frontend mentor/blog-preview-card/src/image-avatar.webp";

export default function Content() {
  return (
    <main>
      <div>
        <span className="bg-background-yellow py-1 px-3 font-bold rounded-lg mb-3 inline-block">
          Learning
        </span>
        <h2 className="text-black mb-2">Published 21 Dec 2023</h2>
        <h1 className="text-background-yellow font-black text-2xl mb-4">
          HTML & CSS foundations
        </h1>
        <p className="text-gray-500 mb-4">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <div className="flex gap-2">
        <img className="w-6" src={imageAvatar} alt="avatar" />
        <span className="font-black">Greg Hooper</span>
      </div>
    </main>
  );
}
