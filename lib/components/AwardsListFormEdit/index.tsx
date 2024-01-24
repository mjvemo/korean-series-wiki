"use client";
import { FormikHelpers, useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { string, object } from "yup";
import { Button } from "primereact/button";
import {
  getActorByIdAsync,
  getAwardByIdAsync,
  getAwardsByActorIdAsync,
  getAwardsBySerieIdAsync,
  getNewsByActorIdAsync,
  getSeriesByActorIdAsync,
  selectActiveAward,
  updateAwardsAsync,
  useDispatch,
  useSelector,
} from "@/lib/redux";
import {
  awardFormToCreateAwardRequest,
  awardFormToUpdateAwardRequest,
} from "@/lib/utils/form-mappers";
import { Calendar } from "primereact/calendar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AwardFormPayload } from "@/lib/models/award.model";

const formSchema = object<AwardFormPayload>({
  name: string().required("name Required"),
  year: string().required("year Required"),
  category: string().required("category required"),
  image: string().required("image Required"),
});

export interface ComponentProps {
  awardId: string;
}

export function AwardsListFormEdit(props: ComponentProps) {
  const id = props.awardId;
  const router = useRouter();
  const dispatch = useDispatch();
  const award = useSelector(selectActiveAward);

  useEffect(() => {
    dispatch(getAwardByIdAsync(id));
    dispatch(getAwardsByActorIdAsync(id));
    dispatch(getAwardsBySerieIdAsync(id));
  });

  const initialValues: AwardFormPayload = {
    name: award?.name || "name",
    year: award?.year || 0,
    category: award?.category || "category",
    image: award?.image || "image",
  };

  const onFormSubmit = async (
    values: AwardFormPayload,
    actions: FormikHelpers<AwardFormPayload>
  ) => {
    const updateAwardsRequest = awardFormToUpdateAwardRequest(values);
    actions.setSubmitting(true);
    await dispatch(updateAwardsAsync({ id, data: updateAwardsRequest }));

    router.push(`/awards/${id}`);
  };

  const formik = useFormik({
    initialValues,
    onSubmit: onFormSubmit,
    validationSchema: formSchema,
    enableReinitialize: true,
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

  return (
    <div className="flex align-items-center justify-content-center">
      <div className="flex flex-row gap-4 align-items-start">
        <form onSubmit={formik.handleSubmit}>
          {JSON.stringify(formik, null, 2)}
          <h1>Update Award</h1>
          <div className="flex flex-column">
            <div className="flex flex-column gap-2 align-items-start justify-content-start pt-3 py-3">
              <div className="flex flex-column gap-3 align-items-start justify-content-start pt-3 py-2 ">
                <label>Image</label>
                <InputText
                  name="image"
                  id="image"
                  value={formik.values.image}
                  onChange={formik.handleChange}
                  placeholder="image"
                  onBlur={formik.handleBlur}
                  className={classNames({
                    "p-invalid": isFormFieldInvalid("image"),
                    "w-full": true,
                    "md: w-14rem": true,
                  })}
                />
                {getFormErrorMessage("image")}
              </div>
              <div className="flex flex-column gap-3 align-items-start justify-content-start pt-3 py-2 ">
                <label>Prize Name</label>
                <InputText
                  name="name"
                  id="name"
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
                <div className="flex flex-column gap-2 align-items-start justify-content-start pt-3 py-3">
                  <label>Year</label>
                  <Calendar
                    name="year"
                    id="year"
                    value={
                      formik.values.year ? new Date(formik.values.year) : null
                    }
                    onChange={formik.handleChange}
                    view="year"
                    dateFormat="yy"
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
