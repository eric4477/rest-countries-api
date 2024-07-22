import "./App.css";
import Header from "./components/Header/Header";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <div className="app bg-lightColors-white">
      <Header />
    </div>
  );
}

export default App;
