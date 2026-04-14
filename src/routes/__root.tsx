import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AIIMS Gorakhpur — All India Institute of Medical Sciences" },
      { name: "description", content: "Official website of All India Institute of Medical Sciences, Gorakhpur. Patient care, academics, research, and administration." },
      { name: "author", content: "AIIMS Gorakhpur" },
      { property: "og:title", content: "AIIMS Gorakhpur" },
      { property: "og:description", content: "Official website of All India Institute of Medical Sciences, Gorakhpur." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "AIIMS Gorakhpur" },
      { name: "twitter:description", content: "Official website of All India Institute of Medical Sciences, Gorakhpur." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/png",
        href: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/All_India_Institute_of_Medical_Sciences%2C_Gorakhpur_Logo.png/250px-All_India_Institute_of_Medical_Sciences%2C_Gorakhpur_Logo.png",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
