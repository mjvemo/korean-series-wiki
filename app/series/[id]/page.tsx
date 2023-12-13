"use client";

import { TabMenu } from "primereact/tabmenu";
import React, { useState, useEffect } from "react";
import { Galleria } from "primereact/galleria";
import { Image } from "primereact/image";
import { serie } from "@/lib/models/serie.model";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

import {
  useDispatch,
  getSerieByIdAsync,
  useSelector,
  selectActiveSerie,
  getActorsBySerieIdAsync,
  selectActors,
} from "@/lib/redux";
import Link from "next/link";
import { Footer } from "@/lib/components/Footer";

export interface ComponentProps {
  params: { id: string };
}

export default function (props: ComponentProps) {
  const { id } = props.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSerieByIdAsync(id));
    dispatch(getActorsBySerieIdAsync(id));
  }, []);

  const activeSerie = useSelector(selectActiveSerie);
  const cast = useSelector(selectActors);

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
        <h1 className="p-2 m-4">1 Serie</h1>
        {/* <div className="flex align-items-start justify-content-center gap-4">
          {listOfActor.map((actor) => (
            <ActorCard key={actor.id} actor={actor} />
          ))}
        </div> */}
      </div>
      <footer className="flex flex-row justify-content-center gap-6 h-4rem font-bold">
        <Footer />
      </footer>
    </div>
  );
}
