import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { award } from "@/lib/models/award.model";
import { InputNumber } from "primereact/inputnumber";

export function Awards() {
  <DataTable>
    <InputNumber value={award.year}></InputNumber>
    <InputText value={award.category}></InputText>
    <InputText value={award.awardName}></InputText>
    <InputText value={award.result}></InputText>
  </DataTable>;
}
