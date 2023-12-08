import React, { useEffect, useRef, useState } from "react";
import {
  DataTable,
  DataTableSelectEvent,
  DataTableUnselectEvent,
} from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { useSelector } from "react-redux";
import { selectActors } from "@/lib/redux/slices/actors/selectors";
import { classNames } from "primereact/utils";
import { FilterMatchMode } from "primereact/api";
import { Avatar } from "primereact/avatar";
import { Toast } from "primereact/toast";

export default function RowEditingDemo() {
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getActorsAsync());
  }, []);

  const allNews = useSelector(selectActors);
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
    toast.current?.show({
      severity: "info",
      summary: "Product Selected",
      detail: `Name: ${event.data.name}`,
      life: 3000,
    });
  };

  const onRowUnselect = (event: DataTableUnselectEvent) => {
    toast.current?.show({
      severity: "warn",
      summary: "Product Unselected",
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
  const imageBodyTemplate = (allNews: { url: string | undefined }) => {
    return (
      <Avatar
        image={allNews.url}
        label="V"
        size="xlarge"
        style={{ backgroundColor: "#2196F3", color: "#ffffff" }}
        shape="circle"
      />
      // <Image src={allNews.url} alt={allNews.url} width="100" preview />
    );
  };

  const activeBodyTemplate = (allNews: any) => {
    const stockClassName = classNames(
      "border-circle w-2rem h-2rem inline-flex font-bold justify-content-center align-items-center text-sm",
      {
        "bg-red-100 text-red-900": allNews.active === 0,
        "bg-blue-100 text-blue-900": allNews.active > 0 && allNews.active <= 10,
        "bg-teal-100 text-teal-900": allNews.acttive >= 10,
      }
    );
    return <div className={stockClassName}>{allNews.active}</div>;
  };
  const header = renderHeader();
  console.log(allNews);
  return (
    <div className="card justify-content-center p-4">
      <Toast ref={toast} />
      <DataTable
        value={allNews}
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
          field="year"
          header="Year"
          style={{ width: "20%" }}
          sortable
        ></Column>
        <Column
          field="description"
          header="description"
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
  );
}
