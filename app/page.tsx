"use client";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { serie, serie1, serie2 } from "@/lib/models/serie.model";
import { actor, actor1, actor2 } from "@/lib/models/actor.model";
import { IndexImage, indexImages } from "@/lib/models/images.model";
import { Carousel } from "primereact/carousel";
import { Footer } from "@/lib/components/Footer";
import { SerieCard } from "@/lib/components/SerieCard";
import Link from "next/link";
import SeriesList from "@/lib/components/SeriesList";
import { useSelector } from "react-redux";
import { selectSeries } from "@/lib/redux/slices/series/selectors";
import { selectActors } from "@/lib/redux/slices/actors/selectors";
import ActorsList from "@/lib/components/ActorsList";

// import { ProductService } from "./service/ProductService";

export default function IndexPage() {
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

  const actors = useSelector(selectActors);
  const series = useSelector(selectSeries);
  const listOfCards = [actors, series];

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

      <div className="flex flex-row justify-content-between gap-6 m-4">
        <h2>Top 10 Series</h2>
        <div className="flex flex-row gap-4">
          <Link href="/series/create">
            <Button
              label="Añadir Nuevo"
              icon="pi pi-plus"
              size="small"
              outlined
            ></Button>
          </Link>
        </div>
      </div>
      <div className="flex align-items-start justify-content-center gap-4">
        <SeriesList data={series} />
      </div>
      <div className="flex flex-row justify-content-between gap-6 m-4">
        <h2>Top 10 Actors</h2>
        <div className="flex flex-row gap-4">
          <Link href="/series/create">
            <Button
              label="Añadir Nuevo"
              icon="pi pi-plus"
              size="small"
              outlined
            ></Button>
          </Link>
        </div>
      </div>
      <div className="flex align-items-start justify-content-center gap-4">
        <ActorsList data={actors} />
      </div>
      <footer className="flex flex-row justify-content-center gap-6 h-4rem font-bold mt-4">
        <Footer />
      </footer>
    </div>
  );
}
