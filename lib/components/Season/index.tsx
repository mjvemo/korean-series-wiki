"use client";
import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { CreateChapterCard } from "../CreateChapterCard";
import { Button } from "primereact/button";

export function Season() {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "Season 1" },
    { name: "Season 2" },
    { name: "Season 3" },
    { name: "Season 4" },
    { name: "Season 5" },
  ];

  return (
    <div className="flex flex-column justify-content-center gap-4">
      <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="name"
        placeholder="Select a Season"
        className="w-full md:w-14rem"
      />
      <div className="flex flex-row gap-2 align-items-start justify-content-start pt-4 py-4">
        <CreateChapterCard />
        <Button icon="pi pi-plus" outlined></Button>
      </div>
    </div>
  );
}
