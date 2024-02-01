import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import Link from "next/link";
import Image from "next/image";
import {
  AutoComplete,
  AutoCompleteChangeEvent,
  AutoCompleteCompleteEvent,
  AutoCompleteSelectEvent,
} from "primereact/autocomplete";
import { useState } from "react";
import {
  getEntitySuggestions,
  selectSuggestions,
  useDispatch,
  useSelector,
} from "@/lib/redux";
import { SuggestionsDTO } from "@/lib/redux/slices/autocomplete/reducers";
import {
  AutoCompleteItem,
  AutoCompleteState,
} from "@/lib/redux/slices/autocomplete/state";
import { compact, isEmpty } from "lodash";
interface AutoCompleteGroup {
  name: string;
  icon: string;
}
import { useRouter } from "next/navigation";

type ThunkPromise = (Promise<any> & { abort: () => void }) | undefined;
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
    label: "Awards",
    icon: "pi pi-fw pi-gift",
    url: "/awards",
  },
  {
    label: "News",
    icon: "pi pi-fw pi-book",
    url: "/news",
  },

  {
    label: "Category",
    icon: "pi pi-fw pi-th-large",
    items: [
      {
        label: "Action",
        icon: "pi pi-fw ",
        url: "/series?genre=action",
      },
      {
        label: "Animation",
        icon: "pi pi-fw ",
        url: "/series?genre=animation",
      },
      {
        label: "Comedy",
        icon: "pi pi-fw ",
        url: "/series?genre=comedy",
      },
      {
        label: "Crime",
        icon: "pi pi-fw ",
        url: "/series?genre=crime",
      },
      {
        label: "Fantasy",
        icon: "pi pi-fw ",
        url: "/series?genre=fantasy",
      },
      {
        label: "Romance",
        icon: "pi pi-fw ",
        url: "/series?genre=romance",
      },
      {
        label: "Suspense",
        icon: "pi pi-fw ",
        url: "/series?genre=suspense",
      },
      {
        label: "Variety Shows",
        icon: "pi pi-fw ",
        url: "/series?genre=variety",
      },
    ],
  },
];

const linkStyle = {
  textDecoration: "none",
  color: "#7254F2",
};

const start = (
  <div>
    <Link
      href="/"
      className="flex flex-row justify-content-center align-items-center"
      style={linkStyle}
    >
      <Image
        alt="logo"
        src="/appLogo.png"
        width="100"
        height="100"
        className="mr-2"
        priority={true}
      ></Image>
      <h1>Kwiki</h1>
    </Link>
  </div>
);

export function MenuBar() {
  const dispatch = useDispatch();
  const suggestions = useSelector(selectSuggestions);
  const [selectedCity, setSelectedCity] = useState<AutoCompleteItem | null>(
    null
  );
  const router = useRouter();
  let promise: ThunkPromise;

  const groupedItemTemplate = (item: AutoCompleteGroup) => {
    return (
      <div className="flex align-items-center">
        <i className={`${item.icon} mr-2`}></i> <span>{item.name}</span>
      </div>
    );
  };

  const search = async (event: AutoCompleteCompleteEvent) => {
    let query = event.query;
    if (promise) {
      promise.abort();
    }
    promise = dispatch(getEntitySuggestions(query));
    await promise;
    promise = undefined;
  };

  function handleOnSelect(event: AutoCompleteSelectEvent) {
    router.push(event.value.url);
  }

  const end = (
    <div className="flex">
      <div className="p-inputgroup flex-1">
        <AutoComplete
          value={selectedCity}
          onChange={(e: AutoCompleteChangeEvent) => setSelectedCity(e.value)}
          suggestions={buildSuggestions(suggestions)}
          completeMethod={search}
          field="name"
          optionGroupLabel="name"
          optionGroupChildren="items"
          optionGroupTemplate={groupedItemTemplate}
          minLength={3}
          onSelect={handleOnSelect}
        />
        <Button icon="pi pi-search" />
      </div>
    </div>
  );

  return (
    <div className="card shadow-6">
      <Menubar
        model={items}
        start={start}
        end={end}
        className="justify-content-evenly"
      />
    </div>
  );
}

function buildSuggestions(suggestions: AutoCompleteState) {
  return compact([
    isEmpty(suggestions.actors)
      ? undefined
      : { name: "actors", icon: "pi pi-user", items: suggestions.actors },
    isEmpty(suggestions.series)
      ? undefined
      : {
          name: "series",
          icon: "pi pi-desktop",
          items: suggestions.series,
        },
    isEmpty(suggestions.awards)
      ? undefined
      : { name: "awards", icon: "pi pi-gift", items: suggestions.awards },
    isEmpty(suggestions.news)
      ? undefined
      : { name: "news", icon: "pi pi-book", items: suggestions.news },
  ]);
}
