import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SeasonDTO } from "@/lib/api/dtos/season.dto";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import {
  getSeasonsBySerieId,
  selectActiveSeason,
  selectSeasons,
  useSelector,
} from "@/lib/redux";
import { SerieCard } from "../SerieCard";
import { SeasonsForm } from "../SeasonsForm";
import { SeasonsChapters } from "../SeasonsChapters/indext";
import { useDispatch } from "@/lib/redux";

export interface ComponentProps {
  serieId: string;
}

// View Page

export default function SeasonsList(props: ComponentProps) {
  const router = useRouter();
  const seasons = useSelector(selectSeasons);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSeasonsBySerieId(props.serieId));
  }, []);

  const footer = (
    <div className="flex flex-row justify-content-center">
      <Button icon="pi pi-pencil" text></Button>
      <Button icon="pi pi-trash" text></Button>
    </div>
  );

  const seasonsOptions = seasons.map((_, index) => ({
    label: `Season ${index + 1}`,
    value: index,
  }));
  const [selected, setSelected] = useState(0);

  const onSelectOption = (season: any) => {
    return <Link href={`/seasons/${season.id}`}>{season.name}</Link>;
  };

  function handleOnChange(event: DropdownChangeEvent) {
    setSelected(event.value);
    console.log(event);
  }

  const season = seasons[selected];
  return (
    <div>
      <div className="flex justify-content-between align-items-center gap-4 m-4">
        <h1 className="justify-content-center p-2">Seasons</h1>
        <Link href={`${props.serieId}/seasons/create`}>
          <Button label="Add Season" icon="pi pi-plus" outlined></Button>
        </Link>
        <Link href={`${props.serieId}/seasons/create`}>
          <Button icon="pi pi-pencil" outlined></Button>
        </Link>
        <Link href={`${props.serieId}/seasons/create`}>
          <Button icon="pi pi-trash" outlined></Button>
        </Link>
      </div>
      <div className="flex flex-column justify-content-start size-xl gap-4 m-4">
        <Dropdown
          value={selected}
          onChange={handleOnChange}
          options={seasonsOptions}
          optionLabel="label"
          placeholder="Select a Season"
          className="w-full md:w-14rem"
        />
      </div>
      <div className="flex flex-row">
        {season &&
          season.chapters.map((chapter, index) => {
            return <SeasonsChapters key={index} data={chapter} />;
          })}
      </div>
    </div>
  );
}
