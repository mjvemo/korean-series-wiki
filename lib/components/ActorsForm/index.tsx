"use client";
import { InputNumber, InputNumberChangeEvent } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { SyntheticEvent, useEffect, useState, useRef } from "react";
import { ChangeEvent } from "react";
import { Rating, RatingChangeEvent } from "primereact/rating";
import { Calendar } from "primereact/calendar";
import { useFormik, FormikValues, FormikHelpers, withFormik } from "formik";
import { object, string, number, date } from "yup";
import { classNames } from "primereact/utils";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import {
  createActorAsync,
  useDispatch,
  useSelector,
  selectActiveActor,
  selectActorRequestStatus,
} from "@/lib/redux";
import { SerieForm } from "@/lib/components/SeriesForm";
import { Season } from "@/lib/components/Season";
import { Cast } from "@/lib/components/Cast";
import { Award } from "@/lib/components/Award";
import { TabView, TabPanel } from "primereact/tabview";
import { Series } from "@/lib/components/Series";
import { ActorsFormPayload } from "@/lib/models/actor.model";
import { actorFormToCreateActorRequest } from "@/lib/utils/form-mappers";
import { useRouter } from "next/navigation";
import NewsListSelector from "../NewsListSelector";
import { InputTextarea } from "primereact/inputtextarea";

const formSchema = object<ActorsFormPayload>({
  imageUrl: string().url("Invalid Format").required("Required"),
  name: string().required("Name Required"),
  age: number().required("Age Required"),
  education: string().required("Education Required"),
  agency: string().required("Required"),
  yearsActive: string().required("Years Required"),
  about: string().required("About Required"),
});

export function ActorsForm() {
  const router = useRouter();
  // dispatch
  const dispatch = useDispatch();
  const actor = useSelector(selectActiveActor);
  const status = useSelector(selectActorRequestStatus);

  useEffect(() => {
    if (actor) {
      router.push(`/actors/${actor.id}`);
    }
  }, [status]);

  const initialValues: ActorsFormPayload = {
    imageUrl: "",
    name: "",
    age: null,
    education: "",
    agency: "",
    yearsActive: null,
    about: "",
    series: [],
    news: [],
    awards: [],
    nominations: [],
  };

  const onFormSubmit = (
    values: ActorsFormPayload,
    actions: FormikHelpers<ActorsFormPayload>
  ) => {
    const createActorRequest = actorFormToCreateActorRequest(values);
    dispatch(createActorAsync(createActorRequest));

    actions.setSubmitting(true);
  };

  const formik = useFormik({
    initialValues,
    onSubmit: onFormSubmit,
    validationSchema: formSchema,
  });

  const isFormFieldInvalid = (name: keyof ActorsFormPayload) =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name: keyof ActorsFormPayload) => {
    return isFormFieldInvalid(name) ? (
      <small className="p-error">{formik.errors[name] as string}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  return (
    <div className="flex flex-column justify-content-center flex-wrap row-gap-6 p-5">
      <div>
        <h1>Add New Actor</h1>
      </div>
      <div className="flex flex-row align-items-center justify-content-center gap-6">
        <Image src={formik.values.imageUrl} alt="Image" width="650" preview />
        <form onSubmit={formik.handleSubmit}>
          <>
            --- Formik State <br></br>
          </>
          {JSON.stringify(formik, null, 2)}
          <>
            <br></br> --- Actor <br></br>
          </>
          {JSON.stringify(actor || {}, null, 2)}
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
                  {getFormErrorMessage("imageUrl")}
                </div>
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
                </div>
                <div className="flex flex-row gap-4">
                  <div className="flex flex-column gap-2 align-items-start justify-content-start pt-3 py-3">
                    <label>Age</label>
                    <InputNumber
                      name="age"
                      id="age"
                      value={formik.values.age}
                      onChange={(e) => formik.setFieldValue("age", e.value)}
                      placeholder="age"
                      onBlur={formik.handleBlur}
                      className={classNames({
                        "p-invalid": isFormFieldInvalid("age"),
                        "w-full": true,
                      })}
                    />
                    {getFormErrorMessage("age")}
                  </div>
                  <div className="flex flex-column gap-2 align-items-start justify-content-start pt-3 py-3">
                    <label>Education</label>
                    <InputText
                      name="education"
                      id="education"
                      value={formik.values.education}
                      onChange={formik.handleChange}
                      placeholder="education"
                      onBlur={formik.handleBlur}
                      className={classNames({
                        "p-invalid": isFormFieldInvalid("education"),
                        "w-full": true,
                      })}
                    />
                    {getFormErrorMessage("education")}
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="flex flex-column gap-2 align-items-start justify-content-start pt-3 py-3">
                    <label>Agency</label>
                    <InputText
                      name="agency"
                      id="agency"
                      value={formik.values.agency}
                      onChange={formik.handleChange}
                      placeholder="agency"
                      onBlur={formik.handleBlur}
                      className={classNames({
                        "p-invalid": isFormFieldInvalid("agency"),
                        "w-full": true,
                      })}
                    />
                    {getFormErrorMessage("agency")}
                  </div>

                  <div className="flex flex-column gap-2 align-items-start justify-content-start pt-3 py-3">
                    <label>Active Since</label>
                    <Calendar
                      name="yearsActive"
                      id="yearsActive"
                      value={
                        formik.values.yearsActive
                          ? new Date(formik.values.yearsActive)
                          : null
                      }
                      onChange={formik.handleChange}
                      view="year"
                      dateFormat="yy"
                      placeholder="active since"
                      onBlur={formik.handleBlur}
                      className={classNames({
                        "p-invalid": isFormFieldInvalid("yearsActive"),
                        "w-full": true,
                      })}
                    />
                    {getFormErrorMessage("yearsActive")}
                  </div>
                </div>
                <div className="flex flex-column gap-2 align-items-start justify-content-start pt-3 py-3">
                  <label>About</label>
                  <InputTextarea
                    name="about"
                    id="about"
                    value={formik.values.about}
                    onChange={formik.handleChange}
                    placeholder="about"
                    onBlur={formik.handleBlur}
                    className={classNames({
                      "p-invalid": isFormFieldInvalid("about"),
                      "w-full": true,
                    })}
                  />
                  {getFormErrorMessage("about")}
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
        <div className="card justify-content-center">
          <TabView>
            <TabPanel header="News" className="m-0">
              <NewsListSelector />
            </TabPanel>
            <TabPanel header="Series" className="m-0">
              <Series />
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
function setSubmitting(arg0: boolean) {
  throw new Error("Function not implemented.");
}
