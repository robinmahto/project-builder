import { Montserrat, Montserrat_Alternates } from "next/font/google";
import "./globals.css";

export const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mono", });

export const montAlt = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mont-alt",
  weight:'600'
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
