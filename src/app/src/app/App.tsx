import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { LanguageProvider } from "./context/LanguageContext";

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: Error | null }
> {
  state = { error: null };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            padding: 40,
            fontFamily: "sans-serif",
            color: "#0B1F3A",
          }}
        >
          <h2>Something went wrong rendering the app.</h2>
          <pre
            style={{
              fontSize: 12,
              color: "#c0392b",
              whiteSpace: "pre-wrap",
            }}
          >
            {(this.state.error as Error).message}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </ErrorBoundary>
  );
}
