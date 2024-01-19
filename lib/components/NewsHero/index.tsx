import {
  deleteNewsByIdAsync,
  selectActiveNews,
  useDispatch,
  useSelector,
} from "@/lib/redux";
import Link from "next/link";
import { BreadCrumb } from "primereact/breadcrumb";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";
import DeleteConfirmDialog from "../DeleteConfirmDialog";

export interface ComponentProps {
  id: string;
}
export default function NewsHero(props: ComponentProps) {
  const { id } = props;
  const items = [
    { label: "News", url: "/news" },
    { label: id, url: `/news/${id}` },
  ];
  const home = { icon: "pi pi-home", url: "/" };
  const news = useSelector(selectActiveNews);
  const dispatch = useDispatch();
  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
  const [toDelete, setToDelete] = useState({ name: "", id: "" });
  const toast = useRef<Toast>(null);

  async function handleDeleteConfirm() {
    await dispatch(deleteNewsByIdAsync(toDelete.id));
    setDeleteDialogVisible(false);
    toast.current?.show({
      severity: "info",
      summary: "Actor deleted",
      detail: `Name: ${toDelete.name}`,
      life: 3000,
    });
    setToDelete({ id: "", name: "" });
  }

  return (
    <div className="grid grid-nogutter surface-50 text-800 overflow-hidden">
      <div className="col-12 md:col-4 p-6 text-center md:text-left flex align-items-center ">
        <section>
          <div>
            <BreadCrumb model={items} home={home} className="surface-100" />
          </div>
          <div className="text-md mt-4 mb-4">
            Name ~ {news?.name} <br />
            Published At ~ {news?.publishedAt} <br />
            Description ~ {news?.description}
          </div>
          <div className="flex flex-row gap-4 justify-content-start mt-6">
            <Link href={`/news/${news?.id}/edit`}>
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
          src={news?.thumbnail}
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
        message={`Are you sure you want to delete actor ${toDelete.name}`}
        onCancelDelete={() => setDeleteDialogVisible(false)}
        onConfirmDelete={() => handleDeleteConfirm()}
        onHide={() => setDeleteDialogVisible(false)}
      />
    </div>
  );
}
