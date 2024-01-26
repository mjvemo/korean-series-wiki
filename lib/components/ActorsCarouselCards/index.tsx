"use client";

import React, { useState } from "react";
import { Button } from "primereact/button";
import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
import { Chip } from "primereact/chip";
import { ActorDTO } from "@/lib/api/dtos/actor.dto";
import Link from "next/link";

export interface ComponentProps {
  data: ActorDTO[];
}
export default function actorsCarouselCards(props: ComponentProps) {
  const [products, setProducts] = useState<ActorDTO[]>([]);
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

  const productTemplate = (actor: ActorDTO) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center pb-5 shadow-2 ">
        <Link href={`/actors/${actor.id}`}>
          <div className="mb-3">
            <img
              src={actor.imageUrl}
              alt={actor.name}
              className="w-full shadow-2"
            />
          </div>
        </Link>
        <div>
          {actor.age}
          <h4 className="mb-1">{actor.name}</h4>
          <h4 className="mt-0 mb-3">{actor.agency}</h4>
          <Chip label={actor.education} />
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
