import Link from "next/link";
import { Button } from "primereact/button";

export default function Page() {
  return (
    <div>
      <h1>Seasons</h1>
      <Link href={"/seasons/create"}>
        <Button>Create</Button>
      </Link>
    </div>
  );
}
