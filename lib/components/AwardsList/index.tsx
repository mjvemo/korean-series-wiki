import React, { useEffect, useRef, useState } from "react";
import { DataTable, DataTableFilterMeta } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import Link from "next/link";
import { AwardDTO } from "@/lib/api/dtos/award.dto";
import { useRouter } from "next/navigation";
import { deleteAwardByIdAsync, useDispatch } from "@/lib/redux";
import { Toast } from "primereact/toast";
import DeleteConfirmDialog from "../DeleteConfirmDialog";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";

export interface ComponentProps {
  data: AwardDTO[];
}

export default function AwardsList(props: ComponentProps) {
  const dispatch = useDispatch();
  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
  const [toDelete, setToDelete] = useState({ name: "", id: "" });

  const router = useRouter();
  const toast = useRef<Toast>(null);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState<DataTableFilterMeta>({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });

  // const nameBodyTemplate = (award: any) => {
  //   return (
  //     <Link style={{ textDecoration: "none" }} href={`/awards/${award.id}`}>
  //       {award.name}
  //     </Link>
  //   );
  // };
  const imageBodyTemplate = (award: any) => {
    return (
      <img
        src={award.image}
        alt={award.image}
        className="w-6rem shadow-2 border-round"
      />
    );
  };

  const onRowSelect = ({ data }: any) => {
    router.push(`/awards/${data.id}`);
  };

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

  const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let _filters = { ...filters };

    // @ts-ignore
    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
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

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Awards</span>
      <div className="flex justify-content-end gap-4">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    </div>
  );

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
          globalFilterFields={["name", "year", "category"]}
          emptyMessage="No awards found."
          tableStyle={{ minWidth: "50rem" }}
          metaKeySelection={false}
          onRowSelect={onRowSelect}
          filters={filters}
          filterDisplay="row"
        >
          <Column
            field="image"
            header="image"
            sortable
            style={{ width: "20%" }}
            filterField="image"
            body={imageBodyTemplate}
          ></Column>
          <Column
            field="name"
            header="name"
            sortable
            style={{ width: "20%" }}
            filterField="name"
          ></Column>
          <Column
            field="year"
            header="year"
            style={{ width: "20%" }}
            filterField="year"
            sortable
          ></Column>
          <Column
            field="category"
            header="category"
            style={{ width: "20%" }}
            filterField="category"
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
            style={{ width: "3%" }}
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
