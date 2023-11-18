"use client";

import React, { useState, useEffect } from "react";
import { Image } from "primereact/image";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import Link from "next/link";
import { serie, serie1, serie2 } from "@/lib/models/serie.model";
import { Footer } from "@/lib/components/Footer";

export default function BasicDemo() {
  const header = (src: string) => <Image src={src}> </Image>;

  const footer = (
    <div className="flex flex-row justify-content-center">
      <Button icon="pi pi-pencil" text></Button>
      <Button icon="pi pi-trash" text></Button>
    </div>
  );

  return (
    <div className="flex flex-column justify-content-center flex-wrap row-gap-6">
      <Image
        width="1670"
        src="https://the-post-assets.sgp1.digitaloceanspaces.com/2021/06/Gumihonew-1896x800.jpg"
      ></Image>
      <div className="flex flex-row gap-2">
        <Link href="/series/create">
          <Button
            label="Añadir Nuevo"
            icon="pi pi-plus"
            size="small"
            outlined
          ></Button>
        </Link>
      </div>
      <div className="flex flex-row justify-content-between gap-6">
        <h2>Top 10 Series</h2>
      </div>
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
        <div className="card flex-auto flex-order-1">
          <Card
            title={serie1.name}
            subTitle={serie1.releaseDate}
            footer={footer}
            header={header(serie1.url)}
            className="md:w-25rem"
          >
            <p className="m-0">{serie1.description}</p>
          </Card>
        </div>
        <div className="card flex-auto flex-order-2">
          <Card
            title={serie2.name}
            subTitle={serie2.releaseDate}
            footer={footer}
            header={header(serie2.url)}
            className="md:w-25rem"
          >
            <p className="m-0">{serie2.description}</p>
          </Card>
        </div>
        <div className="card flex-auto flex-order-3">
          <Card
            title={serie2.name}
            subTitle={serie2.releaseDate}
            footer={footer}
            header={header(serie2.url)}
            className="md:w-25rem"
          >
            <p className="m-0">{serie2.description}</p>
          </Card>
        </div>
      </div>
      <div className="flex flex-row justify-content-between gap-6">
        <h2>Latest Release</h2>
      </div>
      <div className="flex align-items-start justify-content-center gap-2">
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
        <div className="card flex-auto flex-order-1">
          <Card
            title={serie1.name}
            subTitle={serie1.releaseDate}
            footer={footer}
            header={header(serie1.url)}
            className="md:w-25rem"
          >
            <p className="m-0">{serie1.description}</p>
          </Card>
        </div>
        <div className="card flex-auto flex-order-2">
          <Card
            title={serie2.name}
            subTitle={serie2.releaseDate}
            footer={footer}
            header={header(serie2.url)}
            className="md:w-25rem"
          >
            <p className="m-0">{serie2.description}</p>
          </Card>
        </div>
        <div className="card flex-auto flex-order-3">
          <Card
            title={serie2.name}
            subTitle={serie2.releaseDate}
            footer={footer}
            header={header(serie2.url)}
            className="md:w-25rem"
          >
            <p className="m-0">{serie2.description}</p>
          </Card>
        </div>
      </div>
      <div className="flex flex-row justify-content-between gap-6">
        <h2>Latest Release</h2>
      </div>
      <div className="flex align-items-start justify-content-center gap-2">
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
        <div className="card flex-auto flex-order-1">
          <Card
            title={serie1.name}
            subTitle={serie1.releaseDate}
            footer={footer}
            header={header(serie1.url)}
            className="md:w-25rem"
          >
            <p className="m-0">{serie1.description}</p>
          </Card>
        </div>
        <div className="card flex-auto flex-order-2">
          <Card
            title={serie2.name}
            subTitle={serie2.releaseDate}
            footer={footer}
            header={header(serie2.url)}
            className="md:w-25rem"
          >
            <p className="m-0">{serie2.description}</p>
          </Card>
        </div>
        <div className="card flex-auto flex-order-3">
          <Card
            title={serie2.name}
            subTitle={serie2.releaseDate}
            footer={footer}
            header={header(serie2.url)}
            className="md:w-25rem"
          >
            <p className="m-0">{serie2.description}</p>
          </Card>
        </div>
      </div>
      <footer className="flex flex-row justify-content-center gap-6 h-4rem font-bold">
        <Footer />
      </footer>
    </div>
  );
}
