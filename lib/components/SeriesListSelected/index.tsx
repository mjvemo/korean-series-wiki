import React, { useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useSelector } from "react-redux";
import { useDispatch, getSeriesAsync } from "@/lib/redux";
import { selectSeries } from "@/lib/redux/slices/series/selectors";
import Link from "next/link";
import { Rating } from "primereact/rating";
import router from "next/router";

export default function SeriesListSelected() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSeriesAsync());
  }, []);

  const allSeries = useSelector(selectSeries);

  console.log(allSeries);
  const nameBodyTemplate = (serie: any) => {
    return <Link href={`/series/${serie.id}`}>{serie.name}</Link>;
  };

  const imageBodyTemplate = (serie: any) => {
    return (
      <img
        src={serie.image}
        alt={serie.image}
        className="w-6rem shadow-2 border-round"
      />
    );
  };

  const ratingBodyTemplate = (serie: any) => {
    return <Rating value={serie.rating} readOnly cancel={false} />;
  };

  const onRowSelect = (serie: any) => {
    router.push(`/series/${serie.id}`);
  };

  return (
    <div className="card justify-content-center p-4">
      <DataTable
        value={allSeries}
        pageLinkSize={5}
        dataKey="id"
        stripedRows
        rows={10}
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column
          header="Image"
          body={imageBodyTemplate}
          sortable
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="name"
          header="Name"
          style={{ width: "20%" }}
          sortable
          body={nameBodyTemplate}
        ></Column>
        <Column
          field="releasedAt"
          header="ReleasedAt"
          style={{ width: "20%" }}
          sortable
        ></Column>
        <Column
          field="pg"
          header="PG"
          style={{ width: "20%" }}
          sortable
        ></Column>
        <Column
          field="rating"
          header="Rating"
          body={ratingBodyTemplate}
          style={{ width: "20%" }}
          sortable
        ></Column>
        <Column
          field="genre"
          header="Genre"
          style={{ width: "20%" }}
          sortable
        ></Column>
        <Column
          field="directedBy"
          header="Director"
          style={{ width: "20%" }}
          sortable
        ></Column>
        <Column
          field="studio"
          header="Studio"
          style={{ width: "20%" }}
          sortable
        ></Column>
        <Column
          field="description"
          header="Description"
          style={{ width: "20%" }}
          sortable
        ></Column>
      </DataTable>
    </div>
  );
}
