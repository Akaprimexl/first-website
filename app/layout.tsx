import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Akif — Frontend Developer",
  description: "Akifin Next.js ilə hazırladığı professional portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <body>
        <Navbar />

        {children}

        <footer className="footer">
          <div className="footer-inner">
            <div>
              <strong>AKIF.DEV</strong>
              <p>Next.js ilə hazırlanmış şəxsi portfolio.</p>
            </div>

            <p>© 2026 Akif. Bütün hüquqlar qorunur.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
