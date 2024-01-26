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
    return <Image src={indexImage.url} alt={indexImage.name} width="1670" />;
  };

  return (
    <div>
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

      <div className="flex flex-row justify-content-between gap-6 m-6 ml-6 ">
        <h2>Top Korean Series</h2>
      </div>
      <div className="align-items-start justify-content-center">
        <SeriesCarouselCards data={series} />
      </div>
      <div className="flex align-items-start justify-content-center gap-4"></div>
      <div className="flex flex-row justify-content-between gap-6 m-6 ml-6">
        <h2>Top Korean Actors</h2>
      </div>
      <div className="flex align-items-start justify-content-center mb-8 gap-4">
        <ActorsCarouselCards data={actors} />
      </div>
    </div>
  );
}
