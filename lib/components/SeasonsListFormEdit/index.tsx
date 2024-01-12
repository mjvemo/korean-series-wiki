import {
  getSeasonByIdAsync,
  getSeasonsBySerieId,
  selectActiveSeason,
  useDispatch,
  useSelector,
} from "@/lib/redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export interface ComponentProps {
  seasonId: string;
}

export default function SeasonsListFormEdit(props: ComponentProps) {
  const id = props.seasonId;
  const router = useRouter();
  const dispatch = useDispatch();
  const season = useSelector(selectActiveSeason);

  useEffect(() => {
    dispatch(getSeasonByIdAsync(id));
    dispatch(getSeasonsBySerieId(id));
  }, []);

  return (
    <div className="flex flex-column justify-content-center flex-wrap row-gap-6 p-5">
      <h1>Seasons Edit</h1>
    </div>
  );
}
