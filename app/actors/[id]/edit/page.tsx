import { ActorDTO } from "@/lib/api/dtos/actor.dto";
import { ActorsListFormEdit } from "@/lib/components/ActorsListFormEdit";
export interface ComponentProps {
  params: {
    id: string;
  };
}

export default function Page(props: ComponentProps) {
  return (
    <div>
      <ActorsListFormEdit actorId={props.params.id} />
    </div>
  );
}
