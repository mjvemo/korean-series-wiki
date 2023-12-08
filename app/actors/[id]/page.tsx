// "use client";

// interface PageProps {
//   params: {
//     id: string;
//   };
// }
// export default function Page(props: PageProps) {
//   return <div>{props.params.id}</div>;
// }

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
  getActorsByIdAsync,
  useSelector,
  selectActiveActor,
  getActorsBySerieIdAsync,
  selectActors,
} from "@/lib/redux";

export interface ComponentProps {
  params: { id: string };
}

export default function (props: ComponentProps) {
  const { id } = props.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActorsByIdAsync(id));
    dispatch(getActorsBySerieIdAsync(id));
  }, []);

  const activeActor = useSelector(selectActiveActor);
  const cast = useSelector(selectActors);

  const items = [
    { label: "About", icon: "pi pi-fw pi-home" },
    {
      label: "Seasons",
      icon: "pi pi-fw pi-calendar",
    },
    { label: "Cast", icon: "pi pi-fw pi-pencil" },
    { label: "Awards", icon: "pi pi-fw pi-file" },
  ];

  const header = (
    <img
      alt="Card"
      src="https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/03/16/6231339ee2a8f37ae025032e.webp"
      width="400"
    />
  );

  return (
    <div className="flex flex-column justify-content-center flex-wrap row-gap-6">
      {activeActor && (
        <div>
          <div>id: {activeActor.id}</div>
          <div>name: {activeActor.name}</div>
          <div>age: {activeActor.age}</div>
          <div>agency: {activeActor.agency}</div>
          <div>series: {JSON.stringify(serie, null, 2)}</div>
        </div>
      )}
      <Image
        width="1670"
        src="https://the-post-assets.sgp1.digitaloceanspaces.com/2021/06/Gumihonew-1896x800.jpg"
      ></Image>

      <div className="flex flex-row justify-content-center">
        <div className="card">
          <TabMenu model={items} />
        </div>
      </div>

      <div className="flex flex-column justify-content-center align-items-center gap-2">
        <div className="flex flex-row justify-content-between">
          <h2>About</h2>
          <Button text icon="pi pi-pencil"></Button>
        </div>
        <p>{serie.description}</p>
      </div>
      <Button
        className="flex flex-column-reverse justify-content-center gap-2"
        text
        icon="pi pi-angle-down"
      >
        Read more
      </Button>
      <h2>News</h2>
      <div className="flex flex-wrap column-gap-4 row-gap-6">
        <Card subTitle={serie.releaseDate} className="md:w-25rem">
          <img
            alt="Card"
            src="https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/03/16/6231339ee2a8f37ae025032e.webp"
            width="120"
          />
        </Card>
        <Card subTitle={serie.releaseDate} className="md:w-25rem">
          <img
            alt="Card"
            src="https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/03/16/6231339ee2a8f37ae025032e.webp"
            width="120"
          />
        </Card>
        <Card subTitle={serie.releaseDate} className="md:w-25rem">
          <img
            alt="Card"
            src="https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/03/16/6231339ee2a8f37ae025032e.webp"
            width="120"
          />
        </Card>
        <Card subTitle={serie.releaseDate} className="md:w-25rem">
          <img
            alt="Card"
            src="https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/03/16/6231339ee2a8f37ae025032e.webp"
            width="120"
          />
        </Card>
        <Card subTitle={serie.releaseDate} className="md:w-25rem">
          <img
            alt="Card"
            src="https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/03/16/6231339ee2a8f37ae025032e.webp"
            width="120"
          />
        </Card>
        <Card subTitle={serie.releaseDate} className="md:w-25rem">
          <img
            alt="Card"
            src="https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/03/16/6231339ee2a8f37ae025032e.webp"
            width="120"
          />
        </Card>
      </div>
    </div>
  );
}
