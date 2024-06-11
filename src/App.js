import "./output.css";
import Card from "./components/Card";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Figtree:ital,wght@0,300..900;1,300..900&display=swap"],
  },
});

function App() {
  return (
    <body className=" bg-background-yellow h-screen flex justify-center items-center font-Figtree tracking-wide p-6">
      <Card />
    </body>
  );
}

export default App;
