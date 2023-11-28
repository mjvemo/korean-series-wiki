import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import Link from "next/link";
import Image from "next/image";

export const items = [
  {
    label: "Series",
    icon: "pi pi-fw pi-desktop",
    url: "/series",
  },
  {
    label: "Actors",
    icon: "pi pi-fw pi-user",
    url: "/actors",
  },

  {
    label: "Category",
    icon: "pi pi-fw pi-th-large",
    items: [
      {
        label: "Action",
        icon: "pi pi-fw ",
        url: "/action",
      },
      {
        label: "Animation",
        icon: "pi pi-fw ",
        url: "/animation",
      },
      {
        label: "Comedy",
        icon: "pi pi-fw ",
        url: "/comedy",
      },
      {
        label: "Crime",
        icon: "pi pi-fw ",
        url: "/crime",
      },
      {
        label: "Fantasy",
        icon: "pi pi-fw ",
        url: "/fantasy",
      },
      {
        label: "Romance",
        icon: "pi pi-fw ",
        url: "/romance",
      },
      {
        label: "Suspense",
        icon: "pi pi-fw ",
        url: "/suspense",
      },
      {
        label: "Variety Shows",
        icon: "pi pi-fw ",
        url: "/variety",
      },
    ],
  },
];

const start = (
  <Link href="/">
    <Image
      alt="logo"
      src="/appLogo.png"
      width="100"
      height="100"
      className="mr-2"
    ></Image>
  </Link>
);
const end = (
  <div className="flex">
    <div className="p-inputgroup flex-1">
      <InputText
        placeholder="Search"
        type="text"
        className="w-full p-inputtext-sm"
        keyfilter="int"
      />{" "}
      <Button icon="pi pi-search" />
    </div>
  </div>
);

export function MenuBar() {
  return (
    <div>
      <Menubar model={items} start={start} end={end} />
      <div className="flex flex-row justify-content-center gap-4"></div>
    </div>
  );
}
