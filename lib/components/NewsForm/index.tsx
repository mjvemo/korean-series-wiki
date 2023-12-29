"use client";
import { FormikHelpers, useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { string, object } from "yup";
import { Button } from "primereact/button";
import {
  createNewsAsync,
  selectActiveNews,
  selectNewsRequestStatus,
  useDispatch,
  useSelector,
} from "@/lib/redux";
import { newsFormToCreateNewsRequest } from "@/lib/utils/form-mappers";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { NewsFormPayload } from "@/lib/models/news.model";

const formSchema = object({
  url: string().required("image url Required"),
  name: string().required("name Required"),
  description: string().required("description required"),
  thumbnail: string().required("thumbnail Required"),
  publishedAt: string().required("publishedAt Required"),
  createdAt: string().required("createdAt Required"),
});

export function NewsForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const news = useSelector(selectActiveNews);
  const status = useSelector(selectNewsRequestStatus);
  useEffect(() => {
    if (news) {
      router.push(`/news/${news.id}`);
    }
  }, [status]);

  const initialValues: NewsFormPayload = {
    id: "",
    name: "",
    url: "",
    thumbnail: "",
    publishedAt: "",
    createdAt: "",
    // year: 0, // TODO: add year to server DTO's
    description: "",
  };

  const onFormSubmit = (
    values: NewsFormPayload,
    actions: FormikHelpers<NewsFormPayload>
  ) => {
    const createNewsRequest = newsFormToCreateNewsRequest(values);
    dispatch(createNewsAsync(createNewsRequest));

    actions.setSubmitting(true);
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues,
    onSubmit: onFormSubmit,
    validationSchema: formSchema,
  });
  const isFormFieldInvalid = (name: keyof NewsFormPayload) =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name: keyof NewsFormPayload) => {
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
          <div className="flex flex-column">
            <div className="flex flex-column gap-2 align-items-start justify-content-start pt-3 py-3">
              <div className="flex flex-column gap-2 align-items-start justify-content-start pt-3 py-3">
                <label>Image Url</label>
                <InputText
                  name="url"
                  id="url"
                  value={formik.values.url}
                  onChange={formik.handleChange}
                  placeholder="image url"
                  onBlur={formik.handleBlur}
                  className={classNames({
                    "p-invalid": isFormFieldInvalid("url"),
                    "w-full": true,
                    "md: w-14rem": true,
                  })}
                />
                {getFormErrorMessage("url")}
              </div>
              <div className="flex flex-column gap-3 align-items-start justify-content-start pt-3 py-2 ">
                <label>Name</label>
                <InputText
                  name="name"
                  id="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  placeholder="name"
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
                  <label>Description</label>
                  <InputText
                    name="description"
                    id="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    placeholder="description"
                    onBlur={formik.handleBlur}
                    className={classNames({
                      "p-invalid": isFormFieldInvalid("description"),
                      "w-full": true,
                      "md: w-14rem": true,
                    })}
                  />
                  {getFormErrorMessage("description")}
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
