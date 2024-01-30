"use client";

import { Image } from "primereact/image";
import { Button } from "primereact/button";
import Link from "next/link";
import { Footer } from "@/lib/components/Footer";
import { SerieCard } from "@/lib/components/SerieCard";

import { useEffect, useRef } from "react";

import {
  getSeriesAsync,
  selectSeries,
  useDispatch,
  useSelector,
} from "@/lib/redux";
import SeriesListSelected from "@/lib/components/SeriesListSelected";
import SeriesList from "@/lib/components/SeriesList";

export interface ComponentProps {
  searchParams: { genre?: string };
}

export default function Page(props: ComponentProps) {
  const { genre } = props.searchParams;
  const dispatch = useDispatch();
  const series = useSelector(selectSeries);

  // LifeCycle - OnMount - First Time the component is rendered in the html/ui
  useEffect(() => {
    dispatch(getSeriesAsync(genre ? { genre } : undefined));
  }, []);

  return (
    <div className="flex flex-column justify-content-center flex-wrap row-gap-6">
      <Image
        width="1670"
        src="https://the-post-assets.sgp1.digitaloceanspaces.com/2021/06/Gumihonew-1896x800.jpg"
      ></Image>
      <div className="flex flex-column">
        <div className="flex flex-row justify-content-between align-items-center size-xl  gap-4 m-4">
          <h1 className="p-2 m-4">All Series</h1>
          <div>
            <Link href="/series/create">
              <Button
                label="Add New Serie"
                icon="pi pi-large"
                outlined
              ></Button>
            </Link>
          </div>
        </div>

        <div>
          <SeriesList data={series} />
        </div>
      </div>
    </div>
  );
}
