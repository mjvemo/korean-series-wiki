"use client";
import { FormikHelpers, useFormik } from "formik";
import { Dropdown } from "primereact/dropdown";
import { Image } from "primereact/image";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { classNames } from "primereact/utils";
import { string, object } from "yup";

interface ChapterFormPayload {
  imageUrl: string;
  chapterName: string;
  chapterDescription: string;
  selectedSeason: null;
}

const formSchema = object({
  imageUrl: string().url("Invalid Format").required("Required"),
  chapterName: string().required("chapter name Required"),
  chapterDescription: string(),
});
export function CreateChapterForm() {
  const initialValues: ChapterFormPayload = {
    imageUrl: "",
    chapterName: "",
    chapterDescription: "",
    selectedSeason: null,
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

  const season = Array.from({ length: 100 }).map((_, i) => ({
    label: `Season ${i}`,
    value: i,
  }));

  return (
    <div>
      {" "}
      <div className="flex flex-row align-items-center justify-content-start gap-4"></div>
      <form onSubmit={formik.handleSubmit}>
        <Dropdown
          name="seasons"
          inputId="seasons"
          value={formik.values.selectedSeason}
          onChange={(e) => {
            formik.setFieldValue("seasons", e.value);
          }}
          options={season}
          placeholder="Select a Season"
          onBlur={formik.handleBlur}
          className={classNames({
            "p-invalid": isFormFieldInvalid("selectedSeason"),
            "w-full md:w-14rem": true,
          })}
          virtualScrollerOptions={{ itemSize: 38 }}
        />

        <Image src={formik.values.imageUrl} alt="Image" width="650" preview />

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
              <label>Chapter name</label>
              <InputText
                name="chapterName"
                id="chapterName"
                value={formik.values.chapterName}
                onChange={formik.handleChange}
                placeholder="chapter name"
                onBlur={formik.handleBlur}
                className={classNames({
                  "p-invalid": isFormFieldInvalid("chapterName"),
                  "w-full": true,
                  "md: w-14rem": true,
                })}
              ></InputText>
            </div>

            {getFormErrorMessage("chapterName")}
            <div className="flex flex-column gap-3 align-items-start justify-content-start py-2">
              <label>Description</label>
              <InputTextarea
                name="chapterDescription"
                id="chapterDescription"
                value={formik.values.chapterDescription}
                onChange={formik.handleChange}
                // autoResize
                rows={2}
                cols={10}
                onBlur={formik.handleBlur}
                className={classNames({
                  "p-invalid": isFormFieldInvalid("chapterDescription"),
                  "w-full": true,
                  "md: w-14rem": true,
                })}
              ></InputTextarea>
            </div>
            {getFormErrorMessage("chapterDescription")}
          </div>
        </div>
      </form>
    </div>
  );
}
