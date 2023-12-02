import SeriesPicker from "../SeriesPicker";
import { Image } from "primereact/image";
import { Card } from "primereact/card";
import { actor } from "@/lib/models/actor.model";
import { Avatar } from "primereact/avatar";
import { useSelector } from "react-redux";
import { selectActors } from "@/lib/redux/slices/actors";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export function Series() {
  return (
    <div className="flex flex-row align-items-start justify-content-start mt-6">
      <SeriesPicker />
      {}
    </div>
  );
}
