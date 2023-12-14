import React, { useEffect, useRef, useState } from "react";
import {
  DataTable,
  DataTableSelectEvent,
  DataTableUnselectEvent,
} from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { selectActors } from "@/lib/redux/slices/actors/selectors";
import { classNames } from "primereact/utils";
import { FilterMatchMode } from "primereact/api";
import { Avatar } from "primereact/avatar";
import { Toast } from "primereact/toast";
import { useFormikContext } from "formik";
import { SerieFormPayload } from "@/lib/models/serie.model";
import { getActorsAsync, useDispatch, useSelector } from "@/lib/redux";
import { ActorDTO } from "@/lib/api/dtos/actor.dto";
import { Button } from "primereact/button";

export default function ActorsListFormSelector() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActorsAsync());
  }, []);

  const formik = useFormikContext<SerieFormPayload>();

  const allActors = useSelector(selectActors);
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
    const { cast } = formik.values;

    const ids = cast.map((actor) => actor.id);

    if (!ids.includes(event.data.id)) {
      formik.setFieldValue("cast", [...cast, event.data]);

      toast.current?.show({
        severity: "info",
        summary: "Actor selected",
        detail: `Name: ${event.data.name}`,
        life: 3000,
      });
    } else {
      toast.current?.show({
        severity: "warn",
        summary: "Actor already selected",
        detail: `Name: ${event.data.name}`,
        life: 3000,
      });
    }
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
  const imageBodyTemplate = (allActors: { url: string | undefined }) => {
    return (
      <Avatar
        image={allActors.url}
        label="V"
        size="xlarge"
        style={{ backgroundColor: "#2196F3", color: "#ffffff" }}
        shape="circle"
      />
      // <Image src={allActors.url} alt={allActors.url} width="100" preview />
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

  const actionTemplate = (data: ActorDTO) => {
    return (
      <Button
        icon="pi pi-times"
        outlined
        onClick={() => {
          const { cast } = formik.values;
          formik.setFieldValue(
            "cast",
            cast.filter((actor) => actor.id !== data.id)
          );

          toast.current?.show({
            severity: "info",
            summary: "Actor removed",
            detail: `Name: ${data.name}`,
            life: 3000,
          });
        }}
      ></Button>
    );
  };

  const header = renderHeader();
  console.log(allActors);
  return (
    <div className="flex flex-row justify-content-start">
      <div className="card justify-content-center p-4">
        <Toast ref={toast} />
        <DataTable
          value={allActors}
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
            header="Active"
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
        </DataTable>
      </div>
      <div className="card justify-content-center p-4">
        <DataTable
          value={formik.values.cast}
          pageLinkSize={5}
          dataKey="id"
          stripedRows
          rows={10}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column
            header="Image"
            body={imageBodyTemplate}
            style={{ width: "20%" }}
          ></Column>
          <Column field="name" header="Name" style={{ width: "20%" }}></Column>
          <Column field="age" header="Age" style={{ width: "20%" }}></Column>
          <Column
            field="education"
            header="Education"
            style={{ width: "20%" }}
          ></Column>
          <Column
            field="agency"
            header="Agency"
            style={{ width: "20%" }}
          ></Column>

          <Column
            field="yearsActive"
            header="Active"
            style={{ width: "20%" }}
          ></Column>
          <Column
            field="About"
            header="About"
            style={{ width: "20%" }}
          ></Column>
          <Column
            header="Action"
            body={actionTemplate}
            style={{ width: "20%" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
}
