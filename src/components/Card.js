import React from "react";
import Header from "./Header";
import Content from "./Content";

export default function Card() {
  return (
    <section className="lg:max-w-[384px] bg-white p-6 rounded-xl border border-black shadow-box-shadow md:shadow-box-shadow-desktop">
      <Header />
      <Content />
    </section>
  );
}
