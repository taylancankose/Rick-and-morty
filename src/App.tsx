import Navbar from "./components/Navbar";
import ThemeProvider from "./context/theme";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
