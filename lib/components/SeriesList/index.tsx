import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import Link from "next/link";
import { SerieDTO } from "@/lib/api/dtos/serie.dto";
import { useRouter } from "next/navigation";
import {
  getActorsBySerieIdAsync,
  getSeriesAsync,
  useDispatch,
} from "@/lib/redux";
import { Dialog } from "primereact/dialog";

export interface ComponentProps {
  data: SerieDTO[];
}

export default function SeriesList(props: ComponentProps) {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

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

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Series</span>
      <Button icon="pi pi-refresh" rounded raised />
    </div>
  );

  const bodyTemplateEdit = (serie: any) => {
    return (
      <Link href={`/series/${serie.id}/edit`}>
        <Button icon="pi pi-pencil" text></Button>
      </Link>
    );
  };

  const bodyTemplateDelete = () => {
    return (
      <Link href="">
        <Button icon="pi pi-trash" text onClick={() => setVisible(true)} />
      </Link>
    );
  };

  const footerContent = (
    <div className="flex flex-row gap-2 justify-content-end">
      <Button
        label="Delete"
        icon="pi pi-check"
        onClick={() => setVisible(false)}
        autoFocus
      />
      <Button
        label="Cancel"
        icon="pi pi-times"
        onClick={() => setVisible(false)}
        className="p-button-text"
      />
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
        <div className="card flex justify-content-center">
          <Dialog
            header="Delete"
            footer={footerContent}
            visible={visible}
            onHide={() => setVisible(false)}
            style={{ width: "35vw" }}
            breakpoints={{ "960px": "75vw", "641px": "100vw" }}
          >
            <p className="m-0">Are you sure you want to delete?</p>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
