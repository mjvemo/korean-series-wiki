import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { useSelector } from "react-redux";
import { getActorsAsync } from "@/lib/redux/slices/actors/thunks";
import { selectActors } from "@/lib/redux/slices/actors/selectors";
import { useDispatch } from "@/lib/redux";
import { Image } from "primereact/image";
import { classNames } from "primereact/utils";
import { FilterMatchMode, FilterOperator } from "primereact/api";
export default function RowEditingDemo() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActorsAsync());
  }, []);

  const allActors = useSelector(selectActors);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    age: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    agency: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    active: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });
  const onGlobalFilterChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <span className="p-input-icon-left">
        <InputText
          placeholder="Search"
          value={globalFilterValue}
          onChange={onGlobalFilterChange}
          type="text"
          className="p-inputtext-sm"
          // unstyled
        />{" "}
      </span>
    );
  };
  const imageBodyTemplate = (allActors: { url: string | undefined }) => {
    return (
      <Image src={allActors.url} alt={allActors.url} width="100" preview />
    );
  };

  const activeBodyTemplate = (allActors: any) => {
    const stockClassName = classNames(
      "border-circle w-2rem h-2rem inline-flex font-bold justify-content-center align-items-center text-sm",
      {
        "bg-red-100 text-red-900": allActors.active === 0,
        "bg-blue-100 text-blue-900":
          allActors.active > 0 && allActors.active <= 10,
        "bg-teal-100 text-teal-900": allActors.acttive >= 10,
      }
    );
    return <div className={stockClassName}>{allActors.active}</div>;
  };
  const header = renderHeader();
  console.log(allActors);
  return (
    <div className="card  p-4">
      <DataTable
        value={allActors}
        pageLinkSize={5}
        dataKey="id"
        header={header}
        paginator
        rows={10}
        filters={filters}
        globalFilterFields={["name", "age", "agency", "active"]}
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column header="Image" body={imageBodyTemplate}></Column>
        <Column field="name" header="Name" style={{ width: "20%" }}></Column>
        <Column field="age" header="Age" style={{ width: "20%" }}></Column>
        <Column
          field="agency"
          header="Agency"
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="education"
          header="Education"
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="active"
          header="Active"
          body={activeBodyTemplate}
          style={{ width: "20%" }}
        ></Column>
        <Column
          rowEditor
          headerStyle={{ width: "10%", minWidth: "8rem" }}
          bodyStyle={{ textAlign: "center" }}
        ></Column>
      </DataTable>
    </div>
  );
}
