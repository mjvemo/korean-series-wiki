/* Components */
"use client";
import { Providers } from "@/lib/providers";

/* Instruments */
import "primereact/resources/themes/soho-light/theme.css";
// import "primereact/resources/themes/lara-dark-purple/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./styles/globals.css";

import { PrimeReactProvider } from "primereact/api";

import { MenuBar } from "../lib/components/MenuBar";
import Link from "next/link";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <PrimeReactProvider>
        <html lang="en">
          <body className="m-0 inline">
            <section>
              <header>
                <div className="flex-1 bg-primary font-bold text-center p-4 ">
                  <MenuBar />
                </div>
              </header>

              <main>{props.children}</main>

              <footer></footer>
            </section>
          </body>
        </html>
      </PrimeReactProvider>
    </Providers>
  );
}
