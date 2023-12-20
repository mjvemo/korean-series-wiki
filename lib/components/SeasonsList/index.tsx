import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SeasonDTO } from "@/lib/api/dtos/season.dto";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { selectActiveSeason, selectSeasons, useSelector } from "@/lib/redux";
import { SerieCard } from "../SerieCard";
import { SeasonsForm } from "../SeasonsForm";
import { SeasonsChapters } from "../SeasonsChapters/indext";

export interface ComponentProps {
  data: SeasonDTO[];
}

// View Page

export default function SeasonsList(props: ComponentProps) {
  const router = useRouter();
  const season = useSelector(selectActiveSeason);

  const footer = (
    <div className="flex flex-row justify-content-center">
      <Button icon="pi pi-pencil" text></Button>
      <Button icon="pi pi-trash" text></Button>
    </div>
  );
  // const seasonsOptions = [
  //   { name: "Season 1" },
  //   { name: "Season 2" },
  //   { name: "Season 3" },
  //   { name: "Season 4" },
  //   { name: "Season 5" },
  // ];

  const seasonsOptions = [
    "Season 1",
    "Season 2",
    "Season 3",
    "Season 4",
    "Season 5",
  ];
  const [selected, setSelected] = useState(null);

  const onSelectOption = (season: any) => {
    return <Link href={`/seasons/${season.id}`}>{season.name}</Link>;
  };

  function handleOnChange(event: DropdownChangeEvent) {
    setSelected(event.value);
  }

  return (
    <div>
      <div className="flex justify-content-between align-items-center gap-4 m-4">
        <h1 className="justify-content-center p-2">Season</h1>
        <Link href="seasons/create">
          <Button label="Add Season" icon="pi pi-plus" outlined></Button>
        </Link>
      </div>
      <div className="flex flex-column justify-content-start size-xl gap-4 m-4">
        <Dropdown
          value={selected}
          onChange={handleOnChange}
          options={seasonsOptions}
          optionLabel="name"
          placeholder="Select a Season"
          className="w-full md:w-14rem"
        />
      </div>
      <div />
      {selected === seasonsOptions[0] ? <SeasonsChapters /> : null}
    </div>
  );
}
