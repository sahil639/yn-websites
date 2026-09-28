import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liquidity Strategy | Yield Network",
  description:
    "Liquidity strategy, incentive design, and GTM execution for protocols going from treasury to TVL.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
