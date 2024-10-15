import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/navbar";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
