import React from "react";
import ilustration from "/Users/test/My Drive/Developer/Frontend mentor/blog-preview-card/src/ilustration.svg";

export default function Header() {
  return (
    <header className="mb-6">
      <img className="rounded-xl w-full" src={ilustration} alt="ilustration" />
    </header>
  );
}
