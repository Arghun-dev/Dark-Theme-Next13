"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      type="button"
      aria-label="Toggle Dark Mode"
      className="flex items-center justify-center rounded-lg p-2 hover:bg-slate-300 dark:hover:bg-slate-800"
    >
      {resolvedTheme === "light" ? (
        <MoonIcon className="h-6 w-6 text-slate-800" />
      ) : (
        <SunIcon className="h-6 w-6 text-orange-300" />
      )}
    </button>
  );
}
