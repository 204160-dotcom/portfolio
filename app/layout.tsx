import type { Metadata } from "next";
import "./globals.css";
import "./portfolio.css";
import "./portfolio-home.css";
import "./portfolio-sections.css";
import "./portfolio-responsive.css";
import PortfolioShell from "./PortfolioShell";

export const metadata: Metadata = {
  title: "Kauany Verdi — Portfólio",
  description: "Portfólio de Kauany Verdi Guerra — publicidade, pesquisa, planejamento e estratégia.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="legacy-source" hidden aria-hidden="true">
          {children}
        </div>
        <PortfolioShell />
      </body>
    </html>
  );
}
