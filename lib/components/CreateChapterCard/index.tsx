"use client";
import { Card } from "primereact/card";
import { Image } from "primereact/image";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { ChangeEvent, useState } from "react";

export function CreateChapterCard() {
  const [chapter, setChapter] = useState("");
  const [description, setDescription] = useState("");

  function handleOnChangeChapter(e: ChangeEvent<HTMLInputElement>) {
    setChapter(e.target.value);
  }
  function handleOnChangeDescription(e: ChangeEvent<HTMLTextAreaElement>) {
    setDescription(e.target.value);
  }

  return (
    <div className="flex align-items-center justify-content-center">
      <Card>
        <div className="flex flex-row gap-4 align-items-center">
          <Image
            width="150"
            src="https://us-a.tapas.io/sa/31/0bbb89bf-bfdd-4148-a707-37173dd1a298.jpg"
            preview
          ></Image>
          <div className="flex flex-column">
            <div className="flex flex-column gap-2 align-items-start justify-content-start pt-4 py-4">
              <label>Chapter name</label>
              <InputText
                value={chapter}
                onChange={handleOnChangeChapter}
              ></InputText>
            </div>
            <div className="flex flex-column gap-2">
              <label>Description</label>
              <InputTextarea
                value={description}
                onChange={handleOnChangeDescription}
                autoResize
                rows={2}
                cols={10}
              ></InputTextarea>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
