"use client";
import { ActorCard } from "@/lib/components/ActorCard";
import CardCarousel from "@/lib/components/CardCarousel";
import { actor, actor1, actor2, actor3 } from "@/lib/models/actor.model";
import Link from "next/link";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
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
        <div className="flex flex-row gap-4">
          <Link href="actor/create">
            <Button
              label="Añadir Nuevo"
              icon="pi pi-plus"
              size="small"
              outlined
            ></Button>
          </Link>
        </div>
        <h1 className="p-4">Top 10 actors</h1>
        <div className="flex align-items-start justify-content-center gap-4">
          {listOfActor.map((actor) => (
            <ActorCard key={actor.id} actor={actor} />
          ))}
        </div>
      </div>
    </div>
  );
}
