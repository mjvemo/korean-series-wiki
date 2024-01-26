import React, { useState, useEffect, useRef } from "react";
import { DataTable, DataTableFilterMeta } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import Link from "next/link";
import { SerieDTO } from "@/lib/api/dtos/serie.dto";
import { useRouter } from "next/navigation";
import { deleteSerieByIdAsync, useDispatch } from "@/lib/redux";
import { Dialog } from "primereact/dialog";
import DeleteConfirmDialog from "../DeleteConfirmDialog";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";
import { Chip } from "primereact/chip";

export interface ComponentProps {
  data: SerieDTO[];
}

export default function SeriesList(props: ComponentProps) {
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

  const genreBodyTemplate = (serie: any) => {
    return <Chip label={serie.genre} />;
  };

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

  const bodyTemplateEdit = (serie: any) => {
    return (
      <Link href={`/series/${serie.id}/edit`}>
        <Button icon="pi pi-pencil" text></Button>
      </Link>
    );
  };

  const bodyTemplateDelete = (data: SerieDTO) => {
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
    await dispatch(deleteSerieByIdAsync(toDelete.id));
    setDeleteDialogVisible(false);
    toast.current?.show({
      severity: "info",
      summary: "Serie deleted",
      detail: `Name: ${toDelete.name}`,
      life: 3000,
    });
    setToDelete({ id: "", name: "" });
  }
  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Series</span>
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
    <div>
      <div className="card m-4">
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
          filters={filters}
          filterDisplay="row"
          emptyMessage="No series found."
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
            body={genreBodyTemplate}
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
          <Column body={bodyTemplateEdit} style={{ width: "3%" }}></Column>
          <Column field="" header="" body={bodyTemplateDelete}></Column>
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
