import "../styles/globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Menu from "@/components/menu/megaMenu";
import { ReduxProvider } from "@/redux/provider";
import MobileMenu from "@/components/menu/mobileMenu";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <html>
        <body dir="rtl" lang="fa" className="overflow-x-hidden">
          <Navbar />
          <Menu />
          {children}
          <Footer />
          <MobileMenu />
        </body>
      </html>
    </ReduxProvider>
  );
}
