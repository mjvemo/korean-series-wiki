import React, { useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useDispatch, getAwardsAsync } from "@/lib/redux";
import { AwardDTO } from "@/lib/api/dtos/award.dto";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Toast } from "primereact/toast";
import { useFormikContext } from "formik";

interface AwardListSelectorFormPayload {
  awards: AwardDTO[];
}

export default function AwardsListSelected() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAwardsAsync());
  }, []);

  const formik = useFormikContext<AwardListSelectorFormPayload>();
  const toast = useRef<Toast>(null);

  const imageBodyTemplate = (allAwards: { url: string | undefined }) => {
    return (
      <Avatar
        image={allAwards.url}
        label="V"
        size="xlarge"
        style={{ backgroundColor: "#2196F3", color: "#ffffff" }}
        shape="circle"
      />
    );
  };

  const actionTemplate = (data: AwardDTO) => {
    return (
      <Button
        icon="pi pi-times"
        outlined
        onClick={() => {
          const { awards } = formik.values;
          formik.setFieldValue(
            "awards",
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
  return (
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
        <Column field="year" header="Year" style={{ width: "20%" }}></Column>
        <Column
          field="category"
          header="category"
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
