import "./App.css";
import Header from "./components/Header";
import useDarkMode from "./hooks/useDarkMode";
function App() {
  const [isDarkMode] = useDarkMode();
  return (
    <div className="app">
      <Header />
    </div>
  );
}

export default App;
