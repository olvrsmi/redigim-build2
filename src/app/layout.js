import "./globals.css";


export const metadata = {
  title: "Diagram - Redigim",
  description: "Findings from ReDigIm, a research and knowledge exchange project investigating meanings and practices of redistribution in the context of digitalization.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
