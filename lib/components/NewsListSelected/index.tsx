import React, { useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useDispatch, getAwardsAsync } from "@/lib/redux";
import { AwardDTO } from "@/lib/api/dtos/award.dto";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Toast } from "primereact/toast";
import { useFormikContext } from "formik";
import { NewsDTO } from "@/lib/models/news.model";
import { getNewsAsync, selectNews } from "@/lib/redux/slices/news";

interface NewsListSelectorFormPayload {
  news: NewsDTO[];
}

export default function NewsListSelected() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsAsync());
  }, []);

  const formik = useFormikContext<NewsListSelectorFormPayload>();
  const toast = useRef<Toast>(null);

  const imageBodyTemplate = (allNews: { url: string | undefined }) => {
    return (
      <Avatar
        image={allNews.url}
        label="V"
        size="xlarge"
        style={{ backgroundColor: "#2196F3", color: "#ffffff" }}
        shape="circle"
      />
      // <Image src={allAwards.url} alt={allAwards.url} width="100" preview />
    );
  };

  const actionTemplate = (data: NewsDTO) => {
    return (
      <Button
        icon="pi pi-times"
        outlined
        onClick={() => {
          const { news } = formik.values;
          formik.setFieldValue(
            "news",
            news.filter((news) => news.id !== data.id)
          );

          toast.current?.show({
            severity: "info",
            summary: "News removed",
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
        value={formik.values.news}
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
        <Column field="age" header="Age" style={{ width: "20%" }}></Column>
        <Column
          field="tittle"
          header="Tittle"
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="description"
          header="Description"
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="Action"
          body={actionTemplate}
          style={{ width: "20%" }}
        ></Column>
      </DataTable>
    </div>
  );
}
