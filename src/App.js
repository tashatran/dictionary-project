import "./App.css";
import Dictionary from "./Dictonary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <Dictionary defaultKeyword="beer" />
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a href="https://github.com/tashatran/dictionary-project">Tasha</a>
          </small>
        </footer>
      </div>
    </div>
  );
}
