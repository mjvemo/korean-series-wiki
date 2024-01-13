"use client";
import SeasonsListFormEdit from "@/lib/components/SeasonsListFormEdit";
import {
  ChapterFormPayload,
  SeasonFormPayload,
} from "@/lib/models/season.model";
import {
  getSeasonByIdAsync,
  selectActiveSeason,
  useDispatch,
  useSelector,
} from "@/lib/redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export interface ComponentProps {
  params: {
    id: string;
  };
}

export default function Page(props: ComponentProps) {
  return (
    <div>
      <SeasonsListFormEdit seasonId={props.params.id} />
    </div>
  );
}
