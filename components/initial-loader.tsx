"use client";

import { useEffect, useState } from "react";

import { LoadingNu } from "@/components/loading-nu";

export function InitialLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1250);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-background/95 backdrop-blur-sm">
      <LoadingNu />
    </div>
  );
}
