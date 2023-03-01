import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Bai_Jamjuree, Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["500", "700"] });

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });

const bai_jamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["700", "500"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }

        .family-inter {
          font-family: ${inter.style.fontFamily};
        }

        .family-bai_jamjuree {
          font-family: ${bai_jamjuree.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
