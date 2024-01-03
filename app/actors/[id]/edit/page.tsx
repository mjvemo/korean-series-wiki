import { ActorDTO } from "@/lib/api/dtos/actor.dto";
import { ActorsListFormEdit } from "@/lib/components/ActorsListFormEdit";
export interface ComponentProps {
  data: ActorDTO[];
}

export default function Page(props: ComponentProps) {
  return (
    <div>
      <ActorsListFormEdit data={props.data} />
    </div>
  );
}
