"use client";

import { NextIntlClientProvider } from "next-intl";

const CustomIntlProvider = ({
  children,
  messages,
  locale,
}: {
  children: React.ReactNode;
  messages: any;
  locale: string;
}) => {
  return (
    <NextIntlClientProvider
      locale={locale} // Pass the locale here
      onError={(err) => {
        if (err.code === "MISSING_MESSAGE") {
          // Ignore missing message warnings
          return;
        }
        console.error(err); // Log other errors if necessary
      }}
      messages={messages}
    >
      {children}
    </NextIntlClientProvider>
  );
};

export default CustomIntlProvider;
