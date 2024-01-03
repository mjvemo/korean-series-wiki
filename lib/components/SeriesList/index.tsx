import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import Link from "next/link";
import { SerieDTO } from "@/lib/api/dtos/serie.dto";
import { useRouter } from "next/navigation";
import { getSeriesAsync, useDispatch } from "@/lib/redux";

export interface ComponentProps {
  data: SerieDTO[];
}

export default function SeriesList(props: ComponentProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  // const series = useSelector(selectSeries);

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

  const ratingBodyTemplate = (serie: any) => {
    return <Rating value={serie.rating} readOnly cancel={false} />;
  };

  const onRowSelect = ({ data }: any) => {
    router.push(`/series/${data.id}`);
  };

  // const activeBodyTemplate = (allSeries: any) => {
  //   const stockClassName = classNames(
  //     "border-circle w-2rem h-2rem inline-flex font-bold justify-content-center align-items-center text-sm",
  //     {
  //       "bg-red-100 text-red-900": allSeries.active === 0,
  //       "bg-blue-100 text-blue-900":
  //         allSeries.active > 0 && allSeries.active <= 10,
  //       "bg-teal-100 text-teal-900": allSeries.acttive >= 10,
  //     }
  //   );
  //   return <div className={stockClassName}>{allSeries.active}</div>;
  // };

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Series</span>
      <Button icon="pi pi-refresh" rounded raised />
    </div>
  );

  const bodyTemplateEdit = (
    <div>
      <Button icon="pi pi-pencil" text></Button>
    </div>
  );

  const bodyTemplateDelete = (
    <div>
      <Button icon="pi pi-trash" text></Button>
    </div>
  );

  return (
    <div>
      <div className="card m-4">
        <DataTable
          value={props.data}
          pageLinkSize={5}
          dataKey="id"
          selectionMode="single"
          header={header}
          paginator
          stripedRows
          sortMode="multiple"
          removableSort
          rows={10}
          globalFilterFields={[
            "name",
            "releaseAt",
            "pg",
            "rating",
            "genre",
            "directedBy",
            "studio",
          ]}
          tableStyle={{ minWidth: "50rem" }}
          metaKeySelection={false}
          onRowSelect={onRowSelect}
        >
          <Column
            header="Image"
            body={imageBodyTemplate}
            sortable
            style={{ width: "10%" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            style={{ width: "15%" }}
            sortable
          ></Column>
          <Column
            field="releasedAt"
            header="ReleasedAt"
            style={{ width: "15%" }}
            sortable
          ></Column>
          <Column
            field="pg"
            header="PG"
            style={{ width: "10%" }}
            sortable
          ></Column>
          <Column
            field="rating"
            header="Rating"
            body={ratingBodyTemplate}
            style={{ width: "15%" }}
            sortable
          ></Column>
          <Column
            field="genre"
            header="Genre"
            style={{ width: "12%" }}
            sortable
          ></Column>
          <Column
            field="directedBy"
            header="Director"
            style={{ width: "12%" }}
            sortable
          ></Column>
          <Column
            field="studio"
            header="Studio"
            style={{ width: "12%" }}
            sortable
          ></Column>
          <Column
            sortable
            body={bodyTemplateEdit}
            style={{ width: "3%" }}
          ></Column>
          <Column
            field=""
            header=""
            sortable
            body={bodyTemplateDelete}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
}
