import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { serie, serie1, serie2 } from "@/lib/models/serie.model";
import { actor, actor1, actor2 } from "@/lib/models/actor.model";

export default function IndexPage() {
  // const [products, setProducts] = useState([]);

  // const getSeverity = (product) => {
  //   switch (product.inventoryStatus) {
  //     case "INSTOCK":
  //       return "success";

  //     case "LOWSTOCK":
  //       return "warning";

  //     case "OUTOFSTOCK":
  //       return "danger";

  //     default:
  //       return null;
  //   }
  // };
  // const productTemplate = (product) => {
  //   return (
  //     <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
  //       <div className="mb-3">
  //         <img
  //           src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
  //           alt={product.name}
  //           className="w-6 shadow-2"
  //         />
  //       </div>
  //       <div>
  //         <h4 className="mb-1">{product.name}</h4>
  //         <h6 className="mt-0 mb-3">${product.price}</h6>
  //         <Tag
  //           value={product.inventoryStatus}
  //           severity={getSeverity(product)}
  //         ></Tag>
  //         <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
  //           <Button icon="pi pi-search" className="p-button p-button-rounded" />
  //           <Button
  //             icon="pi pi-star-fill"
  //             className="p-button-success p-button-rounded"
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  const header = (
    <img
      alt="Card"
      src="https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/03/16/6231339ee2a8f37ae025032e.webp"
      width="400"
    />
  );
  const header2 = (
    <img
      alt="Card"
      src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABW3oIWd3vnP9mnHv_h9ROizp14u5xSfPEyGnjQnXc4yQnvKr_jjX4lHyPTI1MffkfC2wRS_FTYp3GIAocc3Z-IXabeFDbiLfIIj_.jpg?r=f02"
      width="400"
    />
  );
  const header3 = (
    <img
      width="400"
      alt="Card"
      src="https://1.vikiplatform.com/c/26576c/Reply-1988_1560x872_modified_1.jpg?x=b"
    />
  );
  const footer = (
    <div className="flex flex-row justify-content-center">
      <Button icon="pi pi-pencil" text></Button>
      <Button icon="pi pi-trash" text></Button>
    </div>
  );

  const headerActor = (
    <img
      width="400"
      alt="Card"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZbQrqX3vdHO55lXC6H_DMiJ66unbRhzHX8w&usqp=CAU"
    />
  );
  const headerActor1 = (
    <img
      width="400"
      alt="Card"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFeb5J5I1n0OgH0B447DVFOy3g2dCZwVq3wg&usqp=CAU"
    />
  );
  const headerActor2 = (
    <img
      width="400"
      alt="Card"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc9GYfGbGxLVoahYtbpJcg4vfM5j-CnfGDQA&usqp=CAU"
    />
  );

  return (
    <div className="flex flex-column justify-content-center flex-wrap row-gap-6">
      <div className="card flex justify-content-center">
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
            header={header}
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
            header={header2}
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
            header={header3}
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
            header={headerActor}
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
            header={headerActor1}
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
            header={headerActor2}
            className="md:w-25rem"
          >
            <p className="m-0">{actor2.agency}</p>
          </Card>
        </div>
      </div>
      <footer className="flex flex-row justify-content-center gap-6">
        <h4>This is the footer</h4>
        <h4>This is the footer</h4>
        <h4>This is the footer</h4>
      </footer>
    </div>
  );
}

export const metadata = {
  title: "Korean Series Wiki",
};
