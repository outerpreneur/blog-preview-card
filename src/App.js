import logo from "./logo.svg";
import "./App.css";
import "./output.css";

function App() {
  return (
    <body className=" bg-[#F4D04E] h-screen">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="text-pink-500">
        Hello <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </body>
  );
}

export default App;
