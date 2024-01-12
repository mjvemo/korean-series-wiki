import { SerieDTO } from "@/lib/api/dtos/serie.dto";
import { SeriesListFormEdit } from "@/lib/components/SeriesListFormEdit";
export interface ComponentProps {
  params: {
    id: string;
  };
}

export default function Page(props: ComponentProps) {
  return (
    <div>
      <SeriesListFormEdit serieId={props.params.id} />
    </div>
  );
}
