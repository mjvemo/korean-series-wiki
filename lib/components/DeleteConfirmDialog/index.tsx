import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";

export interface ComponentProps {
  message: string;
  visible: boolean;
  onHide: () => void;
  onConfirmDelete: () => void;
  onCancelDelete: () => void;
}

export default function DeleteConfirmDialog(props: ComponentProps) {
  const footerContent = (
    <div className="flex flex-row gap-2 justify-content-end">
      <Button
        label="Delete"
        icon="pi pi-check"
        onClick={() => props.onConfirmDelete()}
        autoFocus
      />
      <Button
        label="Cancel"
        icon="pi pi-times"
        onClick={() => props.onCancelDelete()}
        className="p-button-text"
      />
    </div>
  );
  return (
    <div>
      {" "}
      <div className="card flex justify-content-center">
        <Dialog
          header="Delete"
          footer={footerContent}
          visible={props.visible}
          onHide={() => props.onHide()}
          style={{ width: "35vw" }}
          breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        >
          <p className="m-0">{props.message}</p>
        </Dialog>
      </div>
    </div>
  );
}
