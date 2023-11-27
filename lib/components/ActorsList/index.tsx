import React, { useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { useSelector } from "react-redux";
import { getActorsAsync } from "@/lib/redux/slices/actors/thunks";
import { selectActors } from "@/lib/redux/slices/actors/selectors";
import { useDispatch } from "@/lib/redux";

export default function RowEditingDemo() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActorsAsync()); // dispatch = AnyAction
  }, []);

  const allActors = useSelector(selectActors);

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
  console.log(allActors);
  return (
    <div className="card  p-4">
      <DataTable
        value={allActors}
        // editMode="row"
        pageLinkSize={1}
        dataKey="id"
        header={header}
        paginator
        rows={10}
        // onRowEditComplete={onRowEditComplete}
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column field="name" header="Name" style={{ width: "20%" }}></Column>
        <Column
          field="age"
          header="Age"
          // editor={(options) => statusEditor(options)}
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="agency"
          header="Agency"
          // editor={(options) => priceEditor(options)}
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="education"
          header="Education"
          // editor={(options) => priceEditor(options)}
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="active"
          header="Active"
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
