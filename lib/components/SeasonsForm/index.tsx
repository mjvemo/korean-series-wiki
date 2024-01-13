"use client";
import { FormikErrors, FormikHelpers, useFormik } from "formik";
import { string, object, array } from "yup";
import { ChapterForm } from "../ChapterForm";
import { Button } from "primereact/button";
import {
  SeasonFormPayload,
  ChapterFormPayload,
} from "@/lib/models/season.model";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "@/lib/redux";
import {
  createSeasonAsync,
  selectActiveSeason,
  selectSeasonRequestStatus,
} from "@/lib/redux/slices/seasons";
import { useEffect, useState } from "react";
import { seasonFormtoCreateSeasonRequest } from "@/lib/utils/form-mappers";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import Link from "next/link";

interface ComponentProps {
  id: string;
}

const formSchema = object({
  chapters: array().of(
    object({
      name: string().required("chapter name Required"),
      description: string().required("Description Required"),
      releasedAt: string().required("Required"),
    })
  ),
});

export function SeasonsForm(props: ComponentProps) {
  const router = useRouter();
  // dispatch
  const dispatch = useDispatch();
  const season = useSelector(selectActiveSeason);
  const status = useSelector(selectSeasonRequestStatus);

  const initialValues: SeasonFormPayload = {
    chapters: [
      {
        name: "",
        description: "",
        releasedAt: "",
      },
    ],
  };

  const onFormSubmit = async (
    values: SeasonFormPayload,
    actions: FormikHelpers<SeasonFormPayload>
  ) => {
    const mapped = seasonFormtoCreateSeasonRequest(props.id, values);
    await dispatch(createSeasonAsync(mapped));
    router.push(`/series/${props.id}`);
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues,
    onSubmit: onFormSubmit,
    validationSchema: formSchema,
  });

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

  const onSelectOption = (season: any) => {
    return <Link href={`/seasons/${season.id}`}>{season.name}</Link>;
  };

  function handleOnChange(event: DropdownChangeEvent) {
    setSelectedCity(event.value);
  }

  return (
    <div className="flex flex-column">
      <h1 className="p-2 m-4">Seasons</h1>
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
