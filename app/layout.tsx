/* Components */
import { Providers } from '@/lib/providers'

/* Instruments */
import './styles/globals.css'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <section>

            <header>
            </header>

            <main>{props.children}</main>

            <footer>
            </footer>
          </section>
        </body>
      </html>
    </Providers>
  )
}
