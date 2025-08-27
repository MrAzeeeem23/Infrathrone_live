import { Poppins as PoppinsFont } from "next/font/google";
import "./globals.css";


const Poppins = PoppinsFont({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Infrathrone Live",
  description: "Build Real-World DevOps Skills with InfraThrone Live Projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
