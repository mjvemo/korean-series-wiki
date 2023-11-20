import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { Actor } from "@/lib/models/actor.model";

export interface CardProps {
  actor: Actor;
}

export function ActorCard({ actor }: CardProps) {
  const header = (src: string) => <Image src={src}> </Image>;
  const footer = (
    <div className="flex flex-row justify-content-center">
      <Button icon="pi pi-pencil" text></Button>
      <Button icon="pi pi-trash" text></Button>
    </div>
  );
  return (
    <div className="flex align-items-start justify-content-center gap-4">
      {" "}
      <div className="card flex-auto flex-order-0 p-4">
        <Card
          title={actor.name}
          footer={footer}
          header={header(actor.url)}
          className="md:w-25rem"
        ></Card>
      </div>
    </div>
  );
}
