import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SeasonDTO } from "@/lib/api/dtos/season.dto";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import {
  deleteSeasonByIdAsync,
  getSeasonsBySerieId,
  selectActiveSeason,
  selectByEntityIdSeasons,
  selectSeasons,
  useSelector,
} from "@/lib/redux";
import { SerieCard } from "../SerieCard";
import { SeasonsForm } from "../SeasonsForm";
import { SeasonsChapters } from "../SeasonsChapters/indext";
import { useDispatch } from "@/lib/redux";
import { IfNotNil } from "../utils/IfNotNil";

export interface ComponentProps {
  serieId: string;
}

// View Page

export default function SeasonsList(props: ComponentProps) {
  const seasons = useSelector(selectByEntityIdSeasons);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSeasonsBySerieId(props.serieId));
  }, []);

  const seasonsOptions = seasons.map((_, index) => ({
    label: `Season ${index + 1}`,
    value: index,
  }));
  const [selected, setSelected] = useState(0);

  function handleOnChange(event: DropdownChangeEvent) {
    setSelected(event.value);
  }

  async function handleOnDeleteClick(seasonId: string) {
    await dispatch(deleteSeasonByIdAsync(seasonId));
    setSelected(0);
  }

  const season = seasons[selected];

  return (
    <div>
      <div className="flex flex-row justify-content-between align-items-center gap-4 m-4 ">
        <h1 className="justify-content-center p-2">Seasons</h1>
        <div className="flex flex-row gap-4">
          <Link href={`${props.serieId}/seasons/create`}>
            <Button label="Add Season" icon="pi pi-plus" outlined></Button>
          </Link>
          <IfNotNil data={season}>
            {({ data }) => (
              <>
                <Link href={`/seasons/${data.id}/edit`}>
                  <Button icon="pi pi-pencil" outlined></Button>
                </Link>

                <Button
                  icon="pi pi-trash"
                  outlined
                  onClick={() => handleOnDeleteClick(data.id)}
                ></Button>
              </>
            )}
          </IfNotNil>
        </div>
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
