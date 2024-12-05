/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "./tailwind.css?url";
import { MoveRight } from "lucide-react";


export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  { rel: "stylesheet", href: stylesheet },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="p-4 bg-neutral-100 h-screen w-screen">
          {children}
        </div>
        <ScrollRestoration />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  )
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Document>
      {children}
    </Document>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const caught: any = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden ">
      <div className="text-indigo-500 font-bold text-7xl">
        {caught.status}
      </div>

      <div className="font-bold text-3xl text-neutral-500 xl:text-4xl lg:text-4xl md:text-5xl">
        This page {caught.statusText}
      </div>
      <Link to={'/'} className="mt-6 bg-blue-500 hover:bg-blue-700 px-4 py-1 rounded-md transition-all duration-300">
        <button className="flex items-center gap-2 hover:gap-3 transition-all duration-300">Back to home <MoveRight/></button>
      </Link>
    </div>
  )
}