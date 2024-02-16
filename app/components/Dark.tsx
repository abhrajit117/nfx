"use client";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function Dark() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Optionally, you can save the user preference to local storage or a cookie
    // localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="dark-mode-toggle"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <Label htmlFor="dark-mode-toggle">
        {darkMode ? "Dark Mode" : "Light Mode"}
      </Label>
    </div>
  );
}
