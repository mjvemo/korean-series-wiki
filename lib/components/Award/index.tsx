import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { CreateAwardForm } from "../CreateAwardFrom";
import { Button } from "primereact/button";

export function Award() {
  return (
    <div>
      <CreateAwardForm />
      <Button icon="pi pi-plus" outlined></Button>
    </div>
  );
}
