import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500', '700'] });
import { AppProvider } from "@/components/AppContext";
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: "Food_Ordering_Website",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>
        <main className="max-w-4xl mx-auto p-4">
          <AppProvider>
            <Toaster />
            <Header />
            {children}
            <Footer />
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
