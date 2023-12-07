"use client";
import { InputText } from "primereact/inputtext";
import { Image } from "primereact/image";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";
import { object, string, number, date } from "yup";
import { FormikHelpers, useFormik } from "formik";
import { classNames } from "primereact/utils";

interface ChapterFormPayload {
  imageUrl: string;
  tittle: string;
  year: string | null;
  description: string;
}

const formSchema = object({
  imageUrl: string().url("Invalid Format").required("Required"),
  tittle: string().required("Tittle Required"),
  year: string().required("Year Required"),
  description: string(),
});
export default function Page() {
  const initialValues: ChapterFormPayload = {
    imageUrl: "",
    tittle: "",
    year: null,
    description: "",
  };

  const onFormSubmit = (
    values: ChapterFormPayload,
    actions: FormikHelpers<ChapterFormPayload>
  ) => {
    console.log(values);

    actions.resetForm();
  };

  const formik = useFormik({
    initialValues,
    onSubmit: onFormSubmit,
    validationSchema: formSchema,
  });
  const isFormFieldInvalid = (name: keyof ChapterFormPayload) =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name: keyof ChapterFormPayload) => {
    return isFormFieldInvalid(name) ? (
      <small className="p-error">{formik.errors[name] as string}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  return (
    <div className="flex flex-row align-items-center justify-content-start gap-4">
      <Image src={formik.values.imageUrl} alt="Image" width="650" preview />
      <form onSubmit={formik.handleSubmit}>
        <div className="flex align-items-center">
          <div className="flex flex-column gap-3">
            <div className="flex flex-column"></div>
            <div className="flex flex-column gap-3 align-items-start justify-content-start pt-3 py-2 ">
              <label>Image Url</label>
              <InputText
                name="imageUrl"
                id="imageUrl"
                value={formik.values.imageUrl}
                onChange={formik.handleChange}
                placeholder="image url"
                onBlur={formik.handleBlur}
                className={classNames({
                  "p-invalid": isFormFieldInvalid("imageUrl"),
                  "w-full": true,
                  "md: w-14rem": true,
                })}
              />
              {getFormErrorMessage("imageUrl")}
            </div>
            <div className="flex flex-column gap-3 align-items-start justify-content-start py-2 ">
              <label>Tittle</label>
              <InputText
                name="tittle"
                id="tittle"
                value={formik.values.tittle}
                onChange={formik.handleChange}
                placeholder="tittle"
                onBlur={formik.handleBlur}
                className={classNames({
                  "p-invalid": isFormFieldInvalid("tittle"),
                  "w-full": true,
                  "md: w-14rem": true,
                })}
              ></InputText>
            </div>
            {getFormErrorMessage("tittle")}
            <div className="flex flex-column gap-3 align-items-start justify-content-start py-2 ">
              <label>Year</label>
              <Calendar
                name="year"
                id="year"
                value={formik.values.year ? new Date(formik.values.year) : null}
                onChange={formik.handleChange}
                placeholder="year"
                view="year"
                dateFormat="yy"
                onBlur={formik.handleBlur}
                className={classNames({
                  "p-invalid": isFormFieldInvalid("year"),
                  "w-full": true,
                })}
              ></Calendar>
            </div>
            {getFormErrorMessage("year")}
            <div className="flex flex-column gap-3 align-items-start justify-content-start py-2">
              <label>Description</label>
              <InputTextarea
                name="description"
                id="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                // autoResize
                rows={2}
                cols={10}
                onBlur={formik.handleBlur}
                className={classNames({
                  "p-invalid": isFormFieldInvalid("description"),
                  "w-full": true,
                  "md: w-14rem": true,
                })}
              ></InputTextarea>
            </div>
            {getFormErrorMessage("description")}
          </div>
        </div>
      </form>
    </div>
  );
}
