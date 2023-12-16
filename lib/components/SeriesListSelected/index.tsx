import React, { useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useSelector } from "react-redux";
import { useDispatch, getSeriesAsync } from "@/lib/redux";
import { selectSeries } from "@/lib/redux/slices/series/selectors";
import Link from "next/link";

export default function SeriesListSelected() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSeriesAsync());
  }, []);

  const allSeries = useSelector(selectSeries);

  console.log(allSeries);
  const nameBodyTemplate = (serie: any) => {
    return <Link href={`/series/${serie.id}`}>{serie.name}</Link>;
  };

  return (
    <div className="card justify-content-center p-4">
      <DataTable
        value={allSeries}
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
        <Column field="year" header="Year" style={{ width: "20%" }}></Column>
      </DataTable>
    </div>
  );
}
