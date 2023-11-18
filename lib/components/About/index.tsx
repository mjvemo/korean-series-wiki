import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Image } from "primereact/image";
import { useState } from "react";
import { serie } from "@/lib/models/serie.model";
import { InputTextarea } from "primereact/inputtextarea";

export function About() {
  const [description, setDescription] = useState("");
  const [textarea, setTextarea] = useState("");

  function handleOnChangeDescription(e: any) {
    setDescription(e.target.value);
  }

  function hsndleOnChangeTextarea(e: any) {
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
              onChange={hsndleOnChangeTextarea}
              autoResize
            ></InputTextarea>
          </span>
        </Card>
      </div>
    </div>
  );
}
