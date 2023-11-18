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

  function handleOnChangeDescription(e: ChangeEvent<HTMLInputElement>) {
    setDescription(e.target.value);
  }

  function handleOnChangeTextarea(e: ChangeEvent<HTMLTextAreaElement>) {
    setTextarea(e.target.value);
  }

  return (
    <div>
      <h1>Synopsis</h1>
      <InputText
        value={description}
        onChange={handleOnChangeDescription}
        placeholder="description"
      ></InputText>
      <div>
        <h1>News</h1>
        <Card>
          <Image src=""></Image>
          <h3>{serie.releaseDate}</h3>
          <span className="p-float-label">
            <InputTextarea
              value={textarea}
              onChange={handleOnChangeTextarea}
              autoResize
            ></InputTextarea>
          </span>
        </Card>
      </div>
    </div>
  );
}
