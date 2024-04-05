import Navbar from "./components/Navbar";
import ThemeProvider from "./context/theme";
import Characters from "./pages/Characters";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Home />
        <Characters />
      </div>
    </ThemeProvider>
  );
}

export default App;
