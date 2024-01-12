"use client";
import { InputNumber, InputNumberChangeEvent } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { SyntheticEvent, useEffect, useState, useRef } from "react";
import { Calendar } from "primereact/calendar";
import {
  useFormik,
  FormikValues,
  FormikHelpers,
  withFormik,
  FormikContext,
} from "formik";
import { object, string, number, date } from "yup";
import { classNames } from "primereact/utils";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import {
  useDispatch,
  useSelector,
  selectActiveActor,
  selectActorRequestStatus,
  getActorByIdAsync,
  getNewsByActorIdAsync,
  updateActorsAsync,
  selectNews,
  getAwardsByActorIdAsync,
  getSeriesByActorIdAsync,
  selectAwards,
  selectSeries,
  selectByEntityIdNews,
  selectByEntityIdActors,
  selectByEntityIdSeries,
  selectByEntityIdAwards,
} from "@/lib/redux";

import { TabView, TabPanel } from "primereact/tabview";
import { ActorsFormPayload } from "@/lib/models/actor.model";
import { actorFormToUpdateActorRequest } from "@/lib/utils/form-mappers";
import { useRouter } from "next/navigation";
import { InputTextarea } from "primereact/inputtextarea";
import SeriesListFormSelector from "../SeriesListFormSelector";
import { SerieDTO } from "@/lib/api/dtos/serie.dto";
import AwardsListFormSelector from "../AwardsListFormSelector";
import NewsListFormSelector from "../NewsListFormSelector";

const formSchema = object<ActorsFormPayload>({
  imageUrl: string().url("Invalid Format").required("Required"),
  name: string().required("Name Required"),
  age: number().required("Age Required"),
  education: string().required("Education Required"),
  agency: string().required("Required"),
  yearsActive: string().required("Years Required"),
  about: string().required("About Required"),
});
export interface ComponentProps {
  actorId: string;
}

export function ActorsListFormEdit(props: ComponentProps) {
  const id = props.actorId;
  const router = useRouter();
  // dispatch
  const dispatch = useDispatch();
  const actor = useSelector(selectActiveActor);
  const news = useSelector(selectByEntityIdNews);
  const awards = useSelector(selectByEntityIdAwards);
  const series = useSelector(selectByEntityIdSeries);

  useEffect(() => {
    dispatch(getActorByIdAsync(id));
    dispatch(getNewsByActorIdAsync(id));
    dispatch(getAwardsByActorIdAsync(id));
    dispatch(getSeriesByActorIdAsync(id));
  }, []);

  const initialValues: ActorsFormPayload = {
    // TODO: InitialValues should be values from ActorsForm inputs
    imageUrl: actor?.imageUrl || "",
    name: actor?.name || "",
    age: actor?.age || null,
    education: actor?.education || "",
    agency: actor?.agency || "",
    yearsActive: actor?.yearsActive || null,
    about: actor?.biography || "",
    series,
    news,
    awards,
    nominations: [],
  };

  const onFormSubmit = async (
    values: ActorsFormPayload,
    actions: FormikHelpers<ActorsFormPayload>
  ) => {
    const updateActorRequest = actorFormToUpdateActorRequest(values);
    actions.setSubmitting(true);
    await dispatch(updateActorsAsync({ id, data: updateActorRequest }));

    router.push(`/actors/${id}`);
  };

  const formik = useFormik({
    initialValues,
    onSubmit: onFormSubmit,
    validationSchema: formSchema,
    enableReinitialize: true,
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
        <h1>Edit Actor: {formik.values.name}</h1>
      </div>
      <div>{JSON.stringify(formik.values)}</div>
      <div className="flex flex-row align-items-center justify-content-center gap-6">
        <Image src={formik.values.imageUrl} alt="Image" width="650" preview />
        <form onSubmit={formik.handleSubmit}>
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
              label="Save changes"
              icon="pi pi-check"
              size="large"
            ></Button>
            <Button label="Cancel" icon="pi pi-times" size="large"></Button>
          </div>
        </form>
      </div>
      <div className="card justify-content-center">
        <FormikContext.Provider value={formik}>
          <TabView>
            <TabPanel header="News" className="m-0">
              <NewsListFormSelector />
            </TabPanel>
            <TabPanel header="Series" className="m-0">
              <SeriesListFormSelector />
            </TabPanel>
            <TabPanel header="Awards" className="m-0">
              <AwardsListFormSelector />
            </TabPanel>
          </TabView>
        </FormikContext.Provider>
      </div>
    </div>
  );
}
function setSubmitting(arg0: boolean) {
  throw new Error("Function not implemented.");
}
