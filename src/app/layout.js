"use client";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Dnav from "@/components/Dnav";
import Aside from "@/components/Aside";
import { usePathname } from "next/navigation";

const sans = Open_Sans({
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  var pathname = usePathname();
  var privateRoutes = pathname.startsWith("/dashboard");

  return (
    <>
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.css"
            integrity="sha512-tx5+1LWHez1QiaXlAyDwzdBTfDjX07GMapQoFTS74wkcPMsI3So0KYmFe6EHZjI8+eSG0ljBlAQc3PQ5BTaZtQ=="
          />
        </head>
        <body suppressHydrationWarning={true}>
          {privateRoutes ? (
            <>
              <div className="max-h-screen flex flex-col h-screen bg-[#ffffff] overflow-hidden">
                <div className="w-full">
                  <Dnav />
                </div>
                <div className="flex flex-1">
                  <Aside />
                  <div className="overflow-y-auto max-h-[90vh] max-w-[100vw] overflow-x-auto flex-1 bg-[#fff] rounded-2xl shadow-[inset_0px_0px_10px_rgba(56,56,56,0.2)] p-4">
                    {children}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className={sans.className}>{children}</div>
          )}
        </body>
      </html>
    </>
  );
}
