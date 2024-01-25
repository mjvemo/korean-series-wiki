import React, { useRef, useState } from "react";
import { DataTable, DataTableFilterMeta } from "primereact/datatable";
import { Column } from "primereact/column";
import Link from "next/link";
import { ActorDTO } from "@/lib/api/dtos/actor.dto";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import DeleteConfirmDialog from "../DeleteConfirmDialog";
import { deleteActorByIdAsync, useDispatch } from "@/lib/redux";
import { Toast } from "primereact/toast";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";

export interface ComponentProps {
  data: ActorDTO[];
}

export default function ActorsList(props: ComponentProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
  const [toDelete, setToDelete] = useState({ name: "", id: "" });
  const toast = useRef<Toast>(null);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState<DataTableFilterMeta>({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });

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

  const bodyTemplateEdit = (actor: any) => {
    return (
      <Link href={`/actors/${actor.id}/edit`}>
        <Button icon="pi pi-pencil" text></Button>
      </Link>
    );
  };

  const bodyTemplateDelete = (data: ActorDTO) => {
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
    await dispatch(deleteActorByIdAsync(toDelete.id));
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
      <span className="text-xl text-900 font-bold">Actors</span>
      <div className="flex justify-content-end gap-4">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
        <Button icon="pi pi-refresh" rounded raised />
      </div>
    </div>
  );

  return (
    <div className="card justify-content-center m-4">
      <Toast ref={toast} />
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
        globalFilterFields={["name", "age", "agency", "education", "active"]}
        tableStyle={{ minWidth: "50rem" }}
        metaKeySelection={false}
        onRowSelect={onRowSelect}
        emptyMessage="No actors found."
        filters={filters}
        filterDisplay="row"
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
          filterField="name"
        ></Column>
        <Column
          field="age"
          header="Age"
          style={{ width: "10%" }}
          filterField="age"
        ></Column>
        <Column
          field="agency"
          header="Agency"
          sortable
          style={{ width: "10%" }}
          filterField="agency"
        ></Column>
        <Column
          field="education"
          header="Education"
          sortable
          style={{ width: "10%" }}
          filterField="education"
        ></Column>
        <Column
          field="yearsActive"
          header="Active"
          sortable
          style={{ width: "10%" }}
          filterField="active"
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
      <DeleteConfirmDialog
        visible={deleteDialogVisible}
        message={`Are you sure you want to delete actor ${toDelete.name}`}
        onCancelDelete={() => setDeleteDialogVisible(false)}
        onConfirmDelete={() => handleDeleteConfirm()}
        onHide={() => setDeleteDialogVisible(false)}
      />
    </div>
  );
}
