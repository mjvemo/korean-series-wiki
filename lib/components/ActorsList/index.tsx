import React, { useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useSelector } from "react-redux";
import { selectActors } from "@/lib/redux/slices/actors/selectors";
import { useDispatch, getActorsAsync, selectActiveActor } from "@/lib/redux";
import Link from "next/link";

export default function RowEditingDemo() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActorsAsync());
  }, []);

  const allActors = useSelector(selectActors); //selectActiveActor

  console.log(allActors);
  const nameBodyTemplate = (actor: any) => {
    return <Link href={`/actors/${actor.id}`}>{actor.name}</Link>;
  };

  return (
    <div className="card justify-content-center p-4">
      <DataTable
        value={allActors}
        pageLinkSize={5}
        dataKey="id"
        stripedRows
        rows={10}
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column header="Image" style={{ width: "20%" }}></Column>
        <Column
          field="name"
          header="Name"
          body={nameBodyTemplate}
          style={{ width: "20%" }}
        ></Column>
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
          style={{ width: "20%" }}
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
