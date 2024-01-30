"use client";

import { Image } from "primereact/image";
import { IndexImage, indexImages } from "@/lib/models/images.model";
import { Carousel } from "primereact/carousel";
import { useSelector } from "react-redux";
import { selectSeries } from "@/lib/redux/slices/series/selectors";
import { selectActors } from "@/lib/redux/slices/actors/selectors";
import { getActorsAsync, getSeriesAsync, useDispatch } from "@/lib/redux";
import { useEffect } from "react";
import SeriesCarouselCards from "@/lib/components/SeriesCarouselCards";
import ActorsCarouselCards from "@/lib/components/ActorsCarouselCards";
import React from "react";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

// import { ProductService } from "./service/ProductService";

export default function IndexPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActorsAsync());
    dispatch(getSeriesAsync());
  }, []);

  const actors = useSelector(selectActors);
  const series = useSelector(selectSeries);

  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const imageTemplate = (indexImage: IndexImage) => {
    return (
      <Image
        src={indexImage.url}
        alt={indexImage.name}
        width="100%"
        height="auto"
      />
    );
  };

  return (
    <div className="flex-row md:flex-row">
      <div>
        <Carousel
          value={indexImages}
          numVisible={1}
          numScroll={1}
          itemTemplate={imageTemplate}
          responsiveOptions={responsiveOptions}
          showNavigators={false}
          autoplayInterval={3000}
        />
      </div>

      <div className="text-900 font-bold text-4xl ml-6 m-6 mb-8">
        Top Korean Series
      </div>

      <div className="align-items-start justify-content-center">
        <SeriesCarouselCards data={series} />
      </div>
      <div className="flex flex-row justify-content-between gap-6 m-6 ml-6 text-xl">
        <h1>Top Korean Actors</h1>
      </div>
      <div className="flex align-items-start justify-content-center mb-8 gap-4">
        <ActorsCarouselCards data={actors} />
      </div>

      <div className="surface-0 text-700 text-center mt-8 m-8">
        <div className="text-900 font-bold text-4xl mb-3">
          Top Korean Awards
        </div>
        <div className="text-700 text-2xl mb-5">
          Find here all the awards that offers a great ceremony for excellence
          in television in South Korea
        </div>
        <Button
          icon="pi pi-arrow-right"
          label="View"
          className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap mb-6 shadow-4"
        />
      </div>
    </div>
  );
}
