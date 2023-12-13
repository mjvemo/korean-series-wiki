import { CreateAwardForm } from "@/lib/components/CreateAwardForm";
import { Footer } from "@/lib/components/Footer";
export default function Page() {
  return (
    <div className="flex flex-column justify-content-center mt-6">
      <CreateAwardForm />
      <footer className="flex flex-row justify-content-center gap-6 h-4rem font-bold m-6">
        <Footer />
      </footer>
    </div>
  );
}
