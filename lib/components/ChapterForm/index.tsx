"use client";
import { FormikHelpers, useFormik } from "formik";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { classNames } from "primereact/utils";
import { string, object } from "yup";

interface ChapterFormPayload {
  name: string;
  description: string;
  releaseAt: string;
}

interface ComponentProps {
  value: ChapterFormPayload;
  onChange: any;
  errors: Record<string, string>;
  touched?: Record<string, boolean>;
  onBlur: any;
  onDelete: any;
  index: number;
}

export function ChapterForm(props: ComponentProps) {
  const { value, index, errors } = props;

  const isFormFieldInvalid = (name: keyof ChapterFormPayload) =>
    !!(
      props.touched &&
      props.touched[name] &&
      props.errors &&
      props.errors[name]
    );

  const getFormErrorMessage = (name: keyof ChapterFormPayload) => {
    return isFormFieldInvalid(name) ? (
      <small className="p-error">{errors[name] as string}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  return (
    <div>
      <div className="flex flex-row align-items-center justify-content-start gap-4"></div>
      <div className="flex align-items-center justify-content-center">
        <div className="flex flex-column gap-3">
          <div className="flex flex-column"></div>
          <div className="flex flex-column gap-3 align-items-start justify-content-start py-2 ">
            <label>Chapter name</label>
            <InputText
              name={`chapters.${index}.name`}
              id={`chapters.${index}.name`}
              value={value.name}
              onChange={props.onChange}
              placeholder="chapter name"
              onBlur={props.onBlur}
              className={classNames({
                "p-invalid": isFormFieldInvalid("name"),
                "w-full": true,
                "md: w-14rem": true,
              })}
            ></InputText>
            {getFormErrorMessage("name")}
          </div>

          <div className="flex flex-column gap-3 align-items-start justify-content-start py-2 ">
            <label>Release Date</label>
            <Calendar
              name={`chapters.${index}.releaseAt`}
              id={`chapters.${index}.releaseAt`}
              value={value.releaseAt ? new Date(value.releaseAt) : null}
              onChange={props.onChange}
              view="year"
              dateFormat="yy"
              placeholder="year"
              onBlur={props.onChange}
              className={classNames({
                "p-invalid": isFormFieldInvalid("releaseAt"),
                "w-full": true,
                "md: w-14rem": true,
              })}
            />
            {getFormErrorMessage("releaseAt")}
          </div>

          <div className="flex flex-column gap-3 align-items-start justify-content-start py-2">
            <label>Description</label>
            <InputTextarea
              name={`chapters.${index}.description`}
              id={`chapters.${index}.description`}
              value={value.description}
              onChange={props.onChange}
              // autoResize
              rows={2}
              cols={10}
              onBlur={props.onBlur}
              className={classNames({
                "p-invalid": isFormFieldInvalid("description"),
                "w-full": true,
                "md: w-14rem": true,
              })}
            ></InputTextarea>
            {getFormErrorMessage("description")}
          </div>
          <Button outlined onClick={() => props.onDelete(index)}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
