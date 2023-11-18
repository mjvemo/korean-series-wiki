import { Button } from "primereact/button";
export function Footer() {
  return (
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
  );
}
