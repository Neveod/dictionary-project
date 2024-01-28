import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <Dictionary defaultKeyword="book" />
        </main>
      </header>
    </div>
  );
}

export default App;
