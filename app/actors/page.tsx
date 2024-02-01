"use client";
import ActorsList from "@/lib/components/ActorsList";
import ActorsListSelected from "@/lib/components/ActorsListSelected";
import { Footer } from "@/lib/components/Footer";
import { actor, actor1, actor2, actor3 } from "@/lib/models/actor.model";
import { getActorsAsync, selectActors } from "@/lib/redux";
import Link from "next/link";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "@/lib/redux";

export interface ComponentProps {
  params: { id: string };
}

export default function (props: ComponentProps) {
  const { id } = props.params;

  const dispatch = useDispatch();
  const actors = useSelector(selectActors);

  useEffect(() => {
    dispatch(getActorsAsync());
  }, []);

  return (
    <div className="flex flex-column justify-content-center flex-wrap row-gap-6">
      <Image
        width="1670"
        src="https://the-post-assets.sgp1.digitaloceanspaces.com/2021/05/Gumiho-1896x800.jpg"
      ></Image>
      <div className="flex flex-column">
        <div className="flex flex-row justify-content-between align-items-center size-xl  gap-4 m-4">
          <h1 className="p-2 m-4">All Actors</h1>
          <div>
            <Link href="/actors/create">
              <Button
                label="Add New Actor"
                icon="pi pi-large"
                outlined
              ></Button>
            </Link>
          </div>
        </div>

        <div>
          <ActorsList data={actors} />
        </div>
      </div>
    </div>
  );
}
