import React from "react";
import "../styles.css";

function EonProvider({ children }: { children: React.ReactNode }) {
  return <div className="Root">{children}</div>;
}

export { EonProvider };