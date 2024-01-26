"use client";

import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
import { Tag } from "primereact/tag";
import { IndexImage, indexImages } from "@/lib/models/images.model";
import {
  getActorsAsync,
  getSeriesAsync,
  selectActors,
  selectSeries,
  useDispatch,
  useSelector,
} from "@/lib/redux";

interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

export default function CarouselCards() {
  const [products, setProducts] = useState<Product[]>([]);
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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActorsAsync());
    dispatch(getSeriesAsync());
  }, []);

  const actors = useSelector(selectActors);
  const series = useSelector(selectSeries);

  const productTemplate = (product: Product) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          <img
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.name}
            className="w-6 shadow-2"
          />
        </div>
        <div>
          <h4 className="mb-1">{product.name}</h4>
          <h6 className="mt-0 mb-3">${product.price}</h6>
          <Tag value={product.inventoryStatus}></Tag>
          <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
            <Button icon="pi pi-search" rounded />
            <Button icon="pi pi-star-fill" rounded severity="success" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={indexImages}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        itemTemplate={productTemplate}
      />
    </div>
  );
}
