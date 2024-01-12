import React, { useRef, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NewsDTO } from "@/lib/api/dtos/news.dto";
import { Toast } from "primereact/toast";
import { deleteNewsByIdAsync, useDispatch } from "@/lib/redux";
import DeleteConfirmDialog from "../DeleteConfirmDialog";

export interface ComponentProps {
  data: NewsDTO[];
}

export default function NewsList(props: ComponentProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
  const [toDelete, setToDelete] = useState({ name: "", id: "" });
  const toast = useRef<Toast>(null);

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

  const bodyTemplateEdit = (news: any) => {
    return (
      <Link href={`/news/${news.id}/edit`}>
        <Button icon="pi pi-pencil" text></Button>
      </Link>
    );
  };

  const bodyTemplateDelete = (data: NewsDTO) => {
    return (
      <Link href="">
        <Button
          icon="pi pi-trash"
          text
          onClick={() => {
            setToDelete({ id: data.id, name: data.name });
            setDeleteDialogVisible(true);
          }}
        />
      </Link>
    );
  };

  async function handleDeleteConfirm() {
    await dispatch(deleteNewsByIdAsync(toDelete.id));
    setDeleteDialogVisible(false);
    toast.current?.show({
      severity: "info",
      summary: "News deleted",
      detail: `Name: ${toDelete.name}`,
      life: 3000,
    });
    setToDelete({ id: "", name: "" });
  }

  return (
    <div>
      <div className="card">
        <Toast ref={toast} />
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
            field="publishedAt"
            header="publishedAt"
            style={{ width: "20%" }}
            sortable
          ></Column>
          <Column
            field="description"
            header="Description"
            style={{ width: "20%" }}
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
          <DeleteConfirmDialog
            visible={deleteDialogVisible}
            message={`Are you sure you want to delete actor ${toDelete.name}`}
            onCancelDelete={() => setDeleteDialogVisible(false)}
            onConfirmDelete={() => handleDeleteConfirm()}
            onHide={() => setDeleteDialogVisible(false)}
          />
        </div>
      </div>
    </div>
  );
}
