"use client";
import { FormikHelpers, useFormik } from "formik";
import { Image } from "primereact/image";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { ChangeEvent, useState } from "react";
import { string, object, number } from "yup";
import { Calendar } from "primereact/calendar";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";

interface AwardFormPayload {
  prize: string;
  year: number | null;
  category: string;
  result: string;
}

const formSchema = object({
  imageUrl: string().url("Invalid Format").required("Required"),
  year: number().required("chapter name Required"),
  category: string(),
});
export function CreateAwardForm() {
  const initialValues: AwardFormPayload = {
    prize: "",
    year: null,
    category: "",
    result: "",
  };

  const onFormSubmit = (
    values: AwardFormPayload,
    actions: FormikHelpers<AwardFormPayload>
  ) => {
    console.log(values);

    actions.resetForm();
  };

  const formik = useFormik({
    initialValues,
    onSubmit: onFormSubmit,
    validationSchema: formSchema,
  });
  const isFormFieldInvalid = (name: keyof AwardFormPayload) =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name: keyof AwardFormPayload) => {
    return isFormFieldInvalid(name) ? (
      <small className="p-error">{formik.errors[name] as string}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };
  const results = [
    { name: "Nominated", code: "N" },
    { name: "Winner", code: "W" },
  ];

  return (
    <div className="flex align-items-center">
      <div className="flex flex-row gap-4 align-items-start">
        <div className="flex flex-column">
          <div className="flex flex-column gap-2 align-items-start justify-content-start pt-3 py-3">
            <div className="flex flex-column gap-3 align-items-start justify-content-start pt-3 py-2 ">
              <label>Prize Name</label>
              <InputText
                name="prize"
                id="prize"
                value={formik.values.prize}
                onChange={formik.handleChange}
                placeholder="prize name"
                onBlur={formik.handleBlur}
                className={classNames({
                  "p-invalid": isFormFieldInvalid("prize"),
                  "w-full": true,
                  "md: w-14rem": true,
                })}
              />
              {getFormErrorMessage("prize")}
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-column gap-3 align-items-start justify-content-start pt-3 py-2 ">
                <label>Year</label>
                <InputNumber
                  name="year"
                  id="year"
                  value={formik.values.year}
                  onChange={formik.handleChange}
                  placeholder="year"
                  onBlur={formik.handleBlur}
                  className={classNames({
                    "p-invalid": isFormFieldInvalid("year"),
                    "w-full": true,
                    "md: w-14rem": true,
                  })}
                />
                {getFormErrorMessage("category")}
              </div>
              <div className="flex flex-column gap-3 align-items-start justify-content-start pt-3 py-2 ">
                <label>Category</label>
                <InputText
                  name="category"
                  id="category"
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  placeholder="category"
                  onBlur={formik.handleBlur}
                  className={classNames({
                    "p-invalid": isFormFieldInvalid("category"),
                    "w-full": true,
                    "md: w-14rem": true,
                  })}
                />
                {getFormErrorMessage("prize")}
              </div>
            </div>

            <div className="flex flex-column gap-3 align-items-start justify-content-start pt-3 py-2 ">
              <label>Select a result</label>
              <Dropdown
                name="result"
                id="result"
                value={formik.values.result}
                onChange={formik.handleChange}
                options={results}
                optionLabel="result"
                placeholder="result"
                onBlur={formik.handleBlur}
                className={classNames({
                  "p-invalid": isFormFieldInvalid("result"),
                  "w-full": true,
                  "md: w-14rem": true,
                })}
              />
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
