import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { serie, serie1, serie2 } from "@/lib/models/serie.model";
import { actor, actor1, actor2 } from "@/lib/models/actor.model";
import {
  imageIndex,
  imageIndex02,
  imageIndex03,
} from "@/lib/models/images.model";
import { Carousel } from "primereact/carousel";

// import { ProductService } from "./service/ProductService";

export default function IndexPage() {
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const productTemplate = (imageIndex: any) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          <Image
            src={imageIndex.url}
            alt={imageIndex.name}
            className="w-6 shadow-2"
          />
        </div>
        <div className="mb-3">
          <Image
            src={imageIndex02.url}
            alt={imageIndex.name}
            className="w-6 shadow-2"
          />
        </div>
        <div className="mb-3">
          <Image
            src={imageIndex03.url}
            alt={imageIndex.name}
            className="w-6 shadow-2"
          />
        </div>
        <div>
          <h4 className="mb-1">{imageIndex.name}</h4>
        </div>
      </div>
    );
  };

  const header = (src: string) => <Image src={src}> </Image>;
  const headerActor = (src: string) => <Image src={src}> </Image>;

  const footer = (
    <div className="flex flex-row justify-content-center">
      <Button icon="pi pi-pencil" text></Button>
      <Button icon="pi pi-trash" text></Button>
    </div>
  );

  return (
    <div className="flex flex-column justify-content-center flex-wrap row-gap-6">
      <div className="flex align-items-center justify-content-center h-4rem bg-primary font-bold border-round m-2 card">
        <div className="card">
          <Carousel
            value={imageIndex}
            numVisible={3}
            numScroll={3}
            itemTemplate={productTemplate}
          />
        </div>

        <Image
          src="https://st4.depositphotos.com/1015390/38880/i/450/depositphotos_388808316-stock-photo-wavy-abstract-smooth-colors-background.jpg"
          alt="Image"
          width="1649"
          height="773"
        />
      </div>
      <div className="flex flex-row justify-content-between gap-6">
        <h2>Top 10 Series</h2>
        <div className="flex flex-row gap-2">
          <Button
            label="Añadir Nuevo"
            icon="pi pi-plus"
            size="small"
            outlined
          ></Button>
          <Button icon="pi pi-list" size="large" text></Button>
        </div>
      </div>
      <div className="flex align-items-start justify-content-center gap-4">
        {" "}
        <div className="card flex-auto flex-order-0">
          <Card
            title={serie.name}
            subTitle={serie.releaseDate}
            footer={footer}
            header={header(serie.url)}
            className="md:w-25rem"
          >
            <p className="m-0">{serie.description}</p>
          </Card>
        </div>
        <div className="card flex-auto flex-order-1">
          <Card
            title={serie1.name}
            subTitle={serie1.releaseDate}
            footer={footer}
            header={header(serie1.url)}
            className="md:w-25rem"
          >
            <p className="m-0">{serie1.description}</p>
          </Card>
        </div>
        <div className="card flex-auto flex-order-2">
          <Card
            title={serie2.name}
            subTitle={serie2.releaseDate}
            footer={footer}
            header={header(serie2.url)}
            className="md:w-25rem"
          >
            <p className="m-0">{serie2.description}</p>
          </Card>
        </div>
      </div>
      <div className="flex flex-row justify-content-between gap-6">
        <h2>Top 10 Actors</h2>
        <div className="flex flex-row gap-2">
          <Button
            label="Añadir Nuevo"
            icon="pi pi-plus"
            size="small"
            outlined
          ></Button>
          <Button icon="pi pi-list" size="large" text></Button>
        </div>
      </div>

      <div className="flex align-items-start justify-content-center gap-4">
        {" "}
        <div className="card flex-auto flex-order-0">
          <Card
            title={actor.name}
            subTitle={actor.age}
            footer={footer}
            header={headerActor(actor.url)}
            className="md:w-25rem"
          >
            <p className="m-0">{actor.agency}</p>
          </Card>
        </div>
        <div className="card flex-auto flex-order-1">
          <Card
            title={actor1.name}
            subTitle={actor1.age}
            footer={footer}
            header={headerActor(actor1.url)}
            className="md:w-25rem"
          >
            <p className="m-0">{actor1.agency}</p>
          </Card>
        </div>
        <div className="card flex-auto flex-order-2">
          <Card
            title={actor2.name}
            subTitle={actor2.age}
            footer={footer}
            header={headerActor(actor2.url)}
            className="md:w-25rem"
          >
            <p className="m-0">{actor2.agency}</p>
          </Card>
        </div>
      </div>
      <footer className="flex flex-row justify-content-center gap-6 h-4rem font-bold">
        <div className="flex flex-row gap-2">
          <Button icon="pi pi-facebook" size="large"></Button>
          <Button icon="pi pi-instagram" size="large"></Button>
          <Button icon="pi pi-github" size="large"></Button>
        </div>
        <div className="flex flex-column ">
          <Button link>Help Center</Button>
          <Button link>Work with us</Button>
        </div>
        <div className="flex flex-column ">
          <Button link>Privacy Policy</Button>
          <Button link>Terms of use</Button>
        </div>
      </footer>
    </div>
  );
}

export const metadata = {
  title: "Korean Series Wiki",
};
