import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import Link from "next/link";
import { AwardDTO } from "@/lib/api/dtos/award.dto";
import { useRouter } from "next/navigation";

export interface ComponentProps {
  data: AwardDTO[];
}

export default function AwardsList(props: ComponentProps) {
  const router = useRouter();

  const nameBodyTemplate = (award: any) => {
    return <Link href={`/awards/${award.id}`}>{award.name}</Link>;
  };

  const onRowSelect = ({ data }: any) => {
    router.push(`/awards/${data.id}`);
  };

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Awards</span>
      <Button icon="pi pi-refresh" rounded raised />
    </div>
  );

  return (
    <div>
      <div className="card">
        <DataTable
          value={props.data}
          selectionMode="single"
          pageLinkSize={5}
          dataKey="id"
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
            header="name"
            body={nameBodyTemplate}
            sortable
            style={{ width: "20%" }}
          ></Column>
          <Column
            field="year"
            header="year"
            style={{ width: "20%" }}
            sortable
          ></Column>
          <Column
            field="category"
            header="category"
            style={{ width: "20%" }}
            sortable
          ></Column>
        </DataTable>
      </div>
    </div>
  );
}
