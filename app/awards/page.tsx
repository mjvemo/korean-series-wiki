"use client";
import React, { useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Link from "next/link";
import { AwardDTO } from "@/lib/api/dtos/award.dto";

import { Button } from "primereact/button";
import AwardsList from "@/lib/components/AwardsList";
import { useDispatch, selectAwards, useSelector, getAwards } from "@/lib/redux";

export interface ComponentProps {
  data: AwardDTO[];
  params: { id: string };
}

export default function Awards(props: ComponentProps) {
  const { id } = props.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAwards());
  }, []);

  const awards = useSelector(selectAwards);

  return (
    <div>
      <div className="flex flex-row justify-content-between size-xl  gap-4 m-4">
        <h1>Awards</h1>
        <Link href="awards/create">
          <Button label="Add New Award" icon="pi pi-plus" outlined></Button>
        </Link>
      </div>
      <div className="card justify-content-center p-4">
        <AwardsList data={awards} />
      </div>
    </div>
  );
}
