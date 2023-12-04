import { Card } from "primereact/card";
import { Image } from "primereact/image";
import { InputText } from "primereact/inputtext";
import { CreateActorCard } from "../CreateActorCard";
import { Button } from "primereact/button";
import { ActorsForm } from "../ActorsForm";

export function Cast() {
  return (
    <div className="flex flex-row justify-content-start">
      {/* <CreateActorCard /> */}
      <ActorsForm />
      <div className="p-4"></div>
    </div>
  );
}
