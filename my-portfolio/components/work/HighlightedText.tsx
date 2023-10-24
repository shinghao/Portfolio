import React, { ReactNode } from "react";

export default function HighlightedText({ children }: { children: ReactNode }) {
  return <span className="font-bold text-primary-btn-blue">{children}</span>;
}
