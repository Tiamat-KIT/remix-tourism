import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import styles from "./tailwind.css?url"
import Navbar from "./components/Navbar";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" data-theme="night">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <Navbar />
        {children}
        <footer className="text-2xl p-5 text-center text-base-content font-bold">
          <h3>Tourism Doc</h3>
        </footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
