// src/components/ErrorBoundaryWrapper.jsx
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

function Fallback({ error }) {
  return (
    <div style={{ padding: 20 }}>
      <h2>Something went wrong</h2>
      <pre style={{ whiteSpace: "pre-wrap" }}>{error?.message}</pre>
    </div>
  );
}

export default function ErrorBoundaryWrapper({ children }) {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      {children}
    </ErrorBoundary>
  );
}