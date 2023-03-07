import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { format } from "sql-formatter";

import playground from "./playground";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function App() {
  const { sql, parameters } = playground().compile();
  return (
    <div
      style={{
        height: "100%",
        display: "grid",
        placeItems: "center"
      }}
    >
      <pre
        style={{
          fontSize: "24px",
          lineHeight: 1.2,
          fontFamily: "monospace",
          color: "white",
          background: "#121212",
          padding: 60,
          borderRadius: 20,
          boxShadow: `var(--shadow-elevation-high)`
        }}
      >
        {format(sql, {
          language: "sqlite",
          tabWidth: 4,
          keywordCase: "upper",
          params: parameters
        })}
      </pre>
    </div>
  );
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
