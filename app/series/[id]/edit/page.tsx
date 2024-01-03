import { SerieDTO } from "@/lib/api/dtos/serie.dto";
import { SeriesListFormEdit } from "@/lib/components/SeriesListFormEdit";
export interface ComponentProps {
  data: SerieDTO[];
}

export default function Page(props: ComponentProps) {
  return (
    <div>
      <SeriesListFormEdit data={props.data} />
    </div>
  );
}
