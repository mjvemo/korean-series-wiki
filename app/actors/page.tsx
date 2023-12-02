"use client";
import ActorsList from "@/lib/components/ActorsList";
import { actor, actor1, actor2, actor3 } from "@/lib/models/actor.model";
import Link from "next/link";
import { Button } from "primereact/button";
import { Image } from "primereact/image";

export interface ComponentProps {
  params: { id: string };
}

export default function (props: ComponentProps) {
  const { id } = props.params;

  const listOfActor = [actor, actor1, actor2, actor3];

  return (
    <div className="flex flex-column justify-content-center flex-wrap row-gap-6">
      <Image
        width="1670"
        src="https://the-post-assets.sgp1.digitaloceanspaces.com/2021/05/Gumiho-1896x800.jpg"
      ></Image>
      <div className="flex flex-column">
        <div className="flex flex-row justify-content-end size-xl  gap-4 m-4">
          <Link href="actors/create">
            <Button label="Añadir Nuevo" icon="pi pi-plus" outlined></Button>
          </Link>
        </div>
        <h1 className="p-2 m-4">All Actors</h1>
        {/* <div className="flex align-items-start justify-content-center gap-4">
          {listOfActor.map((actor) => (
            <ActorCard key={actor.id} actor={actor} />
          ))}
        </div> */}
        <div>
          <ActorsList />
        </div>
      </div>
    </div>
  );
}
