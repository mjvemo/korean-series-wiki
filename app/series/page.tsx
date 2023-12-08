"use client";

import { Image } from "primereact/image";
import { Button } from "primereact/button";
import Link from "next/link";
import { Footer } from "@/lib/components/Footer";
import { SerieCard } from "@/lib/components/SerieCard";
import { serie, serie1, serie2, serie3 } from "@/lib/models/serie.model";

import { useEffect, useRef } from "react";

import {
  getSeriesAsync,
  selectSeries,
  useDispatch,
  useSelector,
} from "@/lib/redux";
import SeriesList from "@/lib/components/SeriesList";
import SeriesListFormSelector from "@/lib/components/SeriesListFormSelector";

export default function BasicDemo() {
  const listOfCards = [serie, serie1, serie2, serie3];
  const dispatch = useDispatch();
  const series = useSelector(selectSeries);

  // LifeCycle - OnMount - First Time the component is rendered in the html/ui
  useEffect(() => {
    dispatch(getSeriesAsync());
  }, []);

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
        <SeriesList />
        <SeriesListFormSelector />
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
