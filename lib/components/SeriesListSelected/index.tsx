import React, { useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useSelector } from "react-redux";
import { useDispatch, getSeriesAsync } from "@/lib/redux";
import { selectSeries } from "@/lib/redux/slices/series/selectors";
import Link from "next/link";
import { Rating } from "primereact/rating";
import { useFormikContext } from "formik";
import { SerieDTO } from "@/lib/api/dtos/serie.dto";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";

interface SerieListSelectorFormPayload {
  series: SerieDTO[];
}

export default function SeriesListSelected() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSeriesAsync());
  }, []);

  const formik = useFormikContext<SerieListSelectorFormPayload>();
  const toast = useRef<Toast>(null);

  const imageBodyTemplate = (serie: any) => {
    return (
      <img
        src={serie.image}
        alt={serie.image}
        className="w-6rem shadow-2 border-round"
      />
    );
  };

  const actionTemplate = (data: SerieDTO) => {
    return (
      <Button
        icon="pi pi-times"
        outlined
        onClick={() => {
          const { series } = formik.values;
          formik.setFieldValue(
            "series",
            series.filter((serie) => serie.id !== data.id)
          );

          toast.current?.show({
            severity: "info",
            summary: "Serie removed",
            detail: `Name: ${data.name}`,
            life: 3000,
          });
        }}
      ></Button>
    );
  };
  return (
    <div className="card justify-content-center p-4">
      <DataTable
        value={formik.values.series}
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
          field="action"
          header="action"
          body={actionTemplate}
          style={{ width: "20%" }}
          sortable
        ></Column>
      </DataTable>
    </div>
  );
}
