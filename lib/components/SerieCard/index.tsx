import { Card } from "primereact/card";
import { Serie } from "@/lib/models/serie.model";
import { Button } from "primereact/button";
import { Image } from "primereact/image";

export interface CardProps {
  serie: Serie;
}

export function SerieCard({ serie }: CardProps) {
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
      <div className="card flex-auto flex-order-0">
        <Card
          title={serie.name}
          subTitle={serie.releaseDate}
          footer={footer}
          header={header(serie.url)}
          className="md:w-25rem"
        >
          <p className="m-0">{serie.description}</p>
        </Card>
      </div>
    </div>
  );
}
