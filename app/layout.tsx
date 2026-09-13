import type { Metadata } from "next";
import "./globals.css";
import PortfolioShell from "./PortfolioShell";

export const metadata: Metadata = {
  title: "Kauany Verdi — Portfólio",
  description: "Portfólio de Kauany Verdi Guerra — publicidade, pesquisa, planejamento e estratégia.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="legacy-source" aria-hidden="true">
          {children}
        </div>
        <PortfolioShell />
      </body>
    </html>
  );
}
