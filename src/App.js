import "./App.css";
import Dictionary from "./Dictonary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Dicti🤓nary</h1>
        <Dictionary defaultKeyword="beer" />
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://github.com/tashatran/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Tasha
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
