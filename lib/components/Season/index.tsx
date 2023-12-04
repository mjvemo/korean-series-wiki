"use client";
import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { CreateChapterForm } from "../CreateChapterForm";
import { Button } from "primereact/button";

export function Season() {
  const [selectedCity, setSelectedCity] = useState(null);
  const seasons = [
    { name: "Season 1" },
    { name: "Season 2" },
    { name: "Season 3" },
    { name: "Season 4" },
    { name: "Season 5" },
    { name: "Season 6" },
    { name: "Season 7" },
    { name: "Season 8" },
    { name: "Season 9" },
    { name: "Season 10" },
    { name: "Season 11" },
    { name: "Season 12" },
    { name: "Season 13" },
    { name: "Season 14" },
    { name: "Season 15" },
    { name: "Season 16" },
    { name: "Season 17" },
    { name: "Season 18" },
    { name: "Season 19" },
  ];

  return (
    <div className="flex flex-column justify-content-center gap-4">
      <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={seasons}
        optionLabel="name"
        placeholder="Select a Season"
        className="w-full md:w-14rem"
        virtualScrollerOptions={{ itemSize: 40 }}
      />
      <div>
        <CreateChapterForm />
      </div>
    </div>
  );
}
