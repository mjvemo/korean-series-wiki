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
import { Button } from "primereact/button";

import { ActorsFormPayload } from "@/lib/models/actor.model";
import { SerieDTO } from "@/lib/api/dtos/serie.dto";

export default function SeriesListFormSelector() {
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
  const imageBodyTemplate = (allSeries: { url: string | undefined }) => {
    return (
      <Avatar
        image={allSeries.url}
        label="V"
        size="xlarge"
        style={{ backgroundColor: "#2196F3", color: "#ffffff" }}
        shape="circle"
      />
      // <Image src={allSeries.url} alt={allSeries.url} width="100" preview />
    );
  };

  const activeBodyTemplate = (allSeries: any) => {
    const stockClassName = classNames(
      "border-circle w-2rem h-2rem inline-flex font-bold justify-content-center align-items-center text-sm",
      {
        "bg-red-100 text-red-900": allSeries.active === 0,
        "bg-blue-100 text-blue-900":
          allSeries.active > 0 && allSeries.active <= 10,
        "bg-teal-100 text-teal-900": allSeries.acttive >= 10,
      }
    );
    return <div className={stockClassName}>{allSeries.active}</div>;
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
            style={{ width: "20%" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            style={{ width: "20%" }}
            sortable
          ></Column>
          <Column
            field="age"
            header="Age"
            style={{ width: "20%" }}
            sortable
          ></Column>
          <Column
            field="education"
            header="Education"
            style={{ width: "20%" }}
            sortable
          ></Column>
          <Column
            field="agency"
            header="Agency"
            style={{ width: "20%" }}
            sortable
          ></Column>
          <Column
            field="yearsActive"
            header="Active Since"
            body={activeBodyTemplate}
            style={{ width: "20%" }}
            sortable
          ></Column>
          <Column
            field="about"
            header="About"
            style={{ width: "20%" }}
            sortable
          ></Column>
          <Column
            rowEditor
            headerStyle={{ width: "10%", minWidth: "8rem" }}
            bodyStyle={{ textAlign: "center" }}
          ></Column>
          <Column
            rowEditor
            headerStyle={{ width: "10%", minWidth: "8rem" }}
            bodyStyle={{ textAlign: "center" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
}
