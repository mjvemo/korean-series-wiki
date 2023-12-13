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
import { selectAwards, useDispatch, useSelector } from "@/lib/redux";
import { AwardDTO } from "@/lib/api/dtos/award.dto";
import { Button } from "primereact/button";
import { AwardFormPayload } from "@/lib/models/award.model";

export default function AwardsListFormSelector() {
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getAwardsAsync());
  //   }, []);

  const formik = useFormikContext<AwardFormPayload>();

  const allAwards = useSelector(selectAwards);
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
    const { awards } = formik.values;

    const ids = awards.map((award) => award.id);

    if (!ids.includes(event.data.id)) {
      formik.setFieldValue("cast", [...awards, event.data]);

      toast.current?.show({
        severity: "info",
        summary: "Award selected",
        detail: `Name: ${event.data.name}`,
        life: 3000,
      });
    } else {
      toast.current?.show({
        severity: "warn",
        summary: "Award already selected",
        detail: `Name: ${event.data.name}`,
        life: 3000,
      });
    }
  };

  const onRowUnselect = (event: DataTableUnselectEvent) => {
    toast.current?.show({
      severity: "warn",
      summary: "Award Unselected",
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
  const imageBodyTemplate = (allAwards: { url: string | undefined }) => {
    return (
      <Avatar
        image={allAwards.url}
        label="V"
        size="xlarge"
        style={{ backgroundColor: "#2196F3", color: "#ffffff" }}
        shape="circle"
      />
      // <Image src={allAwards.url} alt={allAwards.url} width="100" preview />
    );
  };

  const activeBodyTemplate = (allAwards: any) => {
    const stockClassName = classNames(
      "border-circle w-2rem h-2rem inline-flex font-bold justify-content-center align-items-center text-sm",
      {
        "bg-red-100 text-red-900": allAwards.active === 0,
        "bg-blue-100 text-blue-900":
          allAwards.active > 0 && allAwards.active <= 10,
        "bg-teal-100 text-teal-900": allAwards.acttive >= 10,
      }
    );
    return <div className={stockClassName}>{allAwards.active}</div>;
  };

  const actionTemplate = (data: AwardDTO) => {
    return (
      <Button
        icon="pi pi-times"
        outlined
        onClick={() => {
          const { awards } = formik.values;
          formik.setFieldValue(
            "cast",
            awards.filter((award) => award.id !== data.id)
          );

          toast.current?.show({
            severity: "info",
            summary: "Award removed",
            detail: `Name: ${data.name}`,
            life: 3000,
          });
        }}
      ></Button>
    );
  };

  const header = renderHeader();
  console.log(allAwards);
  return (
    <div className="flex flex-row justify-content-start">
      <div className="card justify-content-center p-4">
        <Toast ref={toast} />
        <DataTable
          value={allAwards}
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
      <div className="card justify-content-center p-4">
        <DataTable
          value={formik.values.awards}
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
            field="yearsActive"
            header="Active"
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
