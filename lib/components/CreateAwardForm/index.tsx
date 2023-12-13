"use client";
import { FormikHelpers, useFormik } from "formik";
import { Image } from "primereact/image";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { string, object, number } from "yup";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { useDispatch } from "@/lib/redux";
import { awardFormToCreateAwardRequest } from "@/lib/utils/form-mappers";
import { createAwardAsync } from "@/lib/redux";

interface AwardFormPayload {
  name: string;
  year: number;
  category: string;
  awards: [];
}

const formSchema = object({
  imageUrl: string().url("Invalid Format").required("Required"),
  prize: string().required("prize name Required"),
  year: number().required("year Required"),
  category: string().required("category required"),
});
export function CreateAwardForm() {
  const dispatch = useDispatch();
  const initialValues: AwardFormPayload = {
    name: "",
    year: 0,
    category: "",
    awards: [],
  };

  const onFormSubmit = (
    values: AwardFormPayload,
    actions: FormikHelpers<AwardFormPayload>
  ) => {
    const createAwardsRequest = awardFormToCreateAwardRequest(values);
    dispatch(createAwardAsync(createAwardsRequest));

    actions.setSubmitting(true);
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
    <div className="flex align-items-center justify-content-center">
      <div className="flex flex-row gap-4 align-items-start">
        <form>
          <div className="flex flex-column">
            <div className="flex flex-column gap-2 align-items-start justify-content-start pt-3 py-3">
              <div className="flex flex-column gap-3 align-items-start justify-content-start pt-3 py-2 ">
                <label>Prize Name</label>
                <InputText
                  name="prize"
                  id="prize"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  placeholder="prize name"
                  onBlur={formik.handleBlur}
                  className={classNames({
                    "p-invalid": isFormFieldInvalid("name"),
                    "w-full": true,
                    "md: w-14rem": true,
                  })}
                />
                {getFormErrorMessage("name")}
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
                  {getFormErrorMessage("year")}
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
                  {getFormErrorMessage("category")}
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="flex flex-row gap-4 justify-content-end p-6">
            <Button
              type="submit"
              label="Save"
              icon="pi pi-check"
              size="large"
            ></Button>
            <Button label="Cancel" icon="pi pi-times" size="large"></Button>
          </div>
        </form>
      </div>
    </div>
  );
}
