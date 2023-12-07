"use client";
import { InputText } from "primereact/inputtext";
import { Rating } from "primereact/rating";
import { Calendar } from "primereact/calendar";
import { string, object, number, date } from "yup";
import { FormikHelpers, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { classNames } from "primereact/utils";
import { Image } from "primereact/image";
import { TabPanel, TabView } from "primereact/tabview";
import { Season } from "../Season";
import { Cast } from "../Cast";
import { Award } from "../Award";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { InputNumber } from "primereact/inputnumber";

interface SerieFormPayload {
  imageUrl: string;
  name: string;
  year: string | null;
  pg: string;
  rate: number | undefined;
  genre: string;
  director: string;
  directedBy: string;
}

const formSchema = object({
  imageUrl: string().url("Invalid Format").required("Required"),
  name: string().required("Name Required"),
  year: date().required("Year Required"),
  pg: string(),
  rate: number(),
  genre: string().required("Required"),
  directedBy: string(),
});

export function SerieForm() {
  const initialValues: SerieFormPayload = {
    imageUrl: "",
    name: "",
    year: null,
    pg: "",
    rate: undefined,
    genre: "",
    director: "",
    directedBy: "",
  };

  const onFormSubmit = (
    values: SerieFormPayload,
    actions: FormikHelpers<SerieFormPayload>
  ) => {
    console.log(values);

    actions.resetForm();
  };

  const formik = useFormik({
    initialValues,
    onSubmit: onFormSubmit,
    validationSchema: formSchema,
  });
  const isFormFieldInvalid = (name: keyof SerieFormPayload) =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name: keyof SerieFormPayload) => {
    return isFormFieldInvalid(name) ? (
      <small className="p-error">{formik.errors[name] as string}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  const dispatch = useDispatch();

  return (
    <div className="flex flex-column justify-content-center flex-wrap row-gap-6 p-5">
      <div>
        <h1>Add New Serie</h1>
      </div>
      <div className="flex flex-row align-items-center justify-content-center gap-6">
        <Image src={formik.values.imageUrl} alt="Image" width="750" preview />
        <form onSubmit={formik.handleSubmit}>
          {JSON.stringify(formik, null, 2)}
          <div className="flex align-items-center">
            <div className="flex flex-row gap-3 align-items-center">
              <div className="flex flex-column">
                <div className="flex flex-column gap-2 align-items-start justify-content-start pt-3 py-3">
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
                    })}
                  />
                </div>
                {getFormErrorMessage("imageUrl")}
                <div className="flex flex-column gap-2 align-items-start justify-content-start pt-3 py-3 w-full">
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
                    })}
                  />
                  {getFormErrorMessage("name")}
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
                    onBlur={formik.handleBlur}
                    className={classNames({
                      "p-invalid": isFormFieldInvalid("year"),
                      "w-full": true,
                    })}
                  />
                </div>
                {getFormErrorMessage("year")}
                <div className="flex flex-row flex-wrap pt-2 gap-2">
                  <div className="flex flex-column gap-2">
                    <label>PG</label>
                    <InputText
                      name="pg"
                      id="pg"
                      value={formik.values.pg}
                      onChange={formik.handleChange}
                      placeholder="pg"
                      onBlur={formik.handleBlur}
                      className={classNames({
                        "p-invalid": isFormFieldInvalid("pg"),
                      })}
                    />
                  </div>
                  {getFormErrorMessage("pg")}
                  <div className="flex flex-column gap-2">
                    <label>Rate</label>
                    <InputNumber
                      name="rate"
                      id="rate"
                      value={formik.values.rate}
                      onChange={formik.handleChange}
                      placeholder="rate"
                      onBlur={formik.handleBlur}
                      className={classNames({
                        "p-invalid": isFormFieldInvalid("rate"),
                        "w-full": true,
                      })}
                    />
                  </div>
                </div>
                {getFormErrorMessage("rate")}
                <div>
                  <Divider className="p-4" />
                  <h3>Production</h3>
                  <div className="flex flex-column gap-2">
                    <label>Genre</label>
                    <InputText
                      name="genre"
                      id="genre"
                      value={formik.values.genre}
                      onChange={formik.handleChange}
                      placeholder="genre"
                      onBlur={formik.handleBlur}
                      className={classNames({
                        "p-invalid": isFormFieldInvalid("genre"),
                        "w-full": true,
                      })}
                    />
                  </div>
                  {getFormErrorMessage("genre")}
                  <div className="flex flex-column gap-2">
                    <label>Director</label>
                    <InputText
                      name="director"
                      id="director"
                      value={formik.values.director}
                      onChange={formik.handleChange}
                      placeholder="director"
                      onBlur={formik.handleBlur}
                      className={classNames({
                        "p-invalid": isFormFieldInvalid("director"),
                        "w-full": true,
                      })}
                    />
                  </div>
                  {getFormErrorMessage("director")}
                  <div className="flex flex-column gap-2">
                    <label>Directed By</label>
                    <InputText
                      name="directedBy"
                      id="directedBy"
                      value={formik.values.directedBy}
                      onChange={formik.handleChange}
                      placeholder="directed By"
                      onBlur={formik.handleBlur}
                      className={classNames({
                        "p-invalid": isFormFieldInvalid("directedBy"),
                        "w-full": true,
                      })}
                    />
                  </div>
                  {getFormErrorMessage("directedBy")}
                </div>
              </div>
            </div>
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
      <div>
        <div className="card">
          <TabView>
            <TabPanel header="Seasons" className="m-0">
              <Season />
            </TabPanel>
            <TabPanel header="Cast" className="m-0">
              <Cast />
            </TabPanel>
            <TabPanel header="Awards" className="m-0">
              <Award />
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  );
}
