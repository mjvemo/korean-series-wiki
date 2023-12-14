"use client";
import React, { useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Link from "next/link";
import { AwardDTO } from "@/lib/api/dtos/award.dto";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";

export interface ComponentProps {
  data: AwardDTO[];
}

export default function Awards(props: ComponentProps) {
  const router = useRouter();

  const nameBodyTemplate = (award: any) => {
    return <Link href={`/awards/${award.id}`}>{award.name}</Link>;
  };

  const onRowSelect = (award: any) => {
    router.push(`/awards/${award.id}`);
  };

  return (
    <div>
      <div className="flex flex-row justify-content-between size-xl  gap-4 m-4">
        <h1>Awards</h1>
        <Link href="awards/create">
          <Button label="Add New Award" icon="pi pi-plus" outlined></Button>
        </Link>
      </div>
      <div className="card justify-content-center p-4">
        <DataTable
          value={props.data}
          pageLinkSize={5}
          dataKey="id"
          stripedRows
          rows={10}
          tableStyle={{ minWidth: "50rem" }}
          onRowSelect={onRowSelect}
        >
          <Column header="Image" style={{ width: "20%" }}></Column>
          <Column
            field="name"
            header="Prize Name"
            body={nameBodyTemplate}
            style={{ width: "20%" }}
          ></Column>
          <Column field="age" header="Age" style={{ width: "20%" }}></Column>
          <Column field="year" header="Year" style={{ width: "20%" }}></Column>
          <Column
            field="category"
            header="Category"
            style={{ width: "20%" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
}
