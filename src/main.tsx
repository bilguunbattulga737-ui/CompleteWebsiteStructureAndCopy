import { createRoot } from "react-dom/client";
import App from './app/src/app/App.tsx';
import '../default_shadcn_theme.css';
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(<App />);
