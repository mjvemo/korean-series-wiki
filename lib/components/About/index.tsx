import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Image } from "primereact/image";
import { useState } from "react";
import { serie } from "@/lib/models/serie.model";
import { InputTextarea } from "primereact/inputtextarea";
import { ChangeEvent } from "react";

export function About() {
  const [description, setDescription] = useState("");
  const [textarea, setTextarea] = useState("");
  const [image, setImage] = useState("");

  function handleOnChangeDescription(e: ChangeEvent<HTMLTextAreaElement>) {
    setDescription(e.target.value);
  }

  function handleOnChangeTextarea(e: ChangeEvent<HTMLTextAreaElement>) {
    setTextarea(e.target.value);
  }

  function handleOnChangeImage(e: ChangeEvent<HTMLInputElement>) {
    setImage(e.target.value);
  }

  return (
    <div className="flex justify-content-center gap-6">
      <div className="flex flex-column">
        <h1>Synopsis</h1>
        <span className="p-float-label">
          <InputTextarea
            value={description}
            onChange={handleOnChangeDescription}
            autoResize
            rows={10}
            cols={30}
          ></InputTextarea>
        </span>
      </div>
      <div className="flex flex-column">
        <h1>News</h1>
        <div className="flex flex-row">
          <Card>
            <Image
              width="300"
              src="https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/03/24/623cd447f74c8e25951e0ffc.webp"
              preview
            ></Image>
            <div className="flex flex-column gap-2 align-items-start p-4">
              <label>Image Url</label>
              <InputText
                value={image}
                onChange={handleOnChangeImage}
              ></InputText>
            </div>

            <h3>{serie.releaseDate}</h3>
            <span className="p-float-label">
              <InputTextarea
                value={textarea}
                onChange={handleOnChangeTextarea}
                autoResize
                rows={8}
                cols={30}
              ></InputTextarea>
            </span>
          </Card>
        </div>
      </div>
    </div>
  );
}
