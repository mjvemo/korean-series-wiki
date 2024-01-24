import {
  deleteSerieByIdAsync,
  selectActiveSerie,
  useDispatch,
  useSelector,
} from "@/lib/redux";
import Link from "next/link";
import { BreadCrumb } from "primereact/breadcrumb";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";
import DeleteConfirmDialog from "../DeleteConfirmDialog";
import { useRouter } from "next/navigation";

export interface ComponentProps {
  id: string;
}
export default function SeriesHero(props: ComponentProps) {
  const { id } = props;
  const items = [
    { label: "Series", url: "/series" },
    { label: id, url: `/series/${id}` },
  ];
  const home = { icon: "pi pi-home", url: "/" };
  const serie = useSelector(selectActiveSerie);
  const dispatch = useDispatch();
  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
  const router = useRouter();

  async function handleDeleteConfirm() {
    await dispatch(deleteSerieByIdAsync(id));
    setDeleteDialogVisible(false);
    router.push("/series");
  }

  return (
    <div className="grid grid-nogutter surface-50 text-800 overflow-hidden">
      <div className="col-12 md:col-4 p-6 text-center md:text-left flex align-items-center ">
        <section>
          <div>
            <BreadCrumb model={items} home={home} className="surface-100" />
          </div>
          <div className="text-md mt-4 mb-4">
            <span className="block text-4xl font-bold mb-4 mt-6">
              {serie?.name} <br /> Rate: {serie?.rating}
            </span>
            <div>
              {serie?.createdAt} <br />
              {serie?.pg} <br />
              Genre: {serie?.genre} <br />
              Director: {serie?.directedBy} <br />
              Studio: {serie?.studio}
            </div>
          </div>
          <div className="flex flex-row gap-4 justify-content-start mt-6">
            <Link href={`/series/${serie?.id}/edit`}>
              <Button label="Edit" icon="pi pi-plus" outlined></Button>
            </Link>
            <Button
              icon={"pi pi-trash"}
              label="Delete"
              type="button"
              className="p-button-outlined"
              onClick={() => {
                setDeleteDialogVisible(true);
              }}
            />
          </div>
        </section>
      </div>
      <div className="col-12 md:col-8 overflow-hidden">
        <img
          src={serie?.image}
          alt="hero-1"
          className="sm:ml-auto block max-w-full"
          style={{
            clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)",
            maxWidth: "100",
          }}
        />
      </div>
      <DeleteConfirmDialog
        visible={deleteDialogVisible}
        message={`Are you sure you want to delete actor ${serie?.name}`}
        onCancelDelete={() => setDeleteDialogVisible(false)}
        onConfirmDelete={() => handleDeleteConfirm()}
        onHide={() => setDeleteDialogVisible(false)}
      />
    </div>
  );
}
