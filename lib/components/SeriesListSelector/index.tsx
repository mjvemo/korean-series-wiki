import React, { useEffect, useRef, useState } from "react";
import {
  DataTable,
  DataTableSelectEvent,
  DataTableUnselectEvent,
} from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { FilterMatchMode } from "primereact/api";
import { Avatar } from "primereact/avatar";
import { Toast } from "primereact/toast";
import { useFormikContext } from "formik";
import {
  getSeriesAsync,
  selectSeries,
  useDispatch,
  useSelector,
} from "@/lib/redux";

import { ActorsFormPayload } from "@/lib/models/actor.model";
import { Rating } from "primereact/rating";

export default function SeriesListSelector() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSeriesAsync());
  }, []);

  const formik = useFormikContext<ActorsFormPayload>();

  const allSeries = useSelector(selectSeries);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    age: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    agency: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    active: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });
  const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let _filters = { ...filters };

    // @ts-ignore
    _filters["global"].value = value;
    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const toast = useRef<Toast>(null);

  const onRowSelect = (event: DataTableSelectEvent) => {
    const { series } = formik.values;

    const ids = series.map((serie: any) => serie.id);

    if (!ids.includes(event.data.id)) {
      formik.setFieldValue("series", [...series, event.data]);

      toast.current?.show({
        severity: "info",
        summary: "Serie selected",
        detail: `Name: ${event.data.name}`,
        life: 3000,
      });
    } else {
      toast.current?.show({
        severity: "warn",
        summary: "Serie already selected",
        detail: `Name: ${event.data.name}`,
        life: 3000,
      });
    }
  };

  const onRowUnselect = (event: DataTableUnselectEvent) => {
    toast.current?.show({
      severity: "warn",
      summary: "Serie Unselected",
      detail: `Name: ${event.data.name}`,
      life: 3000,
    });
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <span className="p-input-icon-left">
          <InputText
            placeholder="Search"
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            type="text"
            className="p-inputtext-xl justify-content-end"
            // unstyled
          />{" "}
        </span>
      </div>
    );
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

  const header = renderHeader();
  console.log(allSeries);
  return (
    <div className="flex flex-row justify-content-start">
      <div className="card justify-content-center p-4">
        <Toast ref={toast} />
        <DataTable
          value={allSeries}
          selectionMode="single"
          pageLinkSize={5}
          dataKey="id"
          header={header}
          paginator
          stripedRows
          sortMode="multiple"
          removableSort
          rows={10}
          filters={filters}
          globalFilterFields={["name", "age", "agency", "active"]}
          tableStyle={{ minWidth: "50rem" }}
          onRowSelect={onRowSelect}
          onRowUnselect={onRowUnselect}
          metaKeySelection={false}
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
        </DataTable>
      </div>
    </div>
  );
}
