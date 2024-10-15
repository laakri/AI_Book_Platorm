import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/navbar";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
