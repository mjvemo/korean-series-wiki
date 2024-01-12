import React, { useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useSelector } from "react-redux";
import { selectActors } from "@/lib/redux/slices/actors/selectors";
import { useDispatch, getActorsAsync } from "@/lib/redux";
import Link from "next/link";
import { ActorDTO } from "@/lib/api/dtos/actor.dto";
import { Toast } from "primereact/toast";
import { useFormikContext } from "formik";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";

interface ActorListSelectorFormPayload {
  actors: ActorDTO[];
}
export default function ActorsListSelected() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActorsAsync());
  }, []);

  const formik = useFormikContext<ActorListSelectorFormPayload>();
  const toast = useRef<Toast>(null);
  const nameBodyTemplate = (actor: any) => {
    return <Link href={`/actors/${actor.id}`}>{actor.name}</Link>;
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
    );
  };

  const actionTemplate = (data: ActorDTO) => {
    return (
      <Button
        icon="pi pi-times"
        outlined
        onClick={() => {
          const { actors } = formik.values;
          formik.setFieldValue(
            "actors",
            actors.filter((actor) => actor.id !== data.id)
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

  return (
    <div className="card justify-content-center p-4">
      <DataTable
        value={formik.values.actors}
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
          header="Action"
          body={actionTemplate}
          style={{ width: "20%" }}
        ></Column>
      </DataTable>
    </div>
  );
}
