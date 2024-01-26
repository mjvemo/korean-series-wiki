"use client";

import React, { useState } from "react";
import { Button } from "primereact/button";
import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
import { SerieDTO } from "@/lib/api/dtos/serie.dto";
import { Chip } from "primereact/chip";
import Link from "next/link";

export interface ComponentProps {
  data: SerieDTO[];
}
export default function SeriesCarouselCards(props: ComponentProps) {
  const responsiveOptions: CarouselResponsiveOption[] = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const productTemplate = (serie: SerieDTO) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center pb-5 shadow-2">
        <div className="mb-3">
          <Link href={`/series/${serie.id}`}>
            <img
              src={serie.image}
              alt={serie.name}
              className="w-full shadow-2"
            />
          </Link>
        </div>

        <div>
          {serie.rating}
          <h4 className="mb-1">{serie.name}</h4>
          <h4 className="mt-0 mb-3">{serie.releasedAt}</h4>
          <Chip label={serie.genre} />
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={props.data}
        numVisible={4}
        numScroll={4}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        itemTemplate={productTemplate}
        showIndicators={false}
      />
    </div>
  );
}
