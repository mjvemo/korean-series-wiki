"use client";
import { SeasonDTO } from "@/lib/api/dtos/season.dto";
import SeasonsList from "@/lib/components/SeasonsList";
import { selectSeasons, useSelector } from "@/lib/redux";

export interface ComponentProps {
  data: SeasonDTO[];
}

export default function Page() {
  const seasons = useSelector(selectSeasons);
  return (
    <div>
      <SeasonsList data={seasons} />
    </div>
  );
}
