import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import {
  useDispatch,
  useSelector,
  getSeriesAsync,
  selectSeries,
} from "@/lib/redux";

import Link from "next/link";

export default function TemplateDemo() {
  const dispatch = useDispatch();
  const series = useSelector(selectSeries);

  useEffect(() => {
    dispatch(getSeriesAsync());
  }, []);

  // const formatCurrency = (value: {
  //   toLocaleString: (
  //     arg0: string,
  //     arg1: { style: string; currency: string }
  //   ) => any;
  // }) => {
  //   return value.toLocaleString("en-US", {
  //     style: "currency",
  //     currency: "USD",
  //   });
  // };

  const imageBodyTemplate = (serie: any) => {
    return (
      <img
        src={serie.image}
        alt={serie.image}
        className="w-6rem shadow-2 border-round"
      />
    );
  };

  const priceBodyTemplate = (serie: any) => {
    return <div>{serie.price}</div>;
  };

  const ratingBodyTemplate = (serie: any) => {
    return <Rating value={serie.rating} readOnly cancel={false} />;
  };

  const statusBodyTemplate = (serie: any) => {
    return (
      <Tag value={serie.inventoryStatus} severity={getSeverity(serie)}></Tag>
    );
  };

  const nameBodyTemplate = (serie: any) => {
    return <Link href={`/series/${serie.id}`}>{serie.name}</Link>;
  };

  const getSeverity = (serie: any) => {
    switch (serie.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Products</span>
      <Button icon="pi pi-refresh" rounded raised />
    </div>
  );

  return (
    <div>
      <div className="card">
        <DataTable
          value={series}
          header={header}
          tableStyle={{ minWidth: "60rem" }}
        >
          <Column header="Image" body={imageBodyTemplate}></Column>
          <Column field="name" body={nameBodyTemplate} header="Name"></Column>
          <Column
            field="price"
            body={priceBodyTemplate}
            header="Price"
          ></Column>
          <Column field="category" header="Category"></Column>
          <Column
            field="rating"
            header="Reviews"
            body={ratingBodyTemplate}
          ></Column>
          <Column header="Status" body={statusBodyTemplate}></Column>
        </DataTable>
      </div>
    </div>
  );
}
