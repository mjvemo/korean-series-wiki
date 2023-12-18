import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SeasonDTO } from "@/lib/api/dtos/season.dto";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";

export interface ComponentProps {
  data: SeasonDTO[];
}

export default function SeriesList(props: ComponentProps) {
  const router = useRouter();

  const footer = (
    <div className="flex flex-row justify-content-center">
      <Button icon="pi pi-pencil" text></Button>
      <Button icon="pi pi-trash" text></Button>
    </div>
  );

  const [selectedCity, setSelectedCity] = useState(null);

  const onSelectOption = (season: any) => {
    return <Link href={`/seasons/${season.id}`}>{season.name}</Link>;
  };

  function handleOnChange(event: DropdownChangeEvent) {
    setSelectedCity(event.value);
  }
  const seasons = [
    { name: "Season 1" },
    { name: "Season 2" },
    { name: "Season 3" },
    { name: "Season 4" },
    { name: "Season 5" },
  ];

  return (
    <div>
      <div className="flex flex-row justify-content-end size-xl  gap-4 m-4">
        <Link href="seasons/create">
          <Button label="Add Season" icon="pi pi-plus" outlined></Button>
        </Link>
      </div>
      <h1 className="p-2 m-4">Seasons</h1>
      <div className="flex flex-column justify-content-start size-xl  gap-4 m-4">
        <Dropdown
          value={selectedCity}
          onChange={onSelectOption}
          options={seasons}
          optionLabel="name"
          placeholder="Select a Season"
          className="w-full md:w-14rem"
        />
      </div>
      <div />
    </div>
  );
}
