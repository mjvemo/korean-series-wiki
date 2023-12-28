import React, { useEffect, useRef, useState } from "react";
import {
  DataTable,
  DataTableSelectEvent,
  DataTableUnselectEvent,
} from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { FilterMatchMode } from "primereact/api";
import { Avatar } from "primereact/avatar";
import { Toast } from "primereact/toast";
import { useFormikContext } from "formik";
import {
  getAwardsAsync,
  selectAwards,
  useDispatch,
  useSelector,
} from "@/lib/redux";
import { AwardDTO } from "@/lib/api/dtos/award.dto";
import { Button } from "primereact/button";
import AwardsListSelected from "../AwardsListSelected";
import AwardslistSelector from "../AwardsListSelector";

export default function AwardsListFormSelector() {
  return (
    <div className="flex flex-row justify-content-start">
      <div className="card justify-content-center p-4">
        <AwardslistSelector />
        <AwardsListSelected />
      </div>
    </div>
  );
}
