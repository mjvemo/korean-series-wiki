import React, { useEffect, useRef, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import Link from "next/link";
import { AwardDTO } from "@/lib/api/dtos/award.dto";
import { useRouter } from "next/navigation";
import { useDispatch } from "@/lib/redux";
import { deleteAwardByIdAsync, getAwardsAsync } from "@/lib/redux";
import { Toast } from "primereact/toast";
import DeleteConfirmDialog from "../DeleteConfirmDialog";

export interface ComponentProps {
  data: AwardDTO[];
}

export default function AwardsList(props: ComponentProps) {
  const dispatch = useDispatch();
  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
  const [toDelete, setToDelete] = useState({ name: "", id: "" });
  const router = useRouter();
  const toast = useRef<Toast>(null);

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

  const bodyTemplateEdit = (award: any) => {
    return (
      <Link href={`/awards/${award.id}/edit`}>
        <Button icon="pi pi-pencil" text></Button>
      </Link>
    );
  };
  const bodyTemplateDelete = (data: AwardDTO) => {
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
    await dispatch(deleteAwardByIdAsync(toDelete.id));
    setDeleteDialogVisible(false);
    toast.current?.show({
      severity: "info",
      summary: "Actor deleted",
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
          <Column
            field=""
            header=""
            style={{ width: "3%" }}
            sortable
            body={bodyTemplateEdit}
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
