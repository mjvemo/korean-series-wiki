"use client";

import { TabMenu } from "primereact/tabmenu";
import React, { useState, useEffect } from "react";
import { Galleria } from "primereact/galleria";
import { Image } from "primereact/image";
import { serie } from "@/lib/models/serie.model";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

export default function BasicDemo() {
  const items = [
    { label: "About", icon: "pi pi-fw pi-home" },
    { label: "Seasons", icon: "pi pi-fw pi-calendar" },
    { label: "Cast", icon: "pi pi-fw pi-pencil" },
    { label: "Awards", icon: "pi pi-fw pi-file" },
  ];

  // const [images, setImages] = useState(null);
  // const responsiveOptions = [
  //   {
  //     breakpoint: "991px",
  //     numVisible: 4,
  //   },
  //   {
  //     breakpoint: "767px",
  //     numVisible: 3,
  //   },
  //   {
  //     breakpoint: "575px",
  //     numVisible: 1,
  //   },
  // ];

  // useEffect(() => {
  //   PhotoService.getImages().then((data) => setImages(data));
  // }, []);

  // const itemTemplate = (item) => {
  //   return (
  //     <img
  //       src={item.itemImageSrc}
  //       alt={item.alt}
  //       style={{ width: "100%", display: "block" }}
  //     />
  //   );
  // };

  // const thumbnailTemplate = (item) => {
  //   return (
  //     <img
  //       src={item.thumbnailImageSrc}
  //       alt={item.alt}
  //       style={{ display: "block" }}
  //     />
  //   );
  // };

  // const caption = (item) => {
  //   return (
  //     <React.Fragment>
  //       <div className="text-xl mb-2 font-bold">{item.title}</div>
  //       <p className="text-white">{item.alt}</p>
  //     </React.Fragment>
  //   );
  // };

  const header = (
    <img
      alt="Card"
      src="https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/03/16/6231339ee2a8f37ae025032e.webp"
      width="400"
    />
  );

  //  const caption = (item) => {
  //    return (
  //      <React.Fragment>
  //        <div className="text-xl mb-2 font-bold">{item.title}</div>
  //        <p className="text-white">{item.alt}</p>
  //      </React.Fragment>
  //    );
  //  };

  return (
    <div className="flex flex-column justify-content-center flex-wrap row-gap-6">
      {/* <div className="card">
        <Galleria
          value={images}
          responsiveOptions={responsiveOptions}
          numVisible={5}
          item={itemTemplate}
          thumbnail={thumbnailTemplate}
          caption={caption}
          style={{ maxWidth: "640px" }}
        />
      </div> */}
      <Image
        width="1670"
        src="https://the-post-assets.sgp1.digitaloceanspaces.com/2021/06/Gumihonew-1896x800.jpg"
      ></Image>

      <div className="flex flex-row justify-content-center">
        <div className="card">
          <TabMenu model={items} />
        </div>
        {/* <div className="card">
        <Galleria
          value={images}
          responsiveOptions={responsiveOptions}
          numVisible={5}
          item={itemTemplate}
          thumbnail={thumbnailTemplate}
          caption={caption}
          style={{ maxWidth: "640px" }}
        />
      </div> */}
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
