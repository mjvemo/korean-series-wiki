import { Button } from "primereact/button";
export function Footer() {
  return (
    <footer className="flex flex-row justify-content-center align-items-center gap-6 h-10rem font-bold text-gray-100 bg-primary">
      <div className="flex flex-row gap-2 mb-2 ">
        <Button
          className="shadow-2 bg-primary-400"
          icon="pi pi-facebook"
          size="large"
        ></Button>
        <Button
          icon="pi pi-instagram"
          className="shadow-2  bg-primary-400"
          size="large"
        ></Button>
        <Button
          icon="pi pi-github"
          className="shadow-2  bg-primary-400"
          size="large"
        ></Button>
      </div>

      <div className="flex flex-column text-gray-100 ">
        <Button className="text-gray-100" link>
          Help Center
        </Button>
        <Button className="text-gray-100" link>
          Work with us
        </Button>
      </div>
      <div className="flex flex-column ">
        <Button className="text-gray-100" link>
          Privacy Policy
        </Button>
        <Button className="text-gray-100" link>
          Terms of use
        </Button>
      </div>
    </footer>
  );
}
