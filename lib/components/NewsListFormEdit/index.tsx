"use client";
import { FormikHelpers, useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { string, object } from "yup";
import { Button } from "primereact/button";
import {
  getNewsByActorIdAsync,
  getNewsByIdAsync,
  getNewsBySerieIdAsync,
  selectActiveNews,
  updateNewsAsync,
  useDispatch,
  useSelector,
} from "@/lib/redux";
import {
  newsFormToCreateNewsRequest,
  newsFormToUpdateNewsRequest,
} from "@/lib/utils/form-mappers";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { NewsFormPayload } from "@/lib/models/news.model";

const formSchema = object({
  name: string().required("name Required"),
  description: string().required("description required"),
  thumbnail: string().required("thumbnail Required"),
  publishedAt: string().required("publishedAt Required"),
});
export interface ComponentProps {
  newsId: string;
}

export function NewsListFormEdit(props: ComponentProps) {
  const id = props.newsId;
  const dispatch = useDispatch();
  const router = useRouter();
  const news = useSelector(selectActiveNews);

  useEffect(() => {
    dispatch(getNewsByIdAsync(id));
    dispatch(getNewsByActorIdAsync(id));
    dispatch(getNewsBySerieIdAsync(id));
  });

  const initialValues: NewsFormPayload = {
    name: news?.name || "name",
    thumbnail: news?.thumbnail || "thumbnail",
    publishedAt: news?.publishedAt || "publishedAt",
    description: news?.description || "description",
  };

  const onFormSubmit = async (
    values: NewsFormPayload,
    actions: FormikHelpers<NewsFormPayload>
  ) => {
    const updateNewsRequest = newsFormToUpdateNewsRequest(values);
    actions.setSubmitting(true);
    await dispatch(updateNewsAsync({ id, data: updateNewsRequest }));

    router.push(`/news/${id}`);
  };

  const formik = useFormik({
    initialValues,
    onSubmit: onFormSubmit,
    validationSchema: formSchema,
    enableReinitialize: true,
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
          <h1>Update News</h1>
          <div className="flex flex-column">
            <div className="flex flex-column gap-2 align-items-start justify-content-start pt-3 py-3">
              <div className="flex flex-column gap-3 align-items-start justify-content-start pt-3 py-2 ">
                <label>thumbnail</label>
                <InputText
                  name="thumbnail"
                  id="thumbnail"
                  value={formik.values.thumbnail}
                  onChange={formik.handleChange}
                  placeholder="thumbnail"
                  onBlur={formik.handleBlur}
                  className={classNames({
                    "p-invalid": isFormFieldInvalid("thumbnail"),
                    "w-full": true,
                    "md: w-14rem": true,
                  })}
                />
                {getFormErrorMessage("thumbnail")}
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
                  <label>Published At</label>
                  <InputText
                    name="publishedAt"
                    id="publishedAt"
                    value={formik.values.publishedAt}
                    onChange={formik.handleChange}
                    placeholder="publishedAt"
                    onBlur={formik.handleBlur}
                    className={classNames({
                      "p-invalid": isFormFieldInvalid("publishedAt"),
                      "w-full": true,
                      "md: w-14rem": true,
                    })}
                  />
                  {getFormErrorMessage("publishedAt")}
                </div>
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
