import {
  ChapterFormPayload,
  SeasonFormPayload,
} from "@/lib/models/season.model";
import {
  getSeasonByIdAsync,
  getSeasonsBySerieId,
  selectActiveSeason,
  updateSeasonAsync,
  useDispatch,
  useSelector,
} from "@/lib/redux";
import {
  seasonFormtoCreateSeasonRequest,
  seasonFormtoUpdateSeasonRequest,
} from "@/lib/utils/form-mappers";
import { FormikErrors, FormikHelpers, useFormik } from "formik";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { ChapterForm } from "../ChapterForm";
import { array, object, string } from "yup";

export interface ComponentProps {
  seasonId: string;
}

const formSchema = object({
  chapters: array().of(
    object({
      name: string().required("chapter name Required"),
      description: string().required("Description Required"),
      releaseAt: string().required("Required"),
    })
  ),
});

export default function SeasonsListFormEdit(props: ComponentProps) {
  const id = props.seasonId;
  const router = useRouter();
  const dispatch = useDispatch();
  const season = useSelector(selectActiveSeason);

  useEffect(() => {
    dispatch(getSeasonByIdAsync(id));
    dispatch(getSeasonsBySerieId(id));
  }, []);

  const initialValues: SeasonFormPayload = {
    chapters: [
      {
        name: "",
        description: "",
        releaseAt: "",
      },
    ],
  };

  const onFormSubmit = async (
    values: SeasonFormPayload,
    actions: FormikHelpers<SeasonFormPayload>
  ) => {
    const updateActorRequest = seasonFormtoUpdateSeasonRequest(
      props.seasonId,
      values
    );
    actions.setSubmitting(true);
    await dispatch(updateSeasonAsync({ id, data: updateActorRequest }));

    router.push(`/seasons/${id}`);
  };

  const formik = useFormik({
    initialValues,
    onSubmit: onFormSubmit,
    validationSchema: formSchema,
    enableReinitialize: true,
  });
  const isFormFieldInvalid = (name: keyof SeasonFormPayload) =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name: keyof SeasonFormPayload) => {
    return isFormFieldInvalid(name) ? (
      <small className="p-error">{formik.errors[name] as string}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };
  const {
    values: { chapters },
    errors: { chapters: errors = [] },
    touched: { chapters: touched = [] },
  } = formik;

  function handleDelete(index: number) {
    const filtered = chapters.filter((_, i) => i !== index);
    formik.setFieldValue("chapters", [...filtered]);
  }

  function onAddChapterClick() {
    formik.setFieldValue("chapters", [
      ...chapters,
      {
        name: "",
        description: "",
        releaseAt: "",
      },
    ]);
  }
  console.log({ chapters, props });

  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="flex flex-column">
      <h1 className="p-2 m-4">Seasons Edit</h1>
      <form onSubmit={formik.handleSubmit}>
        {chapters.map((chapter, index) => (
          <ChapterForm
            key={index}
            value={chapter}
            errors={errors[index] as FormikErrors<ChapterFormPayload>}
            touched={touched[index]}
            index={index}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            onDelete={handleDelete}
          />
        ))}
        <Button onClick={onAddChapterClick}>Add Chapter</Button>
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
  );
}
