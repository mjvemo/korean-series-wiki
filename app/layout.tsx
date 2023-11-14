/* Components */
"use client";
import { Providers } from "@/lib/providers";

/* Instruments */
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./styles/globals.css";

import { PrimeReactProvider } from "primereact/api";

import { MenuBar } from "./components/MenuBar";
import Link from "next/link";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <PrimeReactProvider>
        <html lang="en">
          <body>
            <section>
              <header>
                <div className="flex flex-column">
                  <div className="flex-1 h-4rem bg-primary font-bold text-center p-4 ">
                    <MenuBar />
                  </div>
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
