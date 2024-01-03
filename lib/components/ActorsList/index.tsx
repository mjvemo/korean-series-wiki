import React, { useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Link from "next/link";
import { ActorDTO } from "@/lib/api/dtos/actor.dto";
import { useRouter } from "next/navigation";
import { getActorsAsync, useDispatch } from "@/lib/redux";
import { Button } from "primereact/button";

export interface ComponentProps {
  data: ActorDTO[];
}

export default function ActorsList(props: ComponentProps) {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActorsAsync());
  }, []);

  const imageBodyTemplate = (actor: any) => {
    return (
      <img
        src={actor.image}
        alt={actor.image}
        className="w-6rem shadow-2 border-round"
      />
    );
  };

  const onRowSelect = ({ data }: any) => {
    router.push(`/actors/${data.id}`);
  };
  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Actors</span>
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
    <div className="card justify-content-center p-4">
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
        globalFilterFields={["name", "age", "agency", "active"]}
        tableStyle={{ minWidth: "50rem" }}
        metaKeySelection={false}
        onRowSelect={onRowSelect}
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
          sortable
          style={{ width: "20%" }}
        ></Column>
        <Column field="age" header="Age" style={{ width: "20%" }}></Column>
        <Column
          field="agency"
          header="Agency"
          sortable
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="education"
          header="Education"
          sortable
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="active"
          header="Active"
          sortable
          style={{ width: "20%" }}
        ></Column>
        <Column
          sortable
          body={bodyTemplateEdit}
          style={{ width: "20%" }}
        ></Column>
        <Column
          field=""
          header=""
          sortable
          body={bodyTemplateDelete}
          style={{ width: "20%" }}
        ></Column>
      </DataTable>
    </div>
  );
}
