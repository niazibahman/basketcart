import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa">
      <Head />
      <body dir="rtl" className="w-screen h-dvh overflow-x-hidden overflow-y-auto bg-gray-100 font-vazir">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
