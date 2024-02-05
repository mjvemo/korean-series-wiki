"use client";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { string, object, number, date } from "yup";
import { FormikHelpers, useFormik, FormikContext } from "formik";
import { classNames } from "primereact/utils";
import { Image } from "primereact/image";
import { TabPanel, TabView } from "primereact/tabview";
import { Award } from "../Award";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { useRouter } from "next/navigation";
import {
  createSerieAsync,
  getActorsBySerieIdAsync,
  getAwardsBySerieIdAsync,
  getNewsBySerieIdAsync,
  getSerieByIdAsync,
  selectActiveSerie,
  selectActors,
  selectAwards,
  selectByEntityIdActors,
  selectByEntityIdAwards,
  selectByEntityIdNews,
  selectSerieRequestStatus,
  updateSerieAsync,
  useDispatch,
  useSelector,
} from "@/lib/redux";
import { useEffect } from "react";
import {
  serieFormToCreateSerieRequest,
  serieFormToUpdateSerieRequest,
} from "@/lib/utils/form-mappers";
import { SerieFormPayload } from "@/lib/models/serie.model";
import { Rating } from "primereact/rating";
import ActorsListFormSelector from "../ActorsListFormSelector";
import { InputTextarea } from "primereact/inputtextarea";
import AwardsListFormSelector from "../AwardsListFormSelector";
import NewsListFormSelector from "../NewsListFormSelector";
import { Card } from "primereact/card";

const formSchema = object({
  imageUrl: string().required("Invalid Format"),
  name: string().required("Name Required"),
  pg: string().required("Required"),
  rating: number().required("Required"),
  genre: string().required("Required"),
  directedBy: string().required("Required"),
  description: string().required("Description Required"),
});

export interface ComponentProps {
  serieId: string;
}

export function SeriesListFormEdit(props: ComponentProps) {
  const id = props.serieId;
  const router = useRouter();
  const dispatch = useDispatch();
  const serie = useSelector(selectActiveSerie);
  const news = useSelector(selectByEntityIdNews);
  const awards = useSelector(selectByEntityIdAwards);
  const cast = useSelector(selectByEntityIdActors);

  useEffect(() => {
    dispatch(getSerieByIdAsync(id));
    dispatch(getNewsBySerieIdAsync(id));
    dispatch(getAwardsBySerieIdAsync(id));
    dispatch(getActorsBySerieIdAsync(id));
  }, []);

  const initialValues: SerieFormPayload = {
    imageUrl: serie?.image || "imageUrl",
    name: serie?.name || "name",
    releasedAt: serie?.releasedAt || 0,
    pg: serie?.pg || "PG-",
    rating: serie?.rating || 0,
    genre: serie?.genre || "",
    directedBy: serie?.directedBy || "",
    studio: serie?.studio || "",
    description: serie?.description || "",
    seasons: [],
    cast,
    news,
    awards,
    nominations: [],
  };

  const onFormSubmit = async (
    values: SerieFormPayload,
    actions: FormikHelpers<SerieFormPayload>
  ) => {
    const updateSerieRequest = serieFormToUpdateSerieRequest(values);
    await dispatch(updateSerieAsync({ id, data: updateSerieRequest }));

    actions.setSubmitting(true);

    router.push(`/series/${id}`);
  };

  const formik = useFormik({
    initialValues,
    onSubmit: onFormSubmit,
    validationSchema: formSchema,
    enableReinitialize: true,
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
  const header = (
    <div>
      <img className="border-round" alt="Card" src={formik.values.imageUrl} />
    </div>
  );

  const subtitle = (
    <div className="flex flex-column p-2 gap-2">
      <h4 className="m-2">{formik.values.releasedAt}</h4>
      <h4 className="m-2">{formik.values.rating}</h4>
      <h4 className="m-2">{formik.values.genre}</h4>
      <h4 className="m-2">{formik.values.directedBy}</h4>
    </div>
  );

  const tittle = (
    <div>
      <div className="flex flex-row gap-4 justify-content-between p-2">
        <h4 className="m-2">{formik.values.name}</h4>
        <div className="flex flex-row gap-2 justidy-content-center align-items-center">
          <div>{formik.values.pg}</div>
        </div>
      </div>
      <Divider className="m-0" />
    </div>
  );

  return (
    <div className="flex flex-column justify-content-center flex-wrap row-gap-6 p-5">
      <div>
        <h1>Edit Serie</h1>
      </div>
      <div className="flex flex-column align-items-center justify-content-center gap-6">
        <form onSubmit={formik.handleSubmit}>
          {/* <>
            --- Formik State <br></br>
          </>
          {JSON.stringify(formik, null, 2)}
          <>
            <br></br> --- Serie <br></br>
          </>
          {JSON.stringify(serie || {}, null, 2)} */}
          <div className="flex flex-row align-items-center justify-content-center">
            <div className="flex flex-row xl:gap-8 align-items-center">
              <div className="flex flex-row flex-wrap">
                <div className="flex align-items-center justify-content-center w-30rem font-bold border-round m-2">
                  <Card
                    title={tittle}
                    subTitle={subtitle}
                    header={header}
                    className="md: w-25rem shadow-4"
                  ></Card>
                </div>
              </div>
              <div className="flex flex-column gap-2 mx-4">
                <h3>Information</h3>
                <Divider className="pt-5" />
                <div className="flex flex-column gap-2 align-items-start justify-content-center  py-3">
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
                      "lg: w-26rem": true,
                    })}
                  />
                </div>
                {getFormErrorMessage("imageUrl")}
                <div className="flex flex-column gap-2 align-items-start justify-content-start w-full">
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
                  <label>Released At</label>
                  <Calendar
                    name="releasedAt"
                    id="releasedAt"
                    value={
                      formik.values.releasedAt
                        ? new Date(formik.values.releasedAt)
                        : null
                    }
                    onChange={formik.handleChange}
                    view="year"
                    dateFormat="yy"
                    onBlur={formik.handleBlur}
                    className={classNames({
                      "p-invalid": isFormFieldInvalid("releasedAt"),
                      "w-full": true,
                    })}
                  />
                </div>
                {getFormErrorMessage("releasedAt")}
                <div className="flex flex-row flex-wrap pt-2 gap-4">
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
                    <label>rating</label>
                    <Rating
                      name="rating"
                      id="rating"
                      value={formik.values.rating}
                      onChange={formik.handleChange}
                      placeholder="rating"
                      onBlur={formik.handleBlur}
                      className={classNames({
                        "p-invalid": isFormFieldInvalid("rating"),
                        "w-full": true,
                      })}
                    />
                  </div>
                </div>
                {getFormErrorMessage("rating")}
              </div>

              <div className="flex flex-column gap-2 mx-4">
                <h3>Production</h3>
                <Divider className="p-4" />
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
                      "md: w-25rem": true,
                    })}
                  />
                </div>
                {getFormErrorMessage("genre")}
                <div className="flex flex-column gap-2">
                  <label>Director</label>
                  <InputText
                    name="directedBy"
                    id="directedBy"
                    value={formik.values.directedBy}
                    onChange={formik.handleChange}
                    placeholder="director"
                    onBlur={formik.handleBlur}
                    className={classNames({
                      "p-invalid": isFormFieldInvalid("directedBy"),
                      "w-full": true,
                    })}
                  />
                </div>
                {getFormErrorMessage("directedBy")}
                <div className="flex flex-column gap-2">
                  <label>Studio</label>
                  <InputText
                    name="studio"
                    id="studio"
                    value={formik.values.studio}
                    onChange={formik.handleChange}
                    placeholder="directed By"
                    onBlur={formik.handleBlur}
                    className={classNames({
                      "p-invalid": isFormFieldInvalid("studio"),
                      "w-full": true,
                    })}
                  />
                </div>
                {getFormErrorMessage("studio")}
                <div className="flex flex-column gap-2">
                  <label>Description</label>
                  <InputTextarea
                    name="description"
                    id="description"
                    value={formik.values.description} // description
                    onChange={formik.handleChange}
                    placeholder="description"
                    onBlur={formik.handleBlur}
                    className={classNames({
                      "p-invalid": isFormFieldInvalid("description"),
                      "w-full": true,
                    })}
                  />
                </div>
                {getFormErrorMessage("description")}
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4 justify-content-end p-6 mr-8">
            <Button
              type="submit"
              label="Save"
              icon="pi pi-check"
              size="large"
            ></Button>
            <Button label="Cancel" icon="pi pi-times" size="large"></Button>
          </div>
          <div>
            <div className="card">
              <FormikContext.Provider value={formik}>
                <TabView>
                  <TabPanel header="Cast" className="m-0">
                    <ActorsListFormSelector />
                  </TabPanel>
                  <TabPanel header="News" className="m-0">
                    <NewsListFormSelector />
                  </TabPanel>
                  <TabPanel header="Awards" className="m-0">
                    <AwardsListFormSelector />
                  </TabPanel>
                </TabView>
              </FormikContext.Provider>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
