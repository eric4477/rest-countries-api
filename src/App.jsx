import "./App.css";
import Header from "./components/Header";
import useDarkMode from "./hooks/useDarkMode";
import Home from "./pages/Home";
function App() {
  const [isDarkMode] = useDarkMode();
  return (
    <div className="app dark:bg-darkColors-very-dark-blue">
      <Header />
      <Home />
    </div>
  );
}

export default App;
