"use client";

import { Image } from "primereact/image";
import { Button } from "primereact/button";
import Link from "next/link";
import { Footer } from "@/lib/components/Footer";
import { SerieCard } from "@/lib/components/SerieCard";
import { serie, serie1, serie2, serie3 } from "@/lib/models/serie.model";

export default function BasicDemo() {
  const listOfCards = [serie, serie1, serie2, serie3];
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
      <div>
        <div className="flex flex-row justify-content-between gap-6">
          <h2>Romantic List</h2>
        </div>
        <div className="flex align-items-start justify-content-center gap-4">
          {listOfCards.map((serie) => (
            <SerieCard key={serie.id} serie={serie} />
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-content-between gap-6">
          <h2>Latest Release</h2>
        </div>
        <div className="flex align-items-start justify-content-center gap-4">
          {listOfCards.map((serie) => (
            <SerieCard key={serie.id} serie={serie} />
          ))}
        </div>
      </div>
      <footer className="flex flex-row justify-content-center gap-6 h-4rem font-bold">
        <Footer />
      </footer>
    </div>
  );
}
