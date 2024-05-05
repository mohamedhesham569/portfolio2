import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Slideanimation from "@/components/Slideanimation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohamed Hisham",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Slideanimation>{children}</Slideanimation>
        </body>
    </html>
  );
}
