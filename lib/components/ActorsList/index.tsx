import React, { useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Link from "next/link";
import { ActorDTO } from "@/lib/api/dtos/actor.dto";
import { useRouter } from "next/navigation";

export interface ComponentProps {
  data: ActorDTO[];
}

export default function ActorsList(props: ComponentProps) {
  const router = useRouter();
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getActorsAsync());
  //   }, []);

  //   const allActors = useSelector(selectActors); //selectActiveActor

  const nameBodyTemplate = (actor: any) => {
    return <Link href={`/actors/${actor.id}`}>{actor.name}</Link>;
  };

  const onRowSelect = (actor: any) => {
    router.push(`/actors/${actor.id}`);
  };

  return (
    <div className="card justify-content-center p-4">
      <DataTable
        value={props.data}
        pageLinkSize={5}
        dataKey="id"
        stripedRows
        rows={10}
        tableStyle={{ minWidth: "50rem" }}
        onRowSelect={onRowSelect}
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
