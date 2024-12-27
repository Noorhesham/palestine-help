import type { Metadata } from "next";
import { Cairo, Cinzel } from "next/font/google";
import "../globals.css";
import { SmoothScrollProvider } from "../context/ScrollProviderContext";
import "locomotive-scroll/src/locomotive-scroll.scss";
import { getMessages } from "next-intl/server";
import Language from "../components/Language";
import { NextIntlClientProvider } from "next-intl";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await (params as any);
  const messages = await getMessages();
  console.log(locale);
  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <body
          className={`${locale === "ar" ? "rtl" : "ltr"} ${
            locale === "ar" ? cairo.className : cinzel.className
          } antialiased`}
        >
          <Language />{" "}
          <SmoothScrollProvider>
            <div className={`main-container overflow-hidden `}>{children}</div>
          </SmoothScrollProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
