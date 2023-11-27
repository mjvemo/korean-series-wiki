import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { Tag } from "primereact/tag";
import { useDispatch, useSelector } from "react-redux";
import { getActorsByIdAsync } from "@/lib/redux/slices/actors/thunks";
import { selectActiveActor } from "@/lib/redux/slices/actors/selectors";
import { Nullable } from "primereact/ts-helpers";
export interface ComponentProps {
  params: { id: string };
}

export default function RowEditingDemo(props: ComponentProps) {
  const { id } = props.params;
  const [actors, setActors] = useState(null);
  const [statuses] = useState(["INSTOCK", "LOWSTOCK", "OUTOFSTOCK"]);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getActorsByIdAsync(id));
  // }, []);

  const activeActor = useSelector(selectActiveActor);

  // const onRowEditComplete = (e: { newData: any; index: any }) => {
  //   actors;
  //   let _actors = [...activeActor];
  //   let { newData, index } = e;

  //   _actors[index] = newData;

  //   setActors(_actors);
  // };

  const textEditor = (options: {
    value: string | undefined;
    editorCallback: (arg0: string) => void;
  }) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  const statusEditor = (options: {
    value: any;
    editorCallback: (arg0: any) => void;
  }) => {
    return (
      <Dropdown
        value={options.value}
        options={statuses}
        onChange={(e) => options.editorCallback(e.value)}
        placeholder="Select a Status"
        itemTemplate={(option) => {
          return <Tag value={option}></Tag>;
        }}
      />
    );
  };

  const priceEditor = (options: {
    value: number | null | undefined;
    editorCallback: (arg0: Nullable<number | null>) => void;
  }) => {
    return (
      <InputNumber
        value={options.value}
        onValueChange={(e) => options.editorCallback(e.value)}
        mode="currency"
        currency="USD"
        locale="en-US"
      />
    );
  };

  const statusBodyTemplate = (rowData: {
    inventoryStatus:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | React.PromiseLikeOfReactNode
      | null
      | undefined;
  }) => {
    return <Tag value={rowData.inventoryStatus}></Tag>;
  };

  const priceBodyTemplate = (rowData: { price: number | bigint }) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(rowData.price);
  };
  const renderHeader = () => {
    return (
      <span className="p-input-icon-left">
        <InputText
          placeholder="Search"
          type="text"
          className="p-inputtext-sm"
          keyfilter="int"
        />{" "}
      </span>
    );
  };
  const header = renderHeader();
  return (
    <div className="card  p-4">
      <DataTable
        // value={actor}
        editMode="row"
        dataKey="id"
        header={header}
        paginator
        // onRowEditComplete={onRowEditComplete}
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column
          field="name"
          header="Name"
          // editor={(options) => textEditor(options)}
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="inventoryStatus"
          header="Age"
          body={statusBodyTemplate}
          // editor={(options) => statusEditor(options)}
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="price"
          header="Agency"
          body={priceBodyTemplate}
          // editor={(options) => priceEditor(options)}
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="price"
          header="Education"
          body={priceBodyTemplate}
          // editor={(options) => priceEditor(options)}
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="price"
          header="Active"
          body={priceBodyTemplate}
          // editor={(options) => priceEditor(options)}
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
