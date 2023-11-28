import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { useDispatch, useSelector } from "react-redux";
import { getSeriesAsync, selectSeries } from "@/lib/redux";

export default function TemplateDemo() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const series = useSelector(selectSeries);

  //   useEffect(() => {
  //     dispatch(getSeriesAsync());
  //   }, []);

  const formatCurrency = (value: {
    toLocaleString: (
      arg0: string,
      arg1: { style: string; currency: string }
    ) => any;
  }) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const imageBodyTemplate = (serie: any) => {
    return (
      <img
        src={`https://primefaces.org/cdn/primereact/images/product/${serie.image}`}
        alt={serie.image}
        className="w-6rem shadow-2 border-round"
      />
    );
  };

  const priceBodyTemplate = (serie: any) => {
    return formatCurrency(serie.price);
  };

  const ratingBodyTemplate = (serie: any) => {
    return <Rating value={serie.rating} readOnly cancel={false} />;
  };

  const statusBodyTemplate = (serie: any) => {
    return (
      <Tag value={serie.inventoryStatus} severity={getSeverity(serie)}></Tag>
    );
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
  const footer = `In total there are ${
    products ? products.length : 0
  } products.`;

  return (
    <div>
      {series.map((serie) => (
        <div key={serie.id}>
          {serie.id} - {serie.name}
        </div>
      ))}
      <div className="card">
        <DataTable
          value={products}
          header={header}
          footer={footer}
          tableStyle={{ minWidth: "60rem" }}
        >
          <Column field="name" header="Name"></Column>
          <Column header="Image" body={imageBodyTemplate}></Column>
          <Column
            field="price"
            header="Price"
            body={priceBodyTemplate}
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
