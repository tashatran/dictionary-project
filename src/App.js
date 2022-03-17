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
            Coded by Tasha and is open-sourced on{" "}
            <a
              href="https://github.com/tashatran/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://sad-lovelace-c9452c.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
