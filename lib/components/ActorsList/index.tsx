import React, { useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Link from "next/link";
import { ActorDTO } from "@/lib/api/dtos/actor.dto";
import { useRouter } from "next/navigation";
import { getActorsAsync, useDispatch } from "@/lib/redux";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { all } from "axios";

export interface ComponentProps {
  data: ActorDTO[];
}

export default function ActorsList(props: ComponentProps) {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActorsAsync());
  }, []);

  const imageBodyTemplate = (allActors: { url: string | undefined }) => {
    return (
      <Avatar
        image={allActors.url}
        label="A"
        size="xlarge"
        style={{ backgroundColor: "#F66668", color: "#ffffff" }}
        shape="circle"
      />
      // <Image src={allActors.url} alt={allActors.url} width="100" preview />
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
      <Link href="/actors/id/edit">
        <Button icon="pi pi-pencil" text></Button>
      </Link>
    </div>
  );

  const bodyTemplateDelete = (
    <div>
      <Button icon="pi pi-trash" text></Button>
    </div>
  );

  return (
    <div className="card justify-content-center m-4">
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
          style={{ width: "5%", justifyContent: "center" }}
        ></Column>
        <Column
          field="name"
          header="Name"
          sortable
          style={{ width: "15%" }}
        ></Column>
        <Column field="age" header="Age" style={{ width: "10%" }}></Column>
        <Column
          field="agency"
          header="Agency"
          sortable
          style={{ width: "10%" }}
        ></Column>
        <Column
          field="education"
          header="Education"
          sortable
          style={{ width: "10%" }}
        ></Column>
        <Column
          field="yearsActive"
          header="Active"
          sortable
          style={{ width: "10%" }}
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
          style={{ width: "5%" }}
        ></Column>
      </DataTable>
    </div>
  );
}
