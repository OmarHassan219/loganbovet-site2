import Preloader from "@/layouts/Preloader";
import "@css/animate.css";
import "@css/global.css";
import "@css/layout.css";
import "@css/ionicons.css";
import "@css/magnific-popup.css";
import "@css/light-theme.css";
import "@css/translation-switcher.css";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import State from "/context/context";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://logan-bovet.com"),
  creator: "Logan BOVET",
  description:
    "Logan Bovet, Responsable Informatique / Support. Venez découvrir mon parcours, mes passions et mes objectifs. Vous pouvez me contacter via le site ou sur LinkedIn @logan-bovet.",
  keywords: [
    "Logan",
    "Bovet",
    "Logan BOVET",
    "LB",
    "Emploi",
    "Candidature",
    "CV",
    "Resume",
    "Informatique",
    "Support",
    "Logiciel",
    "Hardware",
    "Software",
    "Responsable",
    "Responsable Support",
    "Responsable Informatique",
    "Manager",
    "Team Lead",
    "Team Leader",
  ],
  title: {
    default: "Logan BOVET",
    template: `%s | Logan BOVET`,
  },
  openGraph: {
    url: "https://logan-bovet.com",
    description:
      "Logan Bovet, Responsable Informatique / Support. Venez découvrir mon parcours, mes passions et mes objectifs. Vous pouvez me contacter via le site ou sur LinkedIn @logan-bovet.",
    sitename: "Logan BOVET",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 120,
        height: 103,
        alt: "logo Logan BOVET",
      },
    ],
  },
};

const locales = ["en", "fr" , "de"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={robotoMono.variable}>
        <NextIntlClientProvider messages={messages}>
          <Preloader />
          <State>{children}</State>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}