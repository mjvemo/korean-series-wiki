import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NewsDTO } from "@/lib/api/dtos/news.dto";

export interface ComponentProps {
  data: NewsDTO[];
}

export default function NewsList(props: ComponentProps) {
  const router = useRouter();

  const nameBodyTemplate = (news: any) => {
    return <Link href={`/news/${news.id}`}>{news.name}</Link>;
  };

  const onRowSelect = ({ data }: any) => {
    router.push(`/news/${data.id}`);
  };

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">News</span>
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
            field="description"
            header="Description"
            style={{ width: "20%" }}
            sortable
          ></Column>
        </DataTable>
      </div>
    </div>
  );
}
