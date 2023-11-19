import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Image } from "primereact/image";
import { SyntheticEvent, use, useState } from "react";
import { serie } from "@/lib/models/serie.model";
import { InputTextarea } from "primereact/inputtextarea";
import { ChangeEvent } from "react";
import { Calendar } from "primereact/calendar";
import { FormEvent } from "primereact/ts-helpers";

export function About() {
  const [description, setDescription] = useState("");
  const [textarea, setTextarea] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState(new Date());

  function handleOnChangeDescription(e: ChangeEvent<HTMLTextAreaElement>) {
    setDescription(e.target.value);
  }

  function handleOnChangeTextarea(e: ChangeEvent<HTMLTextAreaElement>) {
    setTextarea(e.target.value);
  }

  function handleOnChangeImage(e: ChangeEvent<HTMLInputElement>) {
    setImage(e.target.value);
  }
  function handleOnChangeYear(
    event: FormEvent<Date, SyntheticEvent<Element, Event>>
  ) {
    if (event.value) {
      setYear(event.value);
    }
  }

  return (
    <div className="flex flex-row justify-content-center gap-6">
      <div className="flex flex-column justify-content-start pt-2">
        <h1>Synopsis</h1>
        <span className="p-float-label">
          <InputTextarea
            value={description}
            onChange={handleOnChangeDescription}
            autoResize
            rows={16}
            cols={30}
          ></InputTextarea>
        </span>
      </div>
      <div className="flex flex-column">
        <div className="flex align-items-center justify-content-center">
          <div className="flex flex-row gap-4 align-items-center">
            <div className="flex flex-column">
              <h1>News</h1>
              <Image
                width="650"
                src="https://lh3.googleusercontent.com/TIgMsEJR5zyOOpY0c_u2nH1kliF6kjwJTy0HbZ2BHUCSHeoOAAvco-8Vw3TAMSaypSlooKr2Xv2koHnu5OE43bQivgahMePdrv5Wv4Oai0dH5BQO=w780-nu-rj-l80-e365"
                preview
              ></Image>
            </div>
            <div className="flex flex-column gap-2 align-items-start pt-6 px-4">
              <label>Image Url</label>
              <InputText
                value={image}
                onChange={handleOnChangeImage}
              ></InputText>
              <label>Year</label>
              <Calendar
                value={year}
                onChange={handleOnChangeYear}
                view="year"
                dateFormat="yy"
              />
              <label>Description</label>
              <InputTextarea
                value={textarea}
                onChange={handleOnChangeTextarea}
                autoResize
                rows={8}
                cols={30}
              ></InputTextarea>
            </div>

            <div className="flex flex-column gap-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
