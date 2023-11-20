import { Card } from "primereact/card";
import { Image } from "primereact/image";
import { InputText } from "primereact/inputtext";
import { CreateActorCard } from "../CreateActorCard";
import { Button } from "primereact/button";

export function Cast() {
  return (
    <div className="flex flex-row">
      <CreateActorCard />
      <div className="p-4">
        <Button icon="pi pi-plus" outlined></Button>
      </div>
    </div>
  );
}
