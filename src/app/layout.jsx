import "./globals.css";
import fav from "@/assets/favicon-96x96.png";

export const metadata = {
  title: "Pradipta R. Sandri",
  description: "Pradipta R. Sandri Profile",
  keywords: "React, HTML, CSS, TailwindCSS, Nextjs",
  author: "Pradipta R. Sandri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          // href="../assets/favicon-96x96.png"
          href={fav.src}
        />
      </head>
      <body className={`antialiased bg-cbrown dark:bg-cdark transition-all`}>
        {children}
      </body>
    </html>
  );
}
