"use client";
import { NewsForm } from "@/lib/components/NewsForm";
import { Footer } from "@/lib/components/Footer";

export default function News() {
  return (
    <div className="flex flex-column justify-content-center mt-6">
      <NewsForm />
      <footer className="flex flex-row justify-content-center gap-6 h-4rem font-bold m-6">
        <Footer />
      </footer>
    </div>
  );
}
